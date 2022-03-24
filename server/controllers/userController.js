const ApiError = require ('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
  return jwt.sign(
      {id, email, role},
      process.env.SECRET_KEY,
      {expiresIn: '24h'}
  )
}

class UserController {
    async registration (req, res) {
        const {email, password, role} = req.body
        if(!email || ! password) {
          return next(ApiError.badReguest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
          return next(ApiError.badReguest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5) // указываем сколько раз будет пароль хешировать, т.е. 5
        const user = await User.create({email, role, password: hashPassword})
        const basket = await Basket.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res, next) {
      const {email, password} = req.body
      const user = await User.findOne({where: {email}})
      if (!user) {
          return next(ApiError.internal('Пользователь с таким именем не найден'))
      }
      let comparePassword = bcrypt.compareSync(password, user.password) //сравнение паролей
      if (!comparePassword) {
          return next(ApiError.internal('Указан неверный пароль'))
      }
      const token = generateJwt(user.id, user.email, user.role)
      return res.json({token})
  }

    async check (req, res, next) {
      // res.json ('Проверка работы контроллеров') - для юнит тестов
      const {id} = req.query
      if (!id) {
          return next(ApiError.badReguest('Ошибка! Не задан ID'))
      }
      res.json (id);
    }
}

module.exports = new UserController ()