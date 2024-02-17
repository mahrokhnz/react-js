const Processor = require("./process.js");

class CodeParser extends Processor{
    static regex = /`+(.*)+`/gm

    static generate(content) {
        const tagName = `div`;

        return `<${tagName} style="border: 1px gray solid; padding: 2px">${content}</${tagName}>`;
    }
}


module.exports = CodeParser;