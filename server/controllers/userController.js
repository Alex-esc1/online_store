class UserController {
    async registration (reg, res) {

    }
    async login (reg, res) {
        
    }
    async check (reg, res) {
      // res.json ('Проверка работы контроллеров') - для юнит тестов
      const query = reg.query
      res.json (query)
    }
}

module.exports = new UserController ()