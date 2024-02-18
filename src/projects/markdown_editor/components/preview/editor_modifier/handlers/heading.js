import Processor from './process';

class HeadingParser extends Processor {
  static regex = /^(#{1,6})\s+(.*)$/gm;

  static generate(type, content) {
    const tagName = `h${type.length}`;

    return `<${tagName}>${content}</${tagName}>`;
  }
}

export default HeadingParser;
