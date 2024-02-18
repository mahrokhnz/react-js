import Processor from './process';

class ParagraphParser extends Processor {
  static regex = /\n\n+(.*)$/gm;

  static generate(content) {
    const tagName = 'p';

    return `<${tagName}>${content}</${tagName}>`;
  }
}

export default ParagraphParser;
