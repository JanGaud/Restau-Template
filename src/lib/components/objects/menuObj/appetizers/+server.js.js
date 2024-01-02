const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const appetizersFilePath = path.join(__dirname, 'src/lib/components/objects/menuObj/appetizers.js');

async function updateAppetizers() {
    const sheets = google.sheets({ version: 'v4', auth: 'YOUR_GOOGLE_API_KEY' });

    const spreadsheetId = 'YOUR_SPREADSHEET_ID';
    const range = 'Sheet1!A2:C';

    try {
        const response = await sheets.spreadsheets.values.get({ spreadsheetId, range });
        const rows = response.data.values;

        if (rows.length) {
            // Transform the data into the desired format
            const appetizersArray = rows.map((/** @type {string[]} */ row) => ({
                name: row[0],
                ingredients: row[1], // Make sure the column index matches
                price: row[2] + '$',  // the structure of your sheet
            }));

            // Generate the file content
            const fileContent = `export const appetizers = ${JSON.stringify(appetizersArray, null, 2)};`;

            // Write to the appetizers.js file
            fs.writeFileSync(appetizersFilePath, fileContent);
            console.log('Appetizers updated successfully!');
        } else {
            console.log('No data found.');
        }
    } catch (error) {
        console.error('The API returned an error:', error);
        throw error;
    }
}

updateAppetizers();
