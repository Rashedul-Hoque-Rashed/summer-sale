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
}
function getSelectedItem(itemName, cartItem){
    const selectedItem = document.getElementById(itemName);
    const name = selectedItem.innerText;
    const li =document.createElement('li');
    li.innerText = name;
    const cart = document.getElementById(cartItem);
    cart.appendChild(li);
}