const addToBasket = (category) => {
    product = JSON.parse('product')
    console.log(product)
    let cart =
        JSON.parse(localStorage.getItem('cart'))
    if (cart === null) {
        cart = {
            positions: {},
        }
    }

    cart.positions = {
        ...cart.positions,
        [product.id]:
            getProductFromServer(category),
    }

    console.log(cart)
    localStorage.setItem('cart',
        JSON.stringify(cart))
}

const getProductFromServer = (category) => {
    return {
        id: category.id,
        title: category.title,
        sum: 0,
        amount: 1,
        price: category.price,
    }
}

const buttons = document.getElementsByClassName('add-button')

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (e) => {
        addToBasket(e.target.dataset.product)
    })
})
