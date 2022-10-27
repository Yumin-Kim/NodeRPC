import { provider as _provider } from './../../rpcSetter'
import { insertWallet } from './user'

import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';
import moment from 'moment';

const provider = _provider()

const logDir = 'logs';  // logs 디렉토리 하위에 로그 파일 저장
const { combine, timestamp, printf } = winston.format;

// Define log format
const logFormat = printf(info => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

/*
 * Log Level
 * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
 */
const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    logFormat,
  ),
  transports: [
    // info 레벨 로그를 저장할 파일 설정
    new winstonDaily({
      level: 'info',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir,
      filename: `%DATE%.log`,
      maxFiles: 30,  // 30일치 로그 파일 저장
      zippedArchive: true, 
    }),
    // error 레벨 로그를 저장할 파일 설정
    new winstonDaily({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: logDir + '/error',  // error.log 파일은 /logs/error 하위에 저장 
      filename: `%DATE%.error.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
  ],
});

// Production 환경이 아닌 경우(dev 등) 
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),  // 색깔 넣어서 출력
      winston.format.simple(),  // `${info.level}: ${info.message} JSON.stringify({ ...rest })` 포맷으로 출력
    )
  }));
}

export { logger };
  


export function getEthBalance(address, res) {

   
    provider.eth.getBalance(address, (err, balance) => {

        if ( err ) {
            logger.error('Error message :' + provider.version);
            res.send({
                code: '-2',
                // message: 'Failed to get balance 2' + Object.values(provider)
                message: 'Failed to get balance 2' +  err 
            })
            return
        }

        res.send({
            code: '1',
            message: 'success',
            response: {
                wallet: address,
                raw: balance,
                toNum: provider.utils.fromWei(balance, 'ether')
            }
        })
    })
}

export function createWallet(userPK, password, res) {

    provider.eth.personal.newAccount(password, (err, account) => {
        if ( err ) {
            res.send({
                'code': '-1',
                'message': 'Failed to create wallet'
            })
            return
        }

        insertWallet(userPK, account, password).then(result => {
            res.send(result)
        })

        // let sql = `INSERT INTO WALLET_TB (USER_PFK, WALLET_PASSWORD, WALLET_TYPE, WALLET_ADDRESS, WALLET_REG_DATE) VALUES (${userPK}, 'xrun0701!', 1, '${account}', NOW())`

        // const conn = connection()

        // conn.connect()
        // conn.query(sql, (err, results, fields) => {
        //     if ( err ) {
        //         res.send({
        //             code: '-3',
        //             message: 'Failed to insert wallet data'
        //         })
        //     }

        //     res.send({
        //         code: '1',
        //         message: 'Create successful',
        //         response: {
        //             address: account
        //         }
        //     })
        // })
        // conn.end()
    })
}


export function sendEth(from, password, to, amount, res) {

    amount = provider.utils.toWei(amount, 'ether')

    let transactionData = {
        from: from,
        to: to,
        value: amount
    }

    const gasLimitParams = {
        toBlock: 'latest'
    }

    provider.eth.estimateGas(gasLimitParams)
        .then(gasLimit => {
            transactionData['gas'] = gasLimit

            provider.eth.getGasPrice()
                .then(gasPrice => {
                    transactionData['gasPrice'] = gasPrice

                    provider.eth.personal.unlockAccount(from, password, 60000)
                        .then(result => {
                            provider.eth.sendTransaction(transactionData, (transactionError, txhash) => {
                                if ( transactionError ) {
                                    res.send({
                                        code: '-5',
                                        message: 'Cannot send now. try again later'
                                    })
                                }

                                res.send({
                                    code: '1',
                                    message: 'Success',
                                    response: {
                                        txid: txhash
                                    }
                                })
                            })
                        })
                        .catch(e => {
                            res.send({
                                code: '-4',
                                message: 'Cannot unlock account'
                            })
                            return
                        })
                })
                .catch(e => {
                    res.send({
                        code: '-3',
                        message: 'Cannot get gas price'
                    })
                    return
                })
        })
        .catch(e => {
            res.send({
                code: '-2',
                message: 'Cannot get gas limit'
            })
            return
        })
}

export function switchEth(address, amount, res) {

    // amount = provider.utils.toBN(provider.utils.toWei(amount.toString(), 'ether')).toString()
    amount = provider.utils.toWei(amount, 'ether')

    let transactionData = {
        from: '0xbdc58811124a8db32c73858e5ad5a6202fc5aafc',
        to: address,
        value: amount
    }

    const gasLimitParams = {
        toBlock: 'latest'
    }

    provider.eth.estimateGas(gasLimitParams)
        .then(gasLimit => {
            transactionData['gas'] = gasLimit

            provider.eth.getGasPrice()
                .then(gasPrice => {
                    transactionData['gasPrice'] = gasPrice

                    provider.eth.personal.unlockAccount('0xbdc58811124a8db32c73858e5ad5a6202fc5aafc', 'khi20050701*', 60000)
                        .then(result => {
                            provider.eth.sendTransaction(transactionData, (transactionError, txhash) => {
                                if ( transactionError ) {
                                    res.send({
                                        code: '-5',
                                        message: 'Cannot send now. try again later'
                                    })
                                }

                                res.send({
                                    code: '1',
                                    message: 'Success',
                                    response: {
                                        txid: txhash
                                    }
                                })
                            })
                        })
                        .catch(e => {
                            res.send({
                                code: '-4',
                                message: 'Cannot unlock account'
                            })
                            return
                        })
                })
                .catch(e => {
                    res.send({
                        code: '-3',
                        message: 'Cannot get gas price'
                    })
                    return
                })
        })
        .catch(e => {
            res.send({
                code: '-2',
                message: 'Cannot get gas limit'
            })
            return
        })

}

export function status(txhash, res) {

    provider.eth.getTransactionReceipt(txhash)
        .then(result => {
            if ( result == null ) {
                res.send({
                    code: '1',
                    message: 'Transaction status: pending',
                    response: {
                        status: '1'
                    }
                })
                return
            }

            if ( result.status ) {
                res.send({
                    code: '1',
                    message: 'Transaction status: success',
                    response: {
                        status: '2'
                    }
                })
                return
            } else {
                res.send({
                    code: '1',
                    message: 'Transaction status: failed',
                    response: {
                        status: '3'
                    }
                })
                return
            }
        })
        .catch(e => {
            res.send({
                code: '-1',
                message: e
            })
            return
        })
}