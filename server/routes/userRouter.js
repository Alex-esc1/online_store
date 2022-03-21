const Router = require ('express')
const router = new Router ()


router.post('/registration',)
router.post('/login',)
router.get('/auth', (reg, res) => {
    res.json({message:'Router Work!'})
}

)

module.exports = router