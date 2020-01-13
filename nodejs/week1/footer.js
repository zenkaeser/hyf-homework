const getFooter = footerContent => 
    `
        <footer>
            <div>
                ${footerContent}
            </div>
        </footer>
    `;

//exporting the value of getFooter for outside usage.
module.exports = getFooter;