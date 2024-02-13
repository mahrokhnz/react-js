function modifierHelper(type, match, value) {
    if (type === 'heading') {
        const number = match[1]?.length
        value = value.replace(match[0], `<h${number}>${match[2]}</h${number}>`)

        modifier(value)
    }

    if (type === 'link') {
        value = value.replace(match[0], `<a href={match[2]}>${match[1]}</a>`)

        modifier(value)
    }

    if (type === 'bold') {
        value = value.replace(match[0], `<b>${match[2]}</b>`)

        modifier(value)
    }

    if (type === 'italic') {
        value = value.replace(match[0], `<i>${match[2]}</i>`)

        modifier(value)
    }

    if (type === 'image') {
        value = value.replace(match[0], `<img alt=${match[1]} src=${match[2]} />`)

        modifier(value)
    }

    if (type === 'code') {
        value = value.replace(match[0], `<div style="border: 1px gray solid; padding: 2px">${match[1]}</div>`)

        modifier(value)
    }

    if (type === 'paragraph') {
        value = value.replace(match[0], `<p>${match[1]}\n${match[2]}</p>`)

        modifier(value)
    }

    return value
}

export default function modifier(value) {
    const headingRegex = /^(#{1,6})\s+(.*)$/gm
    const linkRegex = /^(?!!)\[(.*?)]+\(([^\)]+)\)/gm
    const boldRegex = /(\*{2})+(.*)+(\*{2})/gm
    const italicRegex = /(\*{1})+(.*)+(\*{1})/gm
    const imageRegex = /\!\[(.*?)]+\(([^\)]+)\)/gm
    const codeRegex = /`+(.*)+`/gm
    const paragraphRegex = /\n\n+(.*)/gm

    const headingMatch = headingRegex.exec(value)
    const linkMatch = linkRegex.exec(value)
    const boldMatch = boldRegex.exec(value)
    const italicMatch = italicRegex.exec(value)
    const imageMatch = imageRegex.exec(value)
    const codeMatch = codeRegex.exec(value)
    const paragraphMatch = paragraphRegex.exec(value)

    if (headingMatch) {
        return modifierHelper('heading', headingMatch, value)
    }
    else if (linkMatch) {
        return modifierHelper('link', linkMatch, value)
    }
    else if (boldMatch) {
        return modifierHelper('bold', boldMatch, value)
    }
    else if (italicMatch) {
        return modifierHelper('italic', italicMatch, value)
    }
    else if (imageMatch) {
        return modifierHelper('image', imageMatch, value)
    }
    else if (codeMatch) {
        return modifierHelper('code', codeMatch, value)
    }
    else if (paragraphMatch) {
        return modifierHelper('paragraph', paragraphMatch, value)
    }
    else {
        return null
    }
}