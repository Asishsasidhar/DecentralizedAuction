# Decentralized Auction DApp

## Team: Crypto Coders

### Team Members

- _Asish Malineni_
  - CWID: 885197335
  - Email: [asishsasidhar@csu.fullerton.edu](mailto:asishsasidhar@csu.fullerton.edu)
- _Niharika Velidhi_
  - CWID: 885665331
  - Email: [velidhiniharika@csu.fullerton.edu](mailto:velidhiniharika@csu.fullerton.edu)
- _Sai Mohan Mangesh_
  - CWID: 885613026
  - Email: [mohansaimangeshy@csu.fullerton.edu](mailto:mohansaimangeshy@csu.fullerton.edu)
- _Vinay Kalluri_
  - CWID: 885197459
  - Email: [vinaykalluri@csu.fullerton.edu](mailto:vinaykalluri@csu.fullerton.edu)
- _Vinith Bandoju_
  - CWID: 885203323
  - Email: [vinithbandoju@csu.fullerton.edu](mailto:vinithbandoju@csu.fullerton.edu)

## Project Overview

Our project focuses on developing a fully decentralized auction application using blockchain technology. This DApp provides a platform for users to host and bid on auctions in a secure and transparent manner.

## Initial Repository

- [Project Repository on GitHub](https://github.com/ethereumbook/ethereumbook/blob/develop/12dapps.asciidoc)

## Project Execution and Challenges

- _Execution_: We successfully ran the project and tackled numerous issues related to older source code versions, alongside implementing several critical improvements.
- _Component Deprecation_: With the deprecation of Swarm and Whisper, we have transitioned to using IPFS (Pinata) for decentralized storage and Sockets for communication.
- _Resource Challenges_: The need for extensive research led to an increased demand for Sepolia ETH, which became difficult to acquire as many free faucets stopped supporting it.

## Key Improvements and Features

### Blockchain and Smart Contracts

- _Initial Deployments_: Utilized Ganache for initial tests, followed by successful contract deployment on the Sepolia testnet via Remix IDE.

### IPFS Integration

- _Storage Solutions_: IPFS is utilized for storing auction metadata, deed images, and deed metadata.
- _Service Providers_: Chose Pinata after evaluating other IPFS providers like Infura and Kubos, which were unsatisfactory.

### Communication and Interaction

- _Sockets_: Implemented to replace Whisper, enhancing user interaction within the NFT section.
- _Alternative Protocols_: Investigated IPFS pub/sub, Js libP2P, and @waku/sdk, which were found incompatible.

### Front-End Deployment

- _Fleek_: Switched from Swarm to Fleek for front-end deployment. Fleek ensures all front-end updates are automatically published to IPFS, maintaining the decentralized nature of the application.

### UI Enhancements

- Ongoing improvements to enhance user experience and interface aesthetics.

## Contract Improvements

- _Extend Deadline_: Auction hosts can extend the bidding period by selecting additional days via the frontend.
- _Withdraw Bid_: Allows users to withdraw their previous bids on NFTs.
- _Pause/Resume Auction_: Enables hosts to pause and resume the auction as needed.
- _List of Bids_: Enhanced to display all bids to the auction host, not just the most recent.
