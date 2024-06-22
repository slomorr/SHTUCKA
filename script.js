// script.js

function showProductDetails(title, description) {
    document.getElementById('productTitle').innerText = title;
    document.getElementById('productDescription').innerText = description;
    document.getElementById('productModal').style.display = 'block';
}

function closeProductDetails() {
    document.getElementById('productModal').style.display = 'none';
}
