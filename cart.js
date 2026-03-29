function addTocart(name, price, image) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price,
        image: image
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added ✅");
}


function showCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let box = document.getElementById("cart");

    if (!box) return;

    box.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {

        box.innerHTML += `
            <div style="border:1px solid white; margin:10px; padding:10px;">
                
                <img src="${cart[i].image}" width="100"><br>

                <b>${cart[i].name}</b><br>
                ₹${cart[i].price}<br>

                <button onclick="deleteItem(${i})">Delete</button>

            </div>
        `;
    }
}

function getTotal() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += Number(cart[i].price);
    }

    return total;
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

     let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += Number(cart[i].price);
    }

    alert( "Order placed successfully ✅" +
        "Total Amount: ₹" + total + " ✅");

   

    // clear cart after checkout
    localStorage.removeItem("cart");

    // refresh cart page
    showCart();
}

showCart();