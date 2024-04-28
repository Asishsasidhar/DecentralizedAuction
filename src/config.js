var DeedRepository = require("./contracts/DeedRepository");
var AuctionRepository = require("./contracts/AuctionRepository");

module.exports = {
  JSONRPC_ENDPOINT: "http://localhost:7545",
  JSONRPC_WS_ENDPOINT: "ws://localhost:7545", //'ws://52.59.238.144:8546',
  BZZ_ENDPOINT: "http://52.59.238.144:8500",
  SHH_ENDPOINT: "ws://52.59.238.144:8546",

  DEEDREPOSITORY_ADDRESS: "0x8ef57507296FcE755f4C9f65A7b26761685489Ec",
  AUCTIONREPOSITORY_ADDRESS: "0x7E9d8F2c5f8Be9F36d0A8CDcf2BeC47a09b3147C",

  DEEDREPOSITORY_ABI: DeedRepository.abi,
  AUCTIONREPOSITORY_ABI: AuctionRepository.abi,

  GAS_AMOUNT: 500000,

  //whisper settings
  WHISPER_SHARED_KEY:
    "0x8bda3abeb454847b515fa9b404cede50b1cc63cfdeddd4999d074284b4c21e15",
};

// web3.eth.sendTransaction({from: web3.eth.accounts[0], to: "0x6f0023D1CFe5A7A56F96e61E0169B775Ac97f90E" , value: web3.utils.toWei(1, 'ether'), gasLimit: 21000, gasPrice: 20000000000})
