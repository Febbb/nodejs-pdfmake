

const PdfPrinter = require("pdfmake");
const fs = require("fs");

// font style 
const fonts = require("./config-content/fonts");

// style content 
const styles = require("./config-content/styles");

// const object  
const { content } = require("./config-content/pdfContent");


// object paper 
let dd = {
  content,
  styles,
};

// instance obejct -->
const printer = new PdfPrinter(fonts);

let pdfDoc = printer.createPdfKitDocument(dd);
pdfDoc.pipe(fs.createWriteStream("pdf/test.pdf"));
pdfDoc.end();




console.log('PDF created');
