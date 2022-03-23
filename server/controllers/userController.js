const ApiError = require ('../error/ApiError')

class UserController {
    async registration (req, res) {

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