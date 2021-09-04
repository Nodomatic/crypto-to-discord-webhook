# Crypto to Discord webhook

This project will, every hour, announce the crypto you'll choose via discord webhook to your discord server.

## Installation

Use the package manager [npm and use nodejs](https://nodejs.org/en/) to install and use the project.

```bash
npm i
```

## Usage

For this project you will only need to modify the following file : `./config.json` ("." mean the folder where the project is installer)
The file will (and must) be presented like this (in the following example, the api_key is the sandbox api_key and will not work, same for the discord_webhook_url) : 
```json
{
    "currency_symbol":"BTC",
    "api_key":"b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c",
    "discord_webhook_url":"https://discord.com/api/webhooks/.../...",
    "debug":false
}
```

You can change the currency symbol (like ETH,  FTM, etc...) and you'll need a Basic [api key](https://pro.coinmarketcap.com/) (which is free)

## Informations
The *Crypto to Discord webhook* will give you the following informations :

- The value of the crypto
- The percent of change from the last :
    - 1 hour
    - 24 hours
    - 7 days
- If the crypto is active
- If the money is FIAT
- *More will be added soon...*

If the "debug" option is activated, it will console.log() the response from discord and every steps

## About
This project is using [coinmarketcap](https://coinmarketcap.com) api, if the values are false, please ask to the coinmarketcap support.

This project is using [nodejs](https://nodejs.org/en), you'll need to install it if you want to use the project.

*Crypto to Discord webhook* is a Nodomatic project with no license, use it as you want, if you publish it, please mention my name.

The project is coded to publish every hour (to avoid API rate limit), you can change that value in the `setInterval()` function (at your own risks).

If you have any problems or suggestions, contact me with Discord : Nodomatic#7583

This project is not affiliated with [coinmarketcap](coinmarketcap.com)