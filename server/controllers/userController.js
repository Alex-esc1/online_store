class UserController {
    async registration (reg, res) {

    }
    async login (reg, res) {
        
    }
    async check (reg, res) {
      // res.json ('Проверка работы контроллеров') - для юнит тестов
      const {id} = reg.query
      res.json (id)
    }
}

module.exports = new UserController ()