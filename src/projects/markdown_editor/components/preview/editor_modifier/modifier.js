import HeadingParser from "./handlers/heading";
import BoldParser from "./handlers/bold";
import ItalicParser from "./handlers/italic";
import CodeParser from "./handlers/code";
import ImageParser from "./handlers/image";
import LinkParser from "./handlers/link";
import ParagraphParser from "./handlers/paragraph";

export default function modifier(value) {
    let newValue = value;

    newValue = HeadingParser.process(newValue);
    newValue = BoldParser.process(newValue);
    newValue = ItalicParser.process(newValue);
    newValue = ImageParser.process(newValue);
    newValue = LinkParser.process(newValue);
    newValue = CodeParser.process(newValue);
    newValue = ParagraphParser.process(newValue);

    return newValue
}