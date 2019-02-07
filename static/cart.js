const decrement = a =>  parseInt(a) ? a -1 : 0;

const increment = () => parseInt(a) + 1;

const cartPositions = document.querySelectorAll(selectors '.cart-positions')

cartpositions.forEach(callbackfn (cartpositions) => {
    const price = parseInt(cartPositionosition.querySelector('.price').innerHTML)
    const amount = cartPosition.querySelector('.amount')

    const plusButton = cartPositionp.querySelector('.plus-button')
    const minusButton = cartPositionp.querySelector('.minus-button')
    const sum = cartPosition.querySelector('.sum')

        .plusbutton.addEventListener( 'click', () => () => {
            const value = increment(amount.value)
            sum.innerHTML = amount.value * price
            amount.value = amountValue

    }
       .minusButton.addEventListener('click', ()  => {
           amount .value = decrement(amount.value)

    }

    cartPosition.querySelector('.sum').innerHTML = price * amount
})
