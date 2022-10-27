import { provider as _provider } from '../../rpcSetter'
// const BN = require('bn.js')

const provider = _provider()
const abi = [{ "constant": false, "inputs": [{ "name": "newSellPrice", "type": "uint256" }, { "name": "newBuyPrice", "type": "uint256" }], "name": "setPrices", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "target", "type": "address" }, { "name": "limitBalance", "type": "uint256" }], "name": "setLimit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "burn", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "sellPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "limitAccount", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "target", "type": "address" }, { "name": "mintedAmount", "type": "uint256" }], "name": "mintToken", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "burnFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "buyPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "buy", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "frozenAccount", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_extraData", "type": "bytes" }], "name": "approveAndCall", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "sell", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "target", "type": "address" }, { "name": "freeze", "type": "bool" }], "name": "freezeAccount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "initialSupply", "type": "uint256" }, { "name": "tokenName", "type": "string" }, { "name": "tokenSymbol", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "target", "type": "address" }, { "indexed": false, "name": "balance", "type": "uint256" }], "name": "LimitBalance", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "target", "type": "address" }, { "indexed": false, "name": "frozen", "type": "bool" }], "name": "FrozenFunds", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Burn", "type": "event" }]
//const abi = [{"constant":false,"inputs":[{"name":"newSellPrice","type":"uint256"},{"name":"newBuyPrice","type":"uint256"}],"name":"setPrices","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"getMissionDetail","outputs":[{"name":"adName","type":"string"},{"name":"adCategory","type":"string"},{"name":"latitude","type":"string"},{"name":"longitude","type":"string"},{"name":"time","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address[]"},{"name":"freeze","type":"bool"}],"name":"multiFrozen","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"set","type":"bool"}],"name":"setAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"limitAccount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address[]"},{"name":"limitBalance","type":"uint256[]"}],"name":"multiLimit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"administrators","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"mintedAmount","type":"uint256"}],"name":"mintToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_value","type":"uint256"}],"name":"burnFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buy","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMissionsCount","outputs":[{"name":"len","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"frozenAccount","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address[]"},{"name":"values","type":"uint256[]"}],"name":"multiSend","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_adName","type":"string"},{"name":"_adCategory","type":"string"},{"name":"_latitude","type":"string"},{"name":"_longitude","type":"string"}],"name":"writeMissionDetail","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"target","type":"address[]"},{"indexed":false,"name":"freeze","type":"bool"}],"name":"MultiFrozenFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"}]
export function getTokenBalance(contract, address, res) {


  // if(typeof web3 !== 'undefined'){
  //     web3 = new Web3(web3.currentProvider); -this is where it errors
  // }else {
  //     web3 = new Web3(new Web3.providers.HttpProvider(`http://127.0.0.1:21115`)); 
  // }


  // var w3ss = new Web3(new Web3.providers.HttpProvider(`http://127.0.0.1:8545`));     

  // const curl = new (require( 'curl-request' ))();

  // curl.setHeaders([
  //     'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
  // ])
  // .get('https://www.google.com')
  // .then(({statusCode, body, headers}) => {
  //     console.log(statusCode, body, headers)
  //     res.send({
  //                 code: '-21',
  //                 message: headers
  //             })
  // })
  // .catch((e) => {
  //     res.send({
  //                 code: '-1',
  //                 message: 'headers' 
  //             })
  // });

  //new provider.eth.Contract(abi, contract, { from: address }).methods.balanceOf(address).call()
  new provider.eth.Contract(abi, contract).methods.balanceOf(address).call()
    .then(balance => {

      let temp = provider.utils.toBN(balance).toString()

      res.send({
        code: '1',
        message: 'success',
        response: {
          balance: provider.utils.fromWei(temp, 'ether')
        }
      })
    })
    .catch(err => {
      console.log(err)
      res.send({
        code: '-10',
        message: err,
        reqaddress: address
      })
    })
}

