// const increment = (cart, idPosition) => {
//     cart.positions[idPosition].amount += 1
//     localStorage.setItem('cart',
//         JSON.stringify(cart));
//     render(cart)
// }
// const decrement = (cart, idPosition) => {
//     cart.positions[idPosition].amount &&
//     (cart.positions[idPosition].amount -= 1)
//     localStorage.setItem('cart',
//         JSON.stringify(cart))
//     render(cart)
// }
// const cart =
//     JSON.parse(localStorage.getItem('cart'))
// const arrayFromObject = obj => Object.keys(obj).map(key => obj[key])
//
// const generateCartTable = (cart) => {
//     const trs = arrayFromObject(cart.positions).map(position => {
//         position.sum = position.price * position.amount
//
//         return `
//         <tr class="cart-position" id="${position.id}">
//             <td>${position.title}</td>
//             <td class="price">${position.price}</td>
//             <td>
//                 <button class="minus-button">-</button>
//                 <input type="text" value="${position.amount}" class="amount">
//                 <button class="plus-button">+</button>
//             </td>
//             <td class="sum">${position.sum}</td>
//         </tr>
//         `
//     })
// }
const increment = (cart, idPosition) => {
    cart.positions[idPosition].amount += 1;
    localStorage.setItem('cart',
        JSON.stringify(cart));
    render(cart)
};
const decrement = (cart, idPosition) => {
    cart.positions[idPosition].amount &&
    (cart.positions[idPosition].amount -= 1);
    localStorage.setItem('cart',
        JSON.stringify(cart));
    render(cart)
};
const cart =
    {
        positions: {
            1: {id: 1, title:"BMX WTP Trust",  price: 25000, amount: 2, sum: 0},
            2: {id: 2, title:"BMX WTP Volta",  price: 30000, amount: 3, sum: 0},
            3: {id: 3, title:"BMX WTP Crysis", price: 35000, amount: 5, sum: 0}
        }
    };
const cartInString = JSON.stringify(cart);

localStorage.setItem('cart', cartInString);
cart = JSON.parse('CartInString');
JSON.parse(localStorage.getItem('cart'));
console.log(cart);


const arrayFromObject = obj => Object.keys(obj).map(key => obj[key]);


const generateCartTable = (cart) => {
    const trs = arrayFromObject(cart.positions).map(position => {
        position.sum = position.price * position.amount;

        return `
        <tr class="cart-position" id="${position.id}">
            <td>${position.title}</td>
            <td class="price">${position.price}</td>
            <td>
                <button class="minus-button">-</button>
                <input type="text" value="${position.amount}" class="amount">
                <button class="plus-button">+</button>
            </td>
            <td class="sum">${position.sum}</td>
        </tr>
        `
    });

    const totalSum = arrayFromObject(cart.positions).reduce((sum, position) => sum + position.sum, 0)

    const totalTr = `
        <tr>
            <td colspan="3"></td>
            <td class="total">${totalSum}</td>
        </tr>`;

    const table = document.createElement('table');
    table.innerHTML = trs + totalTr;
    Array.from(table.querySelectorAll('button')).forEach(button => {
        const id = button.closest('.cart-position').id;
        button.addEventListener('click', () => button.className === 'plus-button'
            ? increment(cart, id)
            : decrement(cart, id)
        )
    });

    return table
};

const render = (cart) => {
    const cartDiv =
        document.getElementById('cart')
    const table = cartDiv.querySelector('table')
    table && cartDiv.removeChild(table)
    cartDiv.appendChild(generateCartTable(cart))
}

render(cart)

/*
# - id
. - class
[name="name"] - attributes
tag - tags
 */
