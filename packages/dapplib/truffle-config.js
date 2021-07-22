require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remain erosion inflict phone orange tomato'; 
let testAccounts = [
"0x20c358932339340d6b9942cd4ed471b41e478bcce831559385f7615317cc2632",
"0x1841455232a942f1e66810874879a2a113cd8f8bc7df6d38c1d0c5a48726e756",
"0x5ca39b129596dccf2c4860479f28a144c6fb3adcf2c45fcd537d0358e6ec9d9e",
"0x7fa530374aa6314b4b2231b0dec1b9b9abddef97c93a3ed1b5fcb08dc5abacf5",
"0x469860f4f5c6ebb1ca81c9c0a0f9458aa0d7dfb52de6e6198144cf1dbe936d75",
"0x2994f6664d55c699be5ccc0e6d08840ca2d5328be1bd39cfccab465809c36873",
"0x9ef42c4f56e677ef3246a57fe0d22ced443253532cdcdfc2390623389dd05173",
"0xc5d07f0677d532878271d1dce78f9f37379c0cfb64043ff89211317c4af2b25d",
"0xf1ce5daa8b603a265fca707db8954d0844aa0a0ee71d4f50b3e0566b657aee24",
"0x07eb73c6e2be5c9ae38e222063c3126ba097a4a18a90e444ec2a32fc9b089b52"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

