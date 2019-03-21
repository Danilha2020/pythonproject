const decrement = a => parseInt(a) ? a - 1 : 0;
const increment = a => parseInt(a) + 1;

const cartPositions = Array.from(document.querySelectorAll('.cart-position'));
const total = document.querySelector('#total'); //123

cartPositions.forEach((cartPosition) => {
    const price = parseInt(cartPosition.querySelector('.price').innerHTML);
    const amount = cartPosition.querySelector('.amount');

    const plusButton = cartPosition.querySelector('.plus-button');
    const minusButton = cartPosition.querySelector('.minus-button');

    const sum = cartPosition.querySelector('.sum');
    sum.innerHTML = parseInt(amount.value) * price;

    plusButton.addEventListener('click', () => {
        const amountValue = increment(amount.value);
        sum.innerHTML = amountValue * price;
        amount.value = amountValue
        total.innerHTML = parseInt(total.innerHTML) + price //123
    })

    minusButton.addEventListener('click', () => {
        const amountValue = decrement(amount.value);
        sum.innerHTML = amountValue * price;
        parseInt(amount.value) && (total.innerHTML = parseInt(total.innerHTML) - price) //123
        amount.value = amountValue
    })
})
cart=ls.getItem('cart');