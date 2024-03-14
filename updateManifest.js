const fs = require('fs');
const path = require('path');

// Function to recursively get all subdirectories
function getAllDirectories(rootDir) {
    const directories = [];

    function traverse(currentDir) {
        const files = fs.readdirSync(currentDir);

        files.forEach(file => {
            const filePath = path.join(currentDir, file);
            if (fs.statSync(filePath).isDirectory()) {
                directories.push(filePath.replace(rootDir, ''));
                traverse(filePath);
            }
        });
    }

    traverse(rootDir);
    return directories;
}

// Function to read files in a directory
function readFilesInDirectory(directory) {
    return fs.readdirSync(directory);
}

// Function to update imsmanifest.xml
function updateManifestFile(files) {
    const manifestPath = path.join(__dirname, 'build', 'imsmanifest.xml');
    let manifestContent = fs.readFileSync(manifestPath, 'utf8');

    // Find the <resource> element
    const resourceStartIndex = manifestContent.indexOf('<resource identifier="resource_1"');
    const resourceEndIndex = manifestContent.indexOf('</resource>', resourceStartIndex);

    // Get the content before and after the <resource> element
    const beforeResource = manifestContent.slice(0, resourceEndIndex);
    const afterResource = manifestContent.slice(resourceEndIndex);

    // Append each file to the resources section of the manifest
    const filesList = files.map(file => `<file href="${file}"/>`).join('\n');
    const updatedManifestContent = `${beforeResource}\n${filesList}\n${afterResource}`;
    console.log(filesList);
    // Write the updated content back to the manifest file
    fs.writeFileSync(manifestPath, updatedManifestContent);
}

// Get all subdirectories inside the public folder
const publicPath = path.join(__dirname, 'build');
const directories = getAllDirectories(publicPath);

// Read files from each directory and update the manifest
directories.forEach(directory => {
    const files = readFilesInDirectory(path.join(publicPath, directory));
    updateManifestFile(files.map(file => `${directory}/${file}`));
});

console.log('imsmanifest.xml updated successfully.');
