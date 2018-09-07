const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privateKey = 'C9B92C6E0BEEB2010682C6A6352F90A85A4B746B1D9C1C0E72CEB49F97D48687';
const accessToken = '76997662fe974862805187c5fb128d97';

module.exports = {
    networks: {
        ropsten: {
            provider: () => new HDWalletProvider([privateKey], 'https://ropsten.infura.io/' + accessToken),
        network_id: 3,
        gas: 6000000,
        gasPrice: 20000000000
    }
}
};