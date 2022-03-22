const ApiError = require ('../error/ApiError')

class UserController {
    async registration (reg, res) {

    }
    async login (reg, res) {
        
    }
    async check (reg, res, next) {
      // res.json ('Проверка работы контроллеров') - для юнит тестов
      const {id} = reg.query
      if (!id) {
          return next(ApiError.badReguest('Ошибка! Не задан ID'))
      }
      res.json (id);
    }
}

module.exports = new UserController ()