import { cat } from "shelljs";
import Config from "../config";

export class AuctionRepository {
  web3 = null;
  account = "";
  contractInstance = null;
  gas = 4476768;

  constructor() {
    this.gas = Config.GAS_AMOUNT;
  }

  setWeb3(web3) {
    this.web3 = web3;
    this.contractInstance = new this.web3.eth.Contract(
      Config.AUCTIONREPOSITORY_ABI,
      Config.AUCTIONREPOSITORY_ADDRESS
    );
  }

  getWeb3() {
    return this.web3;
  }

  setAccount(account) {
    this.account = account;
  }

  getCurrentBlock() {
    return new Promise((resolve, reject) => {
      this.web3.eth.getBlockNumber((err, blocknumber) => {
        if (!err) resolve(blocknumber);
        reject(err);
      });
    });
  }

  async watchIfCreated(cb) {
    const currentBlock = await this.getCurrentBlock();
    this.contractInstance.events.AuctionCreated(
      {
        filter: {},
        fromBlock: currentBlock - 1
      },
      cb
    );
  }
  async watchIfModified(cb) {
    const currentBlock = await this.getCurrentBlock();
    this.contractInstance.events.AuctionModified(
      {
        filter: {},
        fromBlock: currentBlock - 1
      },
      cb
    );
  }

  async watchIfBidSuccess(cb) {
    const currentBlock = await this.getCurrentBlock();
    this.contractInstance.events.BidSuccess(
      {
        filter: {},
        fromBlock: currentBlock - 1
      },
      cb
    );
  }

  async watchIfCanceled(cb) {
    const currentBlock = await this.getCurrentBlock();
    this.contractInstance.events.AuctionCanceled(
      {
        filter: {},
        fromBlock: currentBlock - 1
      },
      cb
    );
  }
  async watchIfPaused(cb) {
    const currentBlock = await this.getCurrentBlock();
    this.contractInstance.events.AuctionPaused(
      {
        filter: {},
        fromBlock: currentBlock - 1
      },
      cb
    );
  }

  async watchIfFinalized(cb) {
    const currentBlock = await this.getCurrentBlock();
    this.contractInstance.events.AuctionFinalized(
      {
        filter: {},
        fromBlock: currentBlock - 1
      },
      cb
    );
  }
  getCurrentBid(auctionId) {
    return new Promise(async (resolve, reject) => {
      try {
        this.contractInstance.methods
          .getCurrentBid(auctionId)
          .call({ from: this.account, gas: this.gas }, function(
            err,
            transaction
          ) {
            if (!err) resolve(transaction);
            reject(err);
          });
      } catch (e) {
        reject(e);
      }
    });
  }

  getBidCount(auctionId) {
    return new Promise(async (resolve, reject) => {
      try {
        this.contractInstance.methods
          .getBidsCount(auctionId)
          .call({ from: this.account, gas: this.gas }, function(
            err,
            transaction
          ) {
            if (!err) resolve(transaction);
            reject(err);
          });
      } catch (e) {
        reject(e);
      }
    });
  }

  getCount() {
    return new Promise(async (resolve, reject) => {
      try {
        await web3.eth.getAccounts((err, data) => {
          if (data.length > 0) this.setAccount(data[0]);
        });
        this.contractInstance.methods
          .getCount()
          .call({ from: this.account, gas: this.gas }, function(
            err,
            transaction
          ) {
            if (!err) resolve(transaction);
            reject(err);
          });
      } catch (e) {
        reject(e);
      }
    });
  }

  bid(auctionId, price) {
    console.log(auctionId, this.web3.utils.toWei(price, "ether"));
    return new Promise(async (resolve, reject) => {
      try {
        this.contractInstance.methods.bidOnAuction(auctionId).send(
          {
            from: this.account,
            gas: this.gas,
            value: this.web3.utils.toWei(price, "ether")
          },
          function(err, transaction) {
            if (!err) resolve(transaction);
            reject(err);
          }
        );
      } catch (e) {
        reject(e);
      }
    });
  }

