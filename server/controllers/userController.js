const ApiError = require ('../error/ApiError')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')

class UserController {
    async registration (req, res) {
        const {email, password, role} = req.body
        if(!email || ! password) {
          return next(ApiError.badReguest('Некорректный email или password'))
        }
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