const addToBasket = (productId) => {
    console.log(cart)
    let cart =
     JSON.parse(localStorage.getItem('cart'))
    if (cart === null){
        cart ={
            positions: {},
        }
    }
    console.log(cart)
    cart.positions = {
        ...cart.positions,
        [productId]: getProductFromServer(productId),
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

const getProductFromServer = (productId) => {
    return products[productId]
}

const buttons = document.getElementsByClassName('add-button')

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        addToBasket(e.target.dataset.id)
    })
})
