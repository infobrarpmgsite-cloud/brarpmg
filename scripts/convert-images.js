const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join(__dirname, '../src/assets/images/properties/vip-107');

async function convertImages(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });
  const conversionPromises = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    
    if (entry.isDirectory()) {
      // Recursively process subdirectories
      conversionPromises.push(convertImages(fullPath));
    } else if (entry.name.endsWith('.avif')) {
      const outputPath = fullPath.replace('.avif', '.webp');
      
      // Add conversion promise to array
      conversionPromises.push(
        sharp(fullPath)
          .webp({ 
            quality: 80,
            effort: 6, // Higher compression effort
            lossless: false,
            nearLossless: false,
            smartSubsample: true,
          })
          .toFile(outputPath)
          .then(() => {
            console.log(`Converted ${entry.name} to WebP`);
            // Delete original file after successful conversion
            fs.unlinkSync(fullPath);
            console.log(`Deleted original ${entry.name}`);
          })
          .catch((error) => {
            console.error(`Error converting ${entry.name}:`, error);
          })
      );
    }
  }

  // Wait for all conversions in current directory to complete
  await Promise.all(conversionPromises);
}

// Create scripts directory if it doesn't exist
if (!fs.existsSync(path.dirname(__filename))) {
  fs.mkdirSync(path.dirname(__filename), { recursive: true });
}

// Add error handling for the main process
convertImages(sourceDir)
  .then(() => console.log('All images converted successfully!'))
  .catch((error) => {
    console.error('Error during conversion process:', error);
    process.exit(1);
  });