'use strict'

import express from 'express'
import { provider as _provider } from './rpcSetter'
import { checkParamNull } from './validator'
import { connection, liveCheck } from './wapp/database/dbConnection'
import { log } from './wapp/libs/libs'
// const bodyParser = require('body-parser')

const provider = _provider()

const app = express()
app.use(express.json())
app.use(express.urlencoded())
// eslint-disable-next-line no-undef
require('./wapp/routes/routes').default(app)



app.get('/', (req, res) => {

    let nullCheck = checkParamNull(req.query, new Array(`address`, `add`))

    if ( nullCheck.errCnt < 1 ) {
        provider.eth.getBalance(req.query.address).then(amount => {
            res.send(provider.utils.fromWei(amount, 'ether'))
        })
    } else {
        res.send(nullCheck.msg.replace(/(?:\r\n|\r|\n)/g, `<br>`))
    }
})

app.listen(9097, () => {
    log(`Running on 3000 port`)
})

const conn = connection()

// const live = async () => {

//     try {
//         const result = await isAlive(conn)
//         return result
//     } catch (result) {
//         return result
//     }
// }

// live().then(result => {
    
//     if ( !result ) {
//         log(`Database connection ${result}`, `e`)
//         return
//     }

//     log(`Database connection ${result}`, `i`)
// })

liveCheck(conn).then(result => {
    
    if ( !result ) {
        log(`Database connection ${result}`, `e`)
        return
    }

    log(`Database connection ${result}`, `i`)
})

// /eth/~
// /eth/token/~