import regexHandler from "./regex";
import {
    boldHandler,
    codeHandler,
    headingHandler,
    imageHandler,
    italicHandler,
    linkHandler,
    paragraphHandler
} from "./handlers";

export default function modifier(value, text = null) {
    const {title, match} = regexHandler(text ?? value)

    if (title === 'heading') {
        return headingHandler(match, value)
    } else if (title === 'link') {
        return linkHandler(match, value)
    } else if (title === 'bold') {
        return boldHandler(match, value)
    } else if (title === 'italic') {
        return italicHandler(match, value)
    } else if (title === 'image') {
        return imageHandler(match, value)
    } else if (title === 'code') {
        return codeHandler(match, value)
    } else if (title === 'paragraph') {
        return paragraphHandler(match, value)
    } else {
        if (text) {
            return modifier(value)
        } else {
            return value
        }
    }
}