  create(deedId, auctionTitle, metadata, startingPrice, blockDeadline) {
    return new Promise(async (resolve, reject) => {
      try {
        this.contractInstance.methods
          .createAuction(
            Config.DEEDREPOSITORY_ADDRESS,
            deedId,
            auctionTitle,
            metadata,
            this.web3.utils.toWei(startingPrice, "ether"),
            blockDeadline
          )
          .send({ from: this.account, gas: this.gas }, function(
            err,
            transaction
          ) {
            if (!err) resolve(transaction);
            reject(err);
          });
      } catch (e) {
        reject(e);
      }
    });
  }

  cancel(auctionId) {
    return new Promise(async (resolve, reject) => {
      try {
        this.contractInstance.methods
          .cancelAuction(auctionId)
          .send({ from: this.account, gas: this.gas }, function(
            err,
            transaction
          ) {
            if (!err) resolve(transaction);
            reject(err);
          });
      } catch (e) {
        reject(e);
      }
    });
  }
  pause(auctionId) {
    return new Promise(async (resolve, reject) => {
      try {
        this.contractInstance.methods
          .pauseAuction(auctionId)
          .send({ from: this.account, gas: this.gas }, function(
            err,
            transaction
          ) {
            if (!err) resolve(transaction);
            reject(err);
          });
      } catch (e) {
        reject(e);
      }
    });
  }

  resume(auctionId) {
    return new Promise(async (resolve, reject) => {
      try {
        this.contractInstance.methods
          .resumeAuction(auctionId)
          .send({ from: this.account, gas: this.gas }, function(
            err,
            transaction
          ) {
            if (!err) resolve(transaction);
            reject(err);
          });
      } catch (e) {
        reject(e);
      }
    });
  }

  finalize(auctionId) {
    return new Promise(async (resolve, reject) => {
      try {
        this.contractInstance.methods
          .finalizeAuction(auctionId)
          .send({ from: this.account, gas: this.gas }, function(
            err,
            transaction
          ) {
            if (!err) resolve(transaction);
            reject(err);
          });
      } catch (e) {
        reject(e);
      }
    });
  }

  findById(auctionId) {
    return new Promise(async (resolve, reject) => {
      try {
        this.contractInstance.methods
          .getAuctionById(auctionId)
          .call({ from: this.account, gas: this.gas }, function(
            err,
            transaction
          ) {
            if (!err) resolve(transaction);
            reject(err);
          });
      } catch (e) {
        reject(e);
      }
    });
  }

  getAllBids(auctionId) {
    return new Promise(async (resolve, reject) => {
      try {
        this.contractInstance.methods
          .getAllBids(auctionId)
          .call({ from: this.account, gas: this.gas }, function(
            err,
            transaction
          ) {
            if (!err) resolve(transaction);
            reject(err);
          });
      } catch (e) {
        reject(e);
      }
    });
  }

  withdrawBid(auctionId) {
    return new Promise(async (resolve, reject) => {
      try {
        this.contractInstance.methods
          .withdrawBid(auctionId)
          .send({ from: this.account, gas: this.gas }, function(
            err,
            transaction
          ) {
            if (!err) resolve(transaction);
            reject(err);
          });
      } catch (e) {
        reject(e);
      }
    });
  }
  extendDeadline(timeStamp, auctionId) {
    return new Promise(async (resolve, reject) => {
      try {
        this.contractInstance.methods
          .extendDeadline(timeStamp, auctionId)
          .send({ from: this.account, gas: this.gas }, function(
            err,
            transaction
          ) {
            if (!err) {
              resolve(transaction);
              // console.log(`Trans is: ${transaction}`);
            }
            reject(err);
          });
      } catch (e) {
        // console.log(`Inside: ${e}`);
        reject(e);
      }
    });
  }
}
