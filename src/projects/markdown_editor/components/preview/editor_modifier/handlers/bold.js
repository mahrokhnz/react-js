const Processor = require("./process.js");

class BoldParser extends Processor {
    static regex = /(\*{2})+(.*)+(\*{2})/gm

    static generate(content) {
        const tagName = `b`;

        return `<${tagName}>${content}</${tagName}>`;
    }
}


module.exports = BoldParser;