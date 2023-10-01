// console.log("hello world");

document.addEventListener('DOMContentLoaded', function ()
{
    const items = [];

    function addItem(image, name, price, link) {
        const newItem = {
            image: image,
            name: name,
            price: price,
            link: link
        };
        items.push(newItem);
    }

    addItem("Assets/mockup-kaos.png", "Kaos Putih", "IDR 95K", "https://google.com");
    addItem("Assets/mockup-kaos.png", "Kaos Hitam", "IDR 95K", "https://google.com");
    // addItem("Assets/mockup-kaos.png", "Kaos Hitam", "IDR 95K");
    // addItem("Assets/mockup-kaos.png", "Kaos Hitam", "IDR 95K");
    // addItem("Assets/mockup-kaos.png", "Kaos Hitam", "IDR 95K");
    // addItem("Assets/mockup-kaos.png", "Kaos Hitam", "IDR 95K");
    // addItem("Assets/mockup-kaos.png", "Kaos Hitam", "IDR 95K");

    // items.forEach(element => {
    //     console.log(element.image + " " + element.name + " " + element.price);
    // });

    const itemContainer = document.querySelector('.section1');

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';

        const imageElement = document.createElement('img');
        imageElement.src = item.image;

        const nameElement = document.createElement('h3');
        nameElement.textContent = item.name;

        const priceElement = document.createElement('p');
        priceElement.textContent = item.price;

        const linkElement = document.createElement('a');
        linkElement.href = item.link;
        linkElement.target = "_blank";
        linkElement.appendChild(itemElement);

        itemElement.appendChild(imageElement);
        itemElement.appendChild(nameElement);
        itemElement.appendChild(priceElement);

        itemContainer.appendChild(linkElement);
    });
});