export function amountTest(res, amount) {

  amount = provider.utils.toBN(provider.utils.toWei(amount.toString(), 'ether')).toString()

  res.send(amount)
}

export function getLimitTest(res, contract, address) {

    const myContract = new provider.eth.Contract(abi, contract);


    myContract.methods.limitAccount(address).call()
    .then(balance => {

      let temp = provider.utils.toBN(balance).toString()

      res.send({
        code: '1',
        message: 'success',
        response: {
          balance: provider.utils.fromWei(temp, 'ether')
        }
      })
    })
    .catch(err => {
      console.log(err)
      res.send({
        code: '-10',
        message: err,
        reqaddress: address,
        reqcontract: contract
      })
    })


    // const myContract = new provider.eth.Contract(abi, contract);
    // myContract.methods.limitAccount("0x8cFD074687EAb3C4323A8a8cf519eb656db3A1EF").call()
    //     .then(result =>{
    //         res.send(result);
    //     });
    // .then(result => {

    //   // let temp = provider.utils.toBN(result).toString()

    //   res.send({
    //     code: '1',
    //     message: 'success',
    //     response: {
    //       limitAccount: provider.utils.fromWei(result, 'ether')
    //     }
    //   })
    // })
    // .catch(err => {
    //   console.log(err)
    //   res.send({
    //     code: '-10',
    //     message: err,
    //     reqaddress: address
    //   })
    // })

  // const price = provider.utils.toBN(provider.utils.toWei('3', 'Gwei')).toString()

  // const tokenInstance = new provider.eth.Contract(abi, contract, {
  //   from: '0xbdc58811124a8db32c73858e5ad5a6202fc5aafc',
  //   gas: 100000,
  //   gasPrice: price
  // })
  // tokenInstance.methods.limitAccount("0x8cFD074687EAb3C4323A8a8cf519eb656db3A1EF").call()
  //   .then(console.log);

}

export function sendToken(from, password, contract, to, amount, res) {

  amount = provider.utils.toWei(amount, 'ether')

  let transactionData = {
    from: from
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

          console.log(transactionData)

          provider.eth.personal.unlockAccount(from, password, 3600)
            .then(result => {
              const tokenInstance = new provider.eth.Contract(abi, contract, transactionData)

              tokenInstance.methods.transfer(to, amount).send(transactionData, (errSend, txid) => {
                if (errSend) {
                  res.send({
                    code: '-1',
                    message: errSend
                  })
                  return
                }

                res.send({
                  code: '1',
                  message: 'success',
                  response: {
                    txid: txid
                  }
                })
                return
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

export function switchToken(address, contract, amount, res) {

  const price = provider.utils.toBN(provider.utils.toWei('3', 'Gwei')).toString()

  const tokenInstance = new provider.eth.Contract(abi, contract, {
    from: '0xbdc58811124a8db32c73858e5ad5a6202fc5aafc',
    gas: 100000,
    gasPrice: price
  })

  amount = provider.utils.toWei(amount, 'ether')

  provider.eth.personal.unlockAccount('0xbdc58811124a8db32c73858e5ad5a6202fc5aafc', 'khi20050701*', 60000)
    .then(result => {
      tokenInstance.methods.transfer(address, amount).send({
        from: '0xbdc58811124a8db32c73858e5ad5a6202fc5aafc',
        gas: 100000,
        gasPrice: price
      }, (errSend, txid) => {
        if (errSend) {
          res.send({
            code: '-1',
            message: errSend
          })
          return
        }

        res.send({
          code: '1',
          message: 'success',
          response: {
            txid: txid
          }
        })
        return
      })
      // .on('transactionHash', txid => {
      //     res.send({
      //         code: '1',
      //         message: 'success',
      //         response: {
      //             txid: txid
      //         }
      //     })
      //     return false
      // })
      // .on('error', e => {
      //     res.send({
      //         code: '-2',
      //         message: e
      //     })
      //     return
      // })
    })
    .catch(e => {
      res.send({
        code: '-1',
        message: e
      })
      return
    })
}