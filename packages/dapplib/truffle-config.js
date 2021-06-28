require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remain method hover argue broken skin'; 
let testAccounts = [
"0x63ffe3510cdd19b12e35f0990bedbba92cfe284e15ffc96140a9fc0a71eb1be1",
"0x5b51d6c6cf5dccb0b2ed95ecc288a562e2712897cc1727ecd964e7e0f9c320ee",
"0x709ea68c904aeac0f58cdca2c613da8074a7f02f20aaa4665d726bb70ba7babe",
"0x2c88897ae60feab08e0d646f9a66db12bd4cfabb1bffc575fdbc5420e13d14a0",
"0x62efbf1fa162f25f942d08edcc3f24da7f6eb1211f0f50e32c4819d8894dc60d",
"0x5256c31e8b508c04356d1ad2525211cbcd5fde6b60a5824ff7fec0924c1976b8",
"0x918236368368e43b7fb78852619abac6117606825025379572884035d341eb9d",
"0x67cb767a94078fe50a3a23ba67795ed17f18f2d4a615e64cb451f7c7a05fe931",
"0x4793701e79fbc074bab0312f11d02b48c6ab44cc2bafc8537299c5e2cdaa127c",
"0xc2c6e2865a078f0f69d614b4fd78687d658a55d29b3951f38ee6a6a0d77284b7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

