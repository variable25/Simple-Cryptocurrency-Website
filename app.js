const url = 'https://api.coingecko.com/api/v3/simple/price?vs_currencies=eur&ids=bitcoin,ethereum,dogecoin'

let NumberFormat = (number) => {
    return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(number)
}

const getPrices = async () => {
    
    try {
        const response = await fetch(url, {
            headers: {"x-cg-demo-api-key" : API_Key}
        })
        if (!response.ok) {
            throw new Error("Request Failed with status code" + response.status);
            
        }
        const data = await response.json()
        document.querySelector('#bitcoin-price').innerHTML =  NumberFormat(data.bitcoin.eur)
        document.querySelector('#ethereum-price').innerHTML = NumberFormat(data.ethereum.eur)
        document.querySelector('#dogecoin-price').innerHTML = NumberFormat(data.dogecoin.eur)
        
    } catch (error) {
        console.error(error.message)
        document.querySelector('#bitcoin-price').innerHTML = 'NA'
        document.querySelector('#ethereum-price').innerHTML = 'NA'
        document.querySelector('#dogecoin-price').innerHTML = 'NA'
    }


}

getPrices()