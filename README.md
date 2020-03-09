## Gnosis Safe Factories

This repo contains the Soldity code for the factories to create Safe instances of specific versions.

### Safe 1.1.1 Factory
Enables user to create a [1.1.1 Safe](https://github.com/gnosis/safe-contracts/releases/tag/v1.1.1) with the msg.sender as the only owner and threshold 1. No further configuration will be done during creation (no modules or fallback manager). All funds send to the factory for the creation call will be forwarded to the newly created Safe.

* Factory contract: `Safe_1_1_1_Factory.sol`
  * Mastercopy: [`0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F`](https://etherscan.io/address/0x34CfAC646f301356fAa8B21e94227e3583Fe3F5F)
  * Proxy factory: [`0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B`](https://etherscan.io/address/0x76E2cFc1F5Fa8F6a5b3fC4c8F4788F0116861F9B)

Proxy creation can be triggered by sending a transaction without data (normal transfer) to the factory address. Any ETH value set in the transaction will be forwared to the new Safe instance.

### Audit
[An audit](https://github.com/g0-group/Audits/blob/9454c83dec6dd92be14a768b779c85489ca1671f/G0Group-GnosisSafeFactoryFeb2020.pdf) has been performed by the [G0 Group](https://github.com/g0-group/).

### Run tests

* `yarn`
* `yarn test`

### Deployment

* Create `.env` based on `.env.sample`
* `yarn deploy <network>`
  * To deploy a specific migration use `yarn deploy <network> -f 1 --to 1`
* Use `yarn version` or run `yarn restore` before you pusblish the package
