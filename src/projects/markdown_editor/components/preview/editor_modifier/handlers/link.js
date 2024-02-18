import Processor from './process';

class LinkParser extends Processor {
  static regex = /(?!!)\[(.*?)]+\(([^)]+)\)/gm;

  static generate(content, link) {
    const tagName = 'a';

    return `<${tagName} href=${link}>${content}</${tagName}>`;
  }
}

export default LinkParser;
