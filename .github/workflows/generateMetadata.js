const fs = require('fs');
const path = require('path');

function generateMetadata() {
    const allArticlesMetadata = []
    const subdirs = [];
    demosPath = "demos";

    try {
        const demosArticles = fs.readdirSync(ARTICLES_DIR, { withFileTypes: true })
        allArticlesMetadata.push(demosArticles)
        fs.writeFileSync(METADATA_FILE, JSON.stringify(allArticlesMetadata, null, 2)); // null, 2 for pretty printing

    }
    catch(err) {
        console.log(`Error: ${err}`)
    }

}