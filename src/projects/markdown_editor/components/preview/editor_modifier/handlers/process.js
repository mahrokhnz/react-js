class Processor {
  static regex = /./g;

  static process(content) {
    let newContent = content;

    let match = this.regex.exec(content);

    while (match) {
      const tag = this.generate(...match.slice(1));

      newContent = newContent.replace(match[0], tag);

      match = this.regex.exec(content);
    }

    return newContent;
  }

  static generate() {
    return '';
  }
}

export default Processor;
