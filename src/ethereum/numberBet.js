import web3 from './web3';

import numberBet from './build/numberBet';

const instance = new web3.eth.Contract(
    JSON.parse(numberBet.interface),
    '0x5cb158ed5F121C1c4C5A989752894539ac737f68'
);

export default instance;