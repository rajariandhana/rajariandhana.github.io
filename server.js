app.get('/getImages/:public', (req, res) => {
    const folderName = req.params.folderName;
    const fs = require('fs');
    const path = `./public/${folderName}/`;

    fs.readdir(path, (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error reading folder' });
        } else {
            // Filter files to keep only image file types (e.g., .jpg, .png)
            const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
            res.json({ images: imageFiles });
        }
    });
});
