# DECENTRALIZED BETTING APPLICATION USING BLOCKCHAIN

This project is developed to conduct a betting where several users can register themselves to bet and bet on a number they want. The administrator starts the bet with a range of numbers and finally ends the bet and distributes the prize money to the winners. It is a decentralized web application where several users can login at the same time and place bets.

### Assumptions
This project is a decentralized web application. It is assumed that the user of this application knows how to use a computer and access the web browser. Anyone who needs to use this application is required to have an Ethereum account and an injected Web3 provider. Future version of the application will provide a wallet to the users who sign up and hence the above requirement is no longer needed.

### Prerequisites to run this project locally
To run this project locally before deployment, the user must have latest version of Node.js and npm module installed in their systems.

### Steps to Run the application
* Create a new directory in your local file system. `mkdir betting`
* Copy the given project zip files in that directory and extract the zip file.
* There are 2 files in the directory `Betting Server` and `Betting Client`
* Open the terminal or command prompt window in `Betting Server` directory and type `npm install`.
* Repeat the above step for `Betting Client` as well.
* The installation of all the dependencies takes approximately 10 minutes.
* Once the dependencies are installed, go to `Betting Server` and type `npm start` to start the server.
* Similarly, go to `Betting Client` and type `npm start` to start the client
* The server boots up on `localhost:5000` and client boots up on `localhost:3000`. Therefore, if you have anything running on these ports, please close it.

### Steps to use the application
#### To login
* Click on the login button on the top right corner of your screen
* If you are a new user, click on the register tab and type your username, password and address (`unique Ethereum address`).
* If you are the admin, go to chairperson tab and enter your address.
* If you are a returning user, click on login tab and enter your username and password and click the login button.
#### Starting a new Bet
* You must be the chairperson to start the bet
* Login as a chairperson and then set the bet number. If you set the bet number as 3, the betting slots will be opened for numbers `{{0}, {1}, {2}}`.
* Sign in to your injected web3 provider.
* Click on Set number button. You will be redirected to `Give Rights` page.
* Type the addresses of users to whom you want to give rights to bet and click on `Give Rights` button.
* It takes approximately 15 seconds to add your transaction to the blockchain.
* The added addresses can start betting.
#### Place Bets
* Login with your username and password
* Type the number you want to bet on and the bet amount in the fields provided and click on Bet button.
* You can place any number of bets.
#### End the Bet
* You must be a chairperson to end the bet.
* Login as chairperson and then navigate to `Give Rights` page and click on `End Bet` button to end the bet.
#### View Summary
* Once the chairperson has ended the bet, you can click on the `Summary` button to view the summary of the betting.

### Steps to change the chairperson address
We currently have not implemented a UI for changing the chairperson. We assume that chairperson himself has deployed the contract and hence, his address is hardcoded. However, in future versions of this application, we will provide access to people to start their own private betting game and make their address as the chairperson address. Therefore to change the chairperson’s address currently for testing purposes, please follow the steps below
* Navigate to Betting Client/ Ethereum folder and type “node compile.js” to compile the contract.
* Then type `node deploy.js` to deploy the contract.
* Finally, copy the new contract address and paste it in `Betting Client/Ethereum/numberBet.js` in place of the old contract.
* Now the chairperson will be the account with which you have deployed the contract.