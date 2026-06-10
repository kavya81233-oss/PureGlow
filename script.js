let count = 0;

function addToCart()
{
count++;

document.getElementById("cart-count").innerText = count;

alert("Product Added To Cart");
}

document
.getElementById("contactForm")
.addEventListener("submit", function(e)
{
e.preventDefault();

alert("Message Sent Successfully!");

this.reset();
});