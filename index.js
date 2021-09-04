const fetch = require("node-fetch")
const config = require("./config.json");

function getIsActive(is_active){
    if(is_active === 0){
        return "No, it is not active"
    }else if(is_active === 1){
        return "Yes, it is active"
    }else{
        return "An error occured."
    }
}

function getIsFiat(is_fiat){
    if(is_fiat === 0){
        return "No, this crypto is not FIAT"
    }else if(is_fiat === 1){
        return "Yes, this money is FIAT"
    }else{
        return "An error occured."
    }
}

function sendRequest(){
    if(config.debug === true) console.log('Send request starting')
    fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${config.currency_symbol}`, {
        method: 'GET', 
        headers: {
            "Accept":"*/*",
            "Accept-Encoding":"gzip, deflate, br",
            "X-CMC_PRO_API_KEY":config.api_key
        }
    })
    .then(response => response.json())
    .then(data => {
        if(config.debug === true) console.log('fetch ended')
        if(data.status.error_code === 0){
            var dat = data.data[config.currency_symbol]
            fetch(
                `${config.discord_webhook_url}`,
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    username: `${config.currency_symbol +' to Discord webhook'}`,
                    embeds: [
                      {
                        title: `${config.currency_symbol+ " informations"}`,
                        url:
                          `${"https://coinmarketcap.com/currencies/"+dat.slug}`,

                        fields: [
                          {
                            name: `${"Value of the "+config.currency_symbol +" (in USD)"}` ,
                            value: `${dat.quote.USD.price.toFixed(2)} $`,
                          },
                          {
                            name: `${"Percent of change of the "+config.currency_symbol+" (last 1h)"}` ,
                            value: `${dat.quote.USD.percent_change_1h}%`,
                          },
                          {
                            name: `${"Percent of change of the "+config.currency_symbol+" (last 24h)"}` ,
                            value: `${dat.quote.USD.percent_change_24h}%`,
                          },
                          {
                            name: `${"Percent of change of the "+config.currency_symbol+" (last 7d)"}` ,
                            value: `${dat.quote.USD.percent_change_7d}%`,
                          },
                          {
                            name: `Is the ${dat.name} active`,
                            value: `${getIsActive(dat.is_active)}`,
                          },
                          {
                            name: `Is the ${dat.name} FIAT`,
                            value: `${getIsFiat(dat.is_fiat)}`,
                          },
                          {
                            name: `Total supply of ${dat.name}`,
                            value: `${dat.total_supply} ${dat.symbol}`
                          },
                        ],
                        footer: {
                            text: 'Data provided by coinmarketcap.com, this project is not affiliated with coinmarketcap.com',
                        },
                      },
                    ],
                  }),
                }
              ).then(response => {if(config.debug === true) console.log(response)})
              if(config.debug === true) console.log('Send request ending')
        }else{
            console.log(`An error occured, please contact Nodomatic#7583 via Discord or go to "https://github.com/Nodomatic/crypto-to-discord-webhook/issues"`)
            process.exit(1)
        }
    })
}

function dataTest(){
    if(config.debug === true) console.log("Data test starting")
    if(!config){
        console.log("Error, no config.json file")
        process.exit(0)
    }else if(config.api_key === undefined){
        console.log("Error, no api_key")
        process.exit(0)
    }else if(config.currency_symbol === undefined){
        console.log("Error, no currency_symbol")
        process.exit(0)
    }else if(config.discord_webhook_url === undefined){
        console.log("Error, no discord_webhook_url")
        process.exit(0)
    }else{
        if(config.debug === true) console.log("Data test ending")
        sendRequest()
    }
}

dataTest()

setInterval(dataTest, 3600000)