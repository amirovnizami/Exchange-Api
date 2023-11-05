
class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        const baseCurrency = 'EUR';
        const accesskey = '488aa603cd2fb5b76a87282300dceba3';
        this.url = `http://data.fixer.io/api/latest?access_key=${accesskey}&base=${baseCurrency}`;
        this.amount = null;
    }

    exchange(){

        return new Promise((resolve,reject) => {
            fetch(this.url)
                .then(response => response.json())
                .then(data => {
                const parity = data["rates"][this.secondCurrency];
                const amount2 = Number(this.amount);

                let total = parity * amount2;
                
                resolve(total);


                })
                .catch(err => reject(err));


        });


    }

    changeAmount(amount){
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;

    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;

    }

}
