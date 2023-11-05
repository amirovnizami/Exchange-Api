
class Currency{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.amount = null;
    }

    exchange(){

        return new Promise((resolve,reject) => {
            //sona hansi pul basedirse onu verirsen
            const url = `https://open.er-api.com/v6/latest/${this.firstCurrency}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    //base pul hansi idise ona uygun diger pullarin nisbeti cixir burada ikinciye uygun nisbeti goturub hesablama gedir
                    const parity = data["rates"][this.secondCurrency];
                    const amount2 = Number(this.amount);

                    //TODO: 1 - pul u deyisende ele eleki isdifadeci pulu secen kimi aninda silmek lazim olmadan cavab ekran gorunsun
                    //TODO: 2 - base pul hansidirsa o pul cevrilecek pul inputunda cixmamalidi onu duzelt.

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
