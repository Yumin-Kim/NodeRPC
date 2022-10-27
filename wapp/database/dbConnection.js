import { createConnection } from 'mysql'

export function connection() {

    return createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Xrun0701!',
        database: 'xrun',
        port: '3306'
    })
}

export async function liveCheck(conn) {

    const dbConPromise = () =>
        new Promise((resolve, reject) => {

            conn.connect(err => {
		console.log(err)
                if ( err ) {
                    reject(false)
                } else {
                    resolve(true)
                }
            })
        })

    try {
        const result = await dbConPromise(conn)
        return result
    } catch (result) {
        return result
    }
}
