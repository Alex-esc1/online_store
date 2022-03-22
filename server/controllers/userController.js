class UserController {
    async registration (reg, res) {

    }
    async login (reg, res) {
        
    }
    async check (reg, res) {
       res.json ('Проверка работы контроллеров')
    }
}

module.exports = new UserController ()