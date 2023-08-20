document.getElementById('spone').addEventListener('click', function () {
    const totalPrice = getItemPrice('spone-price', 'total-price', 'total');
    const addToCart = getSelectedItem('spone-name', 'cart-list');
})

document.getElementById('accessories').addEventListener('click', function () {
    const totalPrice = getItemPrice('accessories-price', 'total-price', 'total');
    const addToCart = getSelectedItem('accessories-name', 'cart-list');
})

document.getElementById('home-cooker').addEventListener('click', function () {
    const totalPrice = getItemPrice('home-cooker-price', 'total-price', 'total');
    const addToCart = getSelectedItem('home-cooker-name', 'cart-list');
})

document.getElementById('black-cap').addEventListener('click', function () {
    const totalPrice = getItemPrice('black-cap-price', 'total-price', 'total');
    const addToCart = getSelectedItem('black-cap-name', 'cart-list');
})

document.getElementById('jersey').addEventListener('click', function () {
    const totalPrice = getItemPrice('jersey-price', 'total-price', 'total');
    const addToCart = getSelectedItem('jersey-name', 'cart-list');
})

document.getElementById('cates').addEventListener('click', function () {
    const totalPrice = getItemPrice('cates-price', 'total-price', 'total');
    const addToCart = getSelectedItem('cates-name', 'cart-list');
})

document.getElementById('relax-chair').addEventListener('click', function () {
    const totalPrice = getItemPrice('relax-chair-price', 'total-price', 'total');
    const addToCart = getSelectedItem('relax-chair-name', 'cart-list');
})

document.getElementById('children-chair').addEventListener('click', function () {
    const totalPrice = getItemPrice('children-chair-price', 'total-price', 'total');
    const addToCart = getSelectedItem('children-chair-name', 'cart-list');
})

document.getElementById('sofa').addEventListener('click', function () {
    const totalPrice = getItemPrice('sofa-price', 'total-price', 'total');
    const addToCart = getSelectedItem('sofa-name', 'cart-list');
})


document.getElementById('apply-btn').addEventListener('click', function () {
    if (document.getElementById('coupon').value === 'SELL200') {
        const totalPrice = document.getElementById('total-price').innerText;
        const totalPriceNum = parseFloat(totalPrice).toFixed(2);
        const discount = document.getElementById('discount-price');
        const total = document.getElementById('total');
        discount.innerText = (totalPriceNum * (20 / 100)).toFixed(2);
        total.innerText = (total.innerText - discount.innerText).toFixed(2);
    } else {
        alert('Your coupon code is wrong!!!');
    }
    document.getElementById('coupon').value = '';
})

document.getElementById('home').addEventListener('click', function () {
    window.location.href = 'index.html';
})














