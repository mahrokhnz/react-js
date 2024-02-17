const Processor = require("./process.js");

class LinkParser extends Processor {
    static regex = /(?!!)\[(.*?)]+\(([^\)]+)\)/gm

    static generate(content, link) {
        const tagName = `a`;

        return `<${tagName} href=${link}>${content}</${tagName}>`;
    }
}


module.exports = LinkParser;