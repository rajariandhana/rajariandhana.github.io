const folderName = "./Gallery"

const Asakusa =
[
    "Asakusa",
    "as-1.JPG","as-2.JPG","as-3.JPG","as-4.JPG","as-5.JPG","as-6.JPG"
];

const Jakarta =
[
    "Jakarta",
    "jkt-1.JPEG","jkt-2.JPEG","jkt-3.JPEG"
]

const Categories =
[
    Asakusa, Jakarta
];

const container = document.querySelector(".section1");

function GenerateElements()
{
    for(let i=0; i<container.length; i++)
    {
        console.log(i);
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add("categories");
        categoryContainer.textContent = Categories[i][0];

        const carouselContainer = document.createElement("div");
        categoryContainer.classList.add("carousel");
        for(let j=1; j<container[i].length; j++)
        {
            const image = document.createElement("img");
            image.src = folderName+Categories[i][j];
            image.classList.add("image");
            carouselContainer.appendChild(image);
        }
    }
}

GenerateElements();