# Crypto to Discord webhook

This project will, every hour, announce the crypto you'll choose via discord webhook to your discord server.

## Installation

Use the package manager [npm and nodejs (16)](https://nodejs.org/en/) to install the project.

```bash
npm i
```

## Usage

For this project you will only need to modify the following file : `./config.json` ("." mean the folder where the project is installer)
The file will (and must) be presented like this (in the following example, the api_key is the sandbox api_key and will not work) : 
```json
{
    "currency_symbol":"BTC",
    "api_key":"b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c"
}
```

You can change the currency symbol (like ETH,  FTM, etc...) and you'll need a Basic [api key](https://pro.coinmarketcap.com/) (which is free)

## Information
This project is using [coinmarketcap](https://coinmarketcap.com) api, if the values are false, please ask to the coinmarketcap support.

This project is using [nodejs](https://nodejs.org/en), you'll need to install it if you want to use the project.

*Crypto to Discord webhook* is a Nodomatic project with no license, use it as you want, if you publish it, please mention my name.

The project is coded to publish every hour (to avoid API rate limit), you can change that value in the `setInterval()` function (at your own risks).

If you have any problems, contact me with Discord : Nodomatic#7583
