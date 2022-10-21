// var sorted_array = prompt("Enter sorted array");
// sorted_array = sorted_array.split(" ")

// let len = sorted_array.length

// let start = 0; 
// let end = len - 1;
// while(start <= end){
//     sorted_array.push(parseInt(sorted_array[end]))
//     if(start != end) sorted_array.push(parseInt(sorted_array[start]))
//     end--; start++;
// }

// sorted_array = sorted_array.slice(len)

// console.log(sorted_array);

class Coffee{
    constructor(){
        this.products = ["espresso", "cappuccino", "latte"];
        this.addOn = ["milk", "cream", "latte"];
        this.prices = [[60, 75, 100], [80, 90, 125], [100, 125, 150]];
    }

    price(product, addon){
        let productIdx = this.products.findIndex((item)=>{return(item == product)})
        let addonIdx = this.addOn.findIndex((item)=>{return item == addon})
        return this.prices[productIdx][addonIdx]
    }

    addAnother(product, addon) {
        return this.price(product, addon);
    }

    getData(){
        let product = document.querySelector("#coffee").value.toLowerCase();
        let addOn = document.querySelector("#addOn").value.toLowerCase();
        return([product, addOn])
    }

    total(products, addOns){
        let totalPrice = 0;
        products.forEach((product, index) => {
            totalPrice += this.price(product, addOns[index])
        });

        return totalPrice;
    }

    insertRow(product, addOn, price) {
        let rowCount = table.rows.length
        let row = table.insertRow(rowCount);
    
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
    
        cell1.innerHTML = product;
        cell2.innerHTML = addOn;
        cell3.innerHTML = price;
    }
    
}

const coffee1 = new Coffee();

let products = []
let addOns = []
let prices = []

const addAnotherButton = document.querySelector("#addAgain");
const totalButton = document.querySelector("#total");
const table = document.querySelector(".receiptTable");

addAnotherButton.addEventListener("click", ()=>{

    table.style.visibility = "visible";

    let data = coffee1.getData();
    let product = data[0];
    let addOn = data[1];
    products.push(product)
    addOns.push(addOn)

    //add row to receipt table
    let price = coffee1.price(product, addOn);
    prices.push(price)
    coffee1.insertRow(product, addOn, price);
})

totalButton.addEventListener("click", ()=>{
    if(prices.length == 0){
        alert("first, add your coffee!!")
    }else{
        var total = 0;
        prices.forEach((price)=>{
            total += price;
        })

        coffee1.insertRow("----", "total", total);
    }
    

})




