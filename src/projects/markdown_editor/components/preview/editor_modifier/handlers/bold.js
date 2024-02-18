import Processor from './process';

class BoldParser extends Processor {
  static regex = /(\*{2})+(.*)+(\*{2})/gm;

  static generate(content) {
    const tagName = 'b';

    return `<${tagName}>${content}</${tagName}>`;
  }
}

export default BoldParser;
