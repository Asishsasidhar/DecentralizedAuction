var DeedRepository = require("./contracts/DeedRepository");
var AuctionRepository = require("./contracts/AuctionRepository");

module.exports = {
  // JSONRPC_ENDPOINT: 'http://52.59.238.144:8545',
  // JSONRPC_WS_ENDPOINT: 'ws://52.59.238.144:8546', //'ws://52.59.238.144:8546',
  // BZZ_ENDPOINT: 'http://52.59.238.144:8500',
  // SHH_ENDPOINT: 'ws://52.59.238.144:8546',

  DEEDREPOSITORY_ADDRESS: "0x4fb666f4B91721e7E0ecf4182a9e043dfbC51B98",
  AUCTIONREPOSITORY_ADDRESS: "0x95A1e920fbCda6eC6D4d1284f80e9ea049519c67",

  DEEDREPOSITORY_ABI: DeedRepository.abi,
  AUCTIONREPOSITORY_ABI: AuctionRepository.abi,

  GAS_AMOUNT: 500000

  //whisper settings
  // WHISPER_SHARED_KEY: '0x8bda3abeb454847b515fa9b404cede50b1cc63cfdeddd4999d074284b4c21e15'
};

// web3.eth.sendTransaction({from: web3.eth.accounts[0], to: "0x6f0023D1CFe5A7A56F96e61E0169B775Ac97f90E" , value: web3.utils.toWei(1, 'ether'), gasLimit: 21000, gasPrice: 20000000000})
