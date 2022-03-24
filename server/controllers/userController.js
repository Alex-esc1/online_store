const ApiError = require ('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken')
const {User, Basket} = require('../models/models')

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
        const jwt = jwt.sign(
          {id: user.id, email, role}, 
          process.env.SECRET_KEY,
          
          )
    }
    async login (req, res) {
        
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