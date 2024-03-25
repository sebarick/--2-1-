const addProduct = () => {
    const name = document.querySelector('#nameInput').value;
    const info = document.querySelector('#infoInput').value;
    const quantity = document.querySelector('#quantityInput').value;
    const price = document.querySelector('#priceInput').value;

    const image = document.querySelector('#imageInput').files[0];

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    productInfo.innerHTML = `
        <h3>${name}</h3>
        <p>info: ${info}</p>
        <p>quantity: ${quantity}</p>
        <p>Price: ${price}</p>
    `;

    productCard.appendChild(productInfo);

    if (image) {
        const imagePreview = document.createElement('img');
        imagePreview.classList.add('product-image');
        imagePreview.file = image;
        productCard.appendChild(imagePreview);

        const reader = new FileReader();
        reader.onload = (function (aImg) { return function (e) { aImg.src = e.target.result; }; })(imagePreview);
        reader.readAsDataURL(image);
    }

    document.querySelector('#productList').appendChild(productCard);

    // Clear input fields
    document.querySelector('#nameInput').value = '';
    document.querySelector('#infoInput').value = '';
    document.querySelector('#commentInput').value = '';
    document.querySelector('#priceInput').value = '';
}
