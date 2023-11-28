const fs = require('fs');

const targetFolder = './images/'; // Specify the target folder

if (!fs.existsSync(targetFolder)) {
  fs.mkdirSync(targetFolder, { recursive: true }); // Create the target folder if it doesn't exist
}

for (let i = 1; i <= 100; i++) {
  const imageName = `${i}.png`;

  const imageObj = {
    name: 'Metakul Collection',
    image: imageName,
    edition: i,
    attributes: [
      { trait_type: 'Origin', value: 'Unknown' },
      { trait_type: 'Aura', value: 'Psychic' },
      { trait_type: 'Base', value: 'Alien' },
      { trait_type: 'Pants', value: 'Purple' },
      { trait_type: 'Shirt', value: 'Green_Hoodie' },
      { trait_type: 'Eyes', value: 'Alien' },
      { trait_type: 'Eyebrows', value: 'None' },
      { trait_type: 'Facial Hair', value: 'None' },
      { trait_type: 'Hair', value: 'None' },
      { trait_type: 'Shoes', value: 'Blue_Sport' },
      { trait_type: 'Hat', value: 'Blue_Durag' },
      { trait_type: 'Composition', value: 'Unknown' },
    ],
  };

  const jsonContent = JSON.stringify(imageObj, null, 2);

  const jsonFileName = `${targetFolder}${i}.json`; // Specify the target folder in the filename

  fs.writeFile(jsonFileName, jsonContent, (err) => {
    if (err) {
      console.error(`Error writing JSON file ${jsonFileName}: ${err}`);
    } else {
      console.log(`JSON data for ${imageName} written to ${jsonFileName}`);
    }
  });
}
