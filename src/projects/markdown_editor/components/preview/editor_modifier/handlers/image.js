import Processor from './process';

class ImageParser extends Processor {
  static regex = /!\[(.*?)]+\(([^)]+)\)/gm;

  static generate(src, content) {
    const tagName = 'img';

    return `<${tagName} alt="${content}" src="${src}"></${tagName}>`;
  }
}

export default ImageParser;
