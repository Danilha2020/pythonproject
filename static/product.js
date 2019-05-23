const addToBasket = productString => {
    console.log(productString);
    const productObject = JSON.parse(productString);
    let cart =
        JSON.parse(localStorage.getItem('cart'));
    if (cart === null) {
        cart = {
            positions: {},
        }
    }

    cart.positions = {
        ...cart.positions,
        [productObject.id]:
            generatePositionFromProduct(productObject),
    };

    console.log(cart);
    localStorage.setItem('cart',
        JSON.stringify(cart))
};

const generatePositionFromProduct = (productObject) => {
    return {
        id: productObject[0].id,
        title: productObject.title,
        sum: 0,
        amount: 1,
        price: productObject.price,
    }
};

const buttons = document.getElementsByClassName('add-button')

Array.from(buttons).forEach(button => {
    button.addEventListener('click', (event) => {
        addToBasket(event.target.dataset.product)
    })
});
// Array.from - делает массив
// forEach - перебираем массив и запускает ф-ию
// лямбда функции/анонимные ф-ии - функции у которых нет имени,она обьявляется сразу в коде/используется один раз,в данном случае
// addEventListener - ставит обработчик на обьект(1 аргумент - событие 2 событие - ф-ия)
// e(event) - аргумент ф-ии
// dateset - обьект в котором храним все дата атрибуты<где ключи - имена артибутов которые идут после data -

