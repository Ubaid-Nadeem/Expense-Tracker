let itemName = document.getElementById('item-name');
let itemAmount = document.getElementById('item-amount');
let ul = document.getElementById('ul')
let error = document.getElementById('error')
let totalAmount = document.getElementById('totalAmount')
let total = 0
const form = document.querySelector('form');
let itemsList = []



function getDataToLocal() {
    let data = JSON.parse(localStorage.getItem('expenseTracker')) || []
    data.map(element => {
        itemsList.push(element)
        ul.innerHTML += `<li> <span> ${element.itemName}</span> : Rs ${element.itemAmount} </li>`
        total += Number(element.itemAmount)
        totalAmount.innerHTML = total.toFixed(2)

    });
}

function deleteItem() {
    localStorage.removeItem('expenseTracker')
    itemsList = []
    ul.innerHTML = ``
    total = 0
    totalAmount.innerHTML = total.toFixed(2)
}

getDataToLocal()


form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (itemName.value.indexOf('<') != -1) {
        error.innerHTML = 'error : <> is not allowed'
    }
    else {
        error.innerHTML = ''
        total += Number(itemAmount.value)
        let item = {
            itemName: itemName.value,
            itemAmount: itemAmount.value
        }
        itemsList.push(item)
        ul.innerHTML += `<li> <span> ${itemName.value}</span> : Rs ${itemAmount.value} </li>`
        itemAmount.value = ''
        itemName.value = ''

        totalAmount.innerHTML = total.toFixed(2)

        localStorage.setItem('expenseTracker', JSON.stringify(itemsList))
    }


}); 