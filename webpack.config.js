const path = require('path');

module.exports = [
    {
        entry: [
            './src/js/UciPrimaryButton.js',
            './src/js/UciSecondaryButton.js'
            ],
        output: {
            filename: 'custom.js',
            path: path.resolve(__dirname, 'dist'),
        },
        mode: "production"
    }
];