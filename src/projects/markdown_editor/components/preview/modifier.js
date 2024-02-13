function modifierHelper(type, match, value) {
    if (type === 'heading') {
        const number = match[1]?.length

        return value.replace(match[0], `<h${number}>${match[2]}</h${number}>`)
    }

    if (type === 'link') {
        return value.replace(match[0], `<a href={match[2]}>${match[1]}</a>`)
    }

    if (type === 'bold') {
        return value.replace(match[0], `<b>${match[2]}</b>`)
    }

    if (type === 'italic') {
        return value.replace(match[0], `<i>${match[2]}</i>`)
    }

    if (type === 'image') {
        return value.replace(match[0], `<img alt=${match[1]} src=${match[2]} />`)
    }

    if (type === 'code') {
        return value.replace(match[0], `<div style="border: 1px gray solid; padding: 2px">${match[1]}</div>`)
    }

    if (type === 'paragraph') {
        return value.replace(match[0], `<p>${match[1]}\n${match[2]}</p>`)
    }

    return value
}

export default function modifier(value, changedValue = null) {
    const headingRegex = /^(#{1,6})\s+(.*)$/gm
    const linkRegex = /^(?!!)\[(.*?)]+\(([^\)]+)\)/gm
    const boldRegex = /(\*{2})+(.*)+(\*{2})/gm
    const italicRegex = /(\*{1})+(.*)+(\*{1})/gm
    const imageRegex = /\!\[(.*?)]+\(([^\)]+)\)/gm
    const codeRegex = /`+(.*)+`/gm
    const paragraphRegex = /\n\n+(.*)$/gm

    const headingMatch = headingRegex.exec(changedValue ?? value)
    const linkMatch = linkRegex.exec(changedValue ?? value)
    const boldMatch = boldRegex.exec(changedValue ?? value)
    const italicMatch = italicRegex.exec(changedValue ?? value)
    const imageMatch = imageRegex.exec(changedValue ?? value)
    const codeMatch = codeRegex.exec(changedValue ?? value)
    const paragraphMatch = paragraphRegex.exec(changedValue ?? value)

    if (headingMatch) {
        const data = modifierHelper('heading', headingMatch, changedValue ?? value)

        return modifier(value, data)
    }
    else if (linkMatch) {
        const data = modifierHelper('link', linkMatch, value)

        return modifier(value, data)
    }
    else if (boldMatch) {
        const data = modifierHelper('bold', boldMatch, value)

        return modifier(value, data)
    }
    else if (italicMatch) {
        const data = modifierHelper('italic', italicMatch, value)

        return modifier(value, data)
    }
    else if (imageMatch) {
        const data = modifierHelper('image', imageMatch, value)

        return modifier(value, data)
    }
    else if (codeMatch) {
        const data = modifierHelper('code', codeMatch, value)

        return modifier(value, data)
    }
    else if (paragraphMatch) {
        const data = modifierHelper('paragraph', paragraphMatch, value)

        return modifier(value, data)
    }
    else {
        return changedValue
    }
}