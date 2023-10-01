const imageCategories = {
    category1: [
        './Asakusa/as-1.JPEG',
        './Asakusa/as-2.jpg',
        './Asakusa/as-3.jpg',
        './Asakusa/as-4.jpg',
        './Asakusa/as-5.jpg',
        './Asakusa/as-6.jpg'
        // Add more images for category 1
    ],
    category2: [
        './Jkt/jkt-1.JPEG',
        './Jkt/jkt-2.JPEG',
        './Jkt/jkt-3.JPEG',
        './Jkt/jkt-1.JPEG',
        './Jkt/jkt-2.JPEG',
        './Jkt/jkt-3.JPEG',
        './Jkt/jkt-1.JPEG',
        './Jkt/jkt-2.JPEG',
        './Jkt/jkt-3.JPEG'
        // Add more images for category 2
    ],
    // Add more categories as needed
};

function createSlideshow(category, images) {
    const categoryContainer = document.createElement('div');
    categoryContainer.classList.add('category-container');

    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = category;
    categoryContainer.appendChild(categoryTitle);

    const slideshowContainer = document.createElement('div');
    slideshowContainer.classList.add('slideshow-container');

    const slideWrapper = document.createElement('div');
    slideWrapper.classList.add('slide-wrapper');

    const slides = document.createElement('div');
    slides.classList.add('slides');

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        slides.appendChild(img);
    });

    slideWrapper.appendChild(slides);
    slideshowContainer.appendChild(slideWrapper);
    categoryContainer.appendChild(slideshowContainer);

    document.querySelector('.categories').appendChild(categoryContainer);
}

// Loop through imageCategories and create slideshows for each category
for (const category in imageCategories) {
    const images = imageCategories[category];
    createSlideshow(category, images);
}
