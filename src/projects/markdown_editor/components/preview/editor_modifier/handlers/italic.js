import Processor from './process';

class ItalicParser extends Processor {
  static regex = /\*{1}(.*)\*{1}/gm;

  static generate(content) {
    const tagName = 'i';

    return `<${tagName}>${content}</${tagName}>`;
  }
}

export default ItalicParser;
