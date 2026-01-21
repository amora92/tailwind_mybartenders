const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, '..', 'public');
const logoPath = path.join(publicDir, 'mybartenders.co.uk_logo_png.png');

async function generateIcons() {
  console.log('Generating PWA icons from logo...');

  // Standard icons with transparent background
  const standardSizes = [
    { size: 192, name: 'icon-192.png' },
    { size: 512, name: 'icon-512.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 16, name: 'favicon-16x16.png' }
  ];

  // Maskable icons need safe zone padding (add 10% padding and background)
  const maskableSizes = [
    { size: 192, name: 'icon-maskable-192.png' },
    { size: 512, name: 'icon-maskable-512.png' }
  ];

  // Generate standard icons
  for (const { size, name } of standardSizes) {
    await sharp(logoPath)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, name));
    console.log(`Created ${name}`);
  }

  // Generate maskable icons with safe zone (pink background matching brand)
  for (const { size, name } of maskableSizes) {
    // Calculate inner size (80% to leave 10% padding on each side)
    const innerSize = Math.floor(size * 0.7);
    const padding = Math.floor((size - innerSize) / 2);

    // First resize the logo
    const resizedLogo = await sharp(logoPath)
      .resize(innerSize, innerSize, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();

    // Create background with padding and composite the logo
    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 3, g: 7, b: 18, alpha: 1 } // gray-950 background
      }
    })
      .composite([{
        input: resizedLogo,
        left: padding,
        top: padding
      }])
      .png()
      .toFile(path.join(publicDir, name));
    console.log(`Created ${name} (maskable)`);
  }

  // Generate favicon.ico (multi-size)
  // For ICO we'll just copy the 32x32 as a starting point
  // Real ICO should have multiple sizes but this works for most browsers
  console.log('\nPWA icons generated successfully!');
  console.log('Note: Existing favicon.ico kept. If needed, convert favicon-32x32.png to .ico format.');
}

generateIcons().catch(console.error);
