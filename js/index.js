document.getElementById('spone').addEventListener('click', function(){
    const totalPrice = getItemPrice('spone-price', 'total-price', 'total');
    const addToCart = getSelectedItem('spone-name', 'cart-list');
})
document.getElementById('accessories').addEventListener('click', function(){
    const totalPrice = getItemPrice('accessories-price', 'total-price', 'total');
    const addToCart = getSelectedItem('accessories-name', 'cart-list');
})
document.getElementById('home-cooker').addEventListener('click', function(){
    const totalPrice = getItemPrice('home-cooker-price', 'total-price', 'total');
    const addToCart = getSelectedItem('home-cooker-name', 'cart-list');
})
document.getElementById('black-cap').addEventListener('click', function(){
    const totalPrice = getItemPrice('black-cap-price', 'total-price', 'total');
    const addToCart = getSelectedItem('black-cap-name', 'cart-list');
})
document.getElementById('jersey').addEventListener('click', function(){
    const totalPrice = getItemPrice('jersey-price', 'total-price', 'total');
    const addToCart = getSelectedItem('jersey-name', 'cart-list');
})
document.getElementById('cates').addEventListener('click', function(){
    const totalPrice = getItemPrice('cates-price', 'total-price', 'total');
    const addToCart = getSelectedItem('cates-name', 'cart-list');
})
document.getElementById('relax-chair').addEventListener('click', function(){
    const totalPrice = getItemPrice('relax-chair-price', 'total-price', 'total');
    const addToCart = getSelectedItem('relax-chair-name', 'cart-list');
})
document.getElementById('children-chair').addEventListener('click', function(){
    const totalPrice = getItemPrice('children-chair-price', 'total-price', 'total');
    const addToCart = getSelectedItem('children-chair-name', 'cart-list');
})
document.getElementById('sofa').addEventListener('click', function(){
    const totalPrice = getItemPrice('sofa-price', 'total-price', 'total');
    const addToCart = getSelectedItem('sofa-name', 'cart-list');
})
const apply = document.getElementById('apply-btn');
const total = document.getElementById('total');
const totalFlout = parseFloat(total.innerText);
if(total.innerText > 200.00){
    apply.disabled = false;
}
const makePurchase = document.getElementById('purchase');
if(total.innerText > 0.00){
    makePurchase.disabled = false;
}










