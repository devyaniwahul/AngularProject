const db = require('./db')
const utils = require('./utils')
const express = require('express')
const multer = require('multer')

const router = express.Router()

const upload = multer({dest: 'images'}) 


router.post('/search',(request,response)=>{
    const {ProductName} = request.body

    const connection = db.connect1()

    const statement = `select * from products where name like '%${ProductName}%'  `
    
    connection.query(statement,(error,data)=>{
        console.log(statement)
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

module.exports = router 