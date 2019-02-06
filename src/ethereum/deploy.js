const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledBet = require('./build/numberBet');

const provider = new HDWalletProvider(
    //give access to account mnemonic
    // provide your metamask account mnemonic
    //link to RinkeBy network
    // provide link to your infura network
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await new web3.eth.getAccounts();
  console.log(accounts);
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledBet.interface))
      .deploy({
          data: '0x' + compiledBet.bytecode,
          arguments: []
      })
      .send({
          from: accounts[0]
      });

  console.log('Contract deployed to', result.options.address)
};

deploy();
