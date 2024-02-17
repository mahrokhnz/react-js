const Processor = require("./process.js");

class ImageParser extends Processor {
    static regex = /\!\[(.*?)]+\(([^\)]+)\)/gm

    static generate(src, content) {
        const tagName = `img`;

        return `<${tagName} alt="${content}" src="${src}"></${tagName}>`;
    }
}


module.exports = ImageParser;