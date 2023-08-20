function getItemPrice(mainItemPrice, cartTotalPrice, totalWithDiscount){
    const itemPrice = document.getElementById(mainItemPrice);
    const itemPriceValue = itemPrice.innerText;
    const price = parseFloat(itemPriceValue);

    const totalPrice = document.getElementById(cartTotalPrice);
    const totalPriceValue =totalPrice.innerText;
    const cartPrice = parseFloat(totalPriceValue);
    totalPrice.innerText = (cartPrice + price).toFixed(2);
    
    const allTotal = document.getElementById(totalWithDiscount);
    allTotal.innerText = totalPrice.innerText;


    const apply = document.getElementById('apply-btn');
    const total = document.getElementById('total');
    if (total.innerText > 200) {
        apply.disabled = false;
    }
    const makePurchase = document.getElementById('purchase');
    if (total.innerText > 0) {
        makePurchase.disabled = false;
    }
}

function getSelectedItem(itemName, cartItem){
    const selectedItem = document.getElementById(itemName);
    const name = selectedItem.innerText;
    const li =document.createElement('li');
    li.innerText = name;
    const cart = document.getElementById(cartItem);
    cart.appendChild(li);
}