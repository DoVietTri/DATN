const path = require('path');
const DataUriParser = require('datauri/parser');
const parser = new DataUriParser();

const formatBufferToBase64 = file => parser.format(path.extname(file.originalname).toString(), file.buffer );

module.exports = formatBufferToBase64;