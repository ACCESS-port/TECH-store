function addTocart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(name + " - ₹" + price);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added ✅");
}


function showCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let box = document.getElementById("cart");

    box.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {

        box.innerHTML += `
            <p>
                ${cart[i]}
                <button onclick="deleteItem(${i})">Delete</button>
            </p>
        `;
    }
}


function deleteItem(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1); // remove item

    localStorage.setItem("cart", JSON.stringify(cart));

    showCart(); // refresh cart
}

function checkout() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Cart is empty ❌");
        return;
    }

    alert("Order placed successfully ✅");

    // clear cart after checkout
    localStorage.removeItem("cart");

    // refresh cart page
    showCart();
}

showCart();