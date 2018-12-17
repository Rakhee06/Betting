const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledBet = require('./build/numberBet');

const provider = new HDWalletProvider(
    'legend camp novel noble pulse slab pumpkin foot unique dry shiver squeeze',
    'https://rinkeby.infura.io/v3/51be615868a24a0497a195047a73aaf4'
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