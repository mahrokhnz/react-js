import Processor from './process';

class CodeParser extends Processor {
  static regex = /`+(.*)+`/gm;

  static generate(content) {
    const tagName = 'div';

    return `<${tagName} style="border: 1px gray solid; padding: 2px">${content}</${tagName}>`;
  }
}

export default CodeParser;
