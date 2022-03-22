const Router = require ('express')
const router = new Router ()
const userController = require ('../controllers/userController')


router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', userController.check)

/*
Проверка работы роутера, можно перенести в юнит тесты
router.get('/auth', (reg, res) => {
    res.json({message:'Router Work!'})
}
)*/

module.exports = router