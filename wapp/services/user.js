import { connection } from './../database/dbConnection'

export async function checkGUID(guid) {

    const getGUIDPromise = () =>
        new Promise((resolve, reject) => {

            let conn = connection(),
                sql = `SELECT COUNT(*) AS cnt, USER_PK AS pk FROM USER_TB WHERE USER_GUID = "${guid}"`

            conn.connect()
            conn.query(sql, (err, results, fields) => {
                if ( err ) {
                    reject({
                        code: '-1',
                        message: 'DB Error'
                    })
                }

                resolve({
                    code: '1',
                    message: 'success',
                    data: {
                        cnt: results[0].cnt,
                        pk: results[0].pk
                    }
                })
            })
            conn.end()
            
            function handler() {
                let conn = connection(),
                    sql = `SELECT COUNT(*) AS cnt, USER_PK AS pk FROM USER_TB WHERE USER_GUID = "${guid}"`

                conn.connect(err => {
                    if ( err ) {
                        setTimeout(handler, 1000)
                    }
                })

                conn.query(sql, (err, results, fields) => {
                    if ( err ) {
                        reject({
                            code: '-1',
                            message: 'DB Error'
                        })
                    }

                    resolve({
                        code: '1',
                        message: 'success',
                        data: {
                            cnt: results[0].cnt,
                            pk: results[0].pk
                        }
                    })
                })
                conn.end()
            }

            // handler()
        })

    try {
        const result = await getGUIDPromise()
        return result
    } catch (e) {
        return e
    }
}

export async function registerGUID(guid) {

    const insertGUIDPromise = () =>
        new Promise((resolve, reject) => {
            
            const conn = connection()

            let sql = `INSERT INTO USER_TB (USER_GUID, USER_TYPE, USER_REG_DATE) VALUES ('${guid}', 1, NOW())`

            conn.connect()
            conn.query(sql, (err, results, fields) => {
                if ( err ) {
                    reject({
                        code: '-1',
                        message: err
                    })
                }

                resolve({
                    code: '1',
                    message: 'Registration success',
                    data: {
                        raw: results
                    }
                })
            })
            conn.end()
        })

    try {
        const result = await insertGUIDPromise()
        return result
    } catch (e) {
        return e
    }
}

export async function insertWallet(userPK, address, password) {

    const insertWalletDataPromise = () =>
        new Promise((resolve, reject) => {
            const conn = connection()

            let sql = `INSERT INTO WALLET_TB (USER_PFK, WALLET_PASSWORD, WALLET_TYPE, WALLET_ADDRESS, WALLET_REG_DATE) VALUES (${userPK}, '${password}', 1, '${address}', NOW())`

            conn.connect()
            conn.query(sql, (err, results, fields) => {
                if ( err ) {
                    reject({
                        code: '-3',
                        message: err
                    })
                }

                resolve({
                    code: '1',
                    message: 'Create successful',
                    response: {
                        address: address
                    }
                })
            })
            conn.end()
        })

    try {
        const result = await insertWalletDataPromise()
        return result
    } catch (e) {
        return e
    }
}

export async function getWalletAddress(guid, type) {

    const getWalletAddressPromise = () =>
        new Promise((resolve, reject) => {
            const conn = connection()

            let sql = `
                SELECT
                    WALLET_TB.WALLET_PASSWORD   ,
                    WALLET_TB.WALLET_ADDRESS    ,
                    WALLET_TB.WALLET_TYPE       ,
                    USER_TB.USER_GUID
                FROM
                    WALLET_TB
                INNER JOIN USER_TB
                ON
                    WALLET_TB.USER_PFK = USER_TB.USER_PK
                WHERE
                    WALLET_TB.WALLET_TYPE = ${type} AND
                    USER_TB.USER_GUID = '${guid}'
            `

            conn.connect()
            conn.query(sql, (err, results, fields) => {
                if ( err ) {
                    reject({
                        code: '-1',
                        message: 'Failed to read wallet data',
                        response: err
                    })
                }

                resolve({
                    code: '1',
                    message: 'success',
                    response: {
                        address: results[0].WALLET_ADDRESS,
                        password: results[0].WALLET_PASSWORD,
                        type: results[0].WALLET_TYPE,
                        guid: results[0].USER_GUID
                    }
                })
            })
            conn.end()
        })

    try {
        const result = await getWalletAddressPromise()
        return result
    } catch (e) {
        return e
    }
}

export async function importUser(username, guid) {

    const importUserPromise = () =>
        new Promise((resolve, reject) => {
            const conn = connection()

            let sql = `
                UPDATE
                    USER_TB
                SET
                    USER_GUID = '${guid}'
                WHERE
                    USER_GUID = 'import|${username}'
            `

            conn.connect()
            conn.query(sql, (err, results, fields) => {
                if ( err ) {
                    reject({
                        code: '-1',
                        message: 'Failed to read wallet data',
                        response: err
                    })
                }

                if ( results.affectedRows < 1 ) {
                    reject({
                        code: '-2',
                        message: 'There is no affected row'
                    })
                }

                resolve({
                    code: '1',
                    message: 'success'
                })
            })
            conn.end()
        })

    try {
        const result = await importUserPromise()
        return result
    } catch (e) {
        return e
    }
}

export async function importUserAfter(guid) {

    const importUserAfterPromise = () =>
        new Promise((resolve, reject) => {
            const conn = connection()

            let sql = `
                UPDATE
                    USER_TB
                SET
                    USER_GUID = '!${guid}'
                WHERE
                    USER_GUID = '${guid}' AND
		    (USER_PK NOT BETWEEN 333 AND 989)
                ORDER BY USER_PK ASC
                LIMIT 1
            `

            conn.connect()
            conn.query(sql, (err, results, fields) => {
                if ( err ) {
                    reject({
                        code: '-1',
                        message: 'Failed to read wallet data',
                        response: err
                    })
                }

                resolve({
                    code: '1',
                    message: 'success'
                })
            })
            conn.end()
        })

    try {
        const result = await importUserAfterPromise()
        return result
    } catch (e) {
        return e
    }
}
