require('dotenv').config()
const express = require ('express')
const sequelize = require ('./db')

const PORT = process.env.PORT || 5000

const app = express()


const start = async () => {
        try{
            await sequelize.authenticate() // с помощью данной функции подключаюсь к БД
            await sequelize.sync() //сверка запросов
            app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
        } catch (e) {
            console.log(e)
        }
}

start()



