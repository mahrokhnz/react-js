const Processor = require("./process.js");

class ParagraphParser extends Processor {
    static regex = /\n\n+(.*)$/gm

    static generate(content) {
        const tagName = `p`;

        return `<${tagName}>${content}</${tagName}>`;
    }
}


module.exports = ParagraphParser;