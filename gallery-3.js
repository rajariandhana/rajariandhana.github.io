// const gallery = document.querySelector('.section1');

// function loadPhotos(folderName) {
//     // Assuming your photos are in a folder named 'images' within each topic folder
//     const folderPath = `./${folderName}/`;
 
//     // Use AJAX or Fetch to load images from the folder
//     fetch(folderPath)
//         .then(response => response.text())
//         .then(data => {
//             // Parse the directory listing or use another method to get a list of image filenames
//             const imageFilenames = parseDirectoryListing(data);
 
//             // Loop through the image filenames and create HTML elements for each
//             imageFilenames.forEach(filename => {
//                 const img = document.createElement('img');
//                 img.src = folderPath + filename;
//                 img.alt = folderName; // Set alt text as the folder name
//                 const title = document.createElement('div');
//                 title.textContent = folderName; // Use folder name as the title
 
//                 // Create a container div for each photo with its title
//                 const photoContainer = document.createElement('div');
//                 photoContainer.classList.add('photo-container');
//                 photoContainer.appendChild(img);
//                 photoContainer.appendChild(title);
 
//                 // Append the photo container to the gallery
//                 gallery.appendChild(photoContainer);
//             });
//         })
//         .catch(error => console.error(`Error loading photos from ${folderName}:`, error));
//  }
 
// loadPhotos('Asakusa');
// loadPhotos('Jkt');

const gallery = document.querySelector('.section1');

function loadPhotos(folderName) {
    // Assuming you have an array of image filenames for each folder
    const imageFilenames = getImagesForFolder(folderName);

    // Loop through the image filenames and create HTML elements for each
    imageFilenames.forEach(filename => {
        const img = document.createElement('img');
        img.src = `./${folderName}/${filename}`;
        img.alt = folderName; // Set alt text as the folder name
        const title = document.createElement('div');
        title.textContent = folderName; // Use folder name as the title

        // Create a container div for each photo with its title
        const photoContainer = document.createElement('div');
        photoContainer.classList.add('photo-container');
        photoContainer.appendChild(img);
        photoContainer.appendChild(title);

        // Append the photo container to the gallery
        gallery.appendChild(photoContainer);
    });
}

// Function to retrieve image filenames (you need to implement this)
function getImagesForFolder(folderName) {
    // Return an array of image filenames for the given folder
    // You may fetch this list from a server or define it manually
    // For example:
    if (folderName === 'Asakusa') {
        return ['photo1.jpg', 'photo2.jpg'];
    } else if (folderName === 'Jkt') {
        return ['photo3.jpg', 'photo4.jpg'];
    }
    // Add more folder checks and filename lists as needed
    return [];
}

// Call the function to load photos
loadPhotos('Asakusa');
loadPhotos('Jkt');
