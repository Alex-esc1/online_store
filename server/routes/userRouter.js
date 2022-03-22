const Router = require ('express')
const router = new Router ()
const userController = require ('../controllers/userController')


router.post('/registration',)
router.post('/login',)
router.get('/auth',)

/*
Проверка работы роутера, можно перенести в юнит тесты
router.get('/auth', (reg, res) => {
    res.json({message:'Router Work!'})
}
)*/

module.exports = router