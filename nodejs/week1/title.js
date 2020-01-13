const doStyle = require('./styles');

getTitle = (title) => {
    return `<head>${doStyle()}<title>${title}</title></head>`
    // return "<head>" +doStyle()+ "<title>"+title+"</title></head>";
}

module.exports = getTitle;

