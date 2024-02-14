export default function regexHandler(value) {
    const headingRegex = /^(#{1,6})\s+(.*)$/gm
    const boldRegex = /(\*{2})+(.*)+(\*{2})/gm
    const italicRegex = /(\*{1})+(.*)+(\*{1})/gm
    const imageRegex = /\!\[(.*?)]+\(([^\)]+)\)/gm
    const linkRegex = /(?!!)\[(.*?)]+\(([^\)]+)\)/gm
    const codeRegex = /`+(.*)+`/gm
    const paragraphRegex = /\n\n+(.*)$/gm

    //TODO: paragraph nesting has issues

    const headingMatch = headingRegex.exec(value)
    const boldMatch = boldRegex.exec(value)
    const italicMatch = italicRegex.exec(value)
    const imageMatch = imageRegex.exec(value)
    const linkMatch = linkRegex.exec(value)
    const codeMatch = codeRegex.exec(value)
    const paragraphMatch = paragraphRegex.exec(value)

    if (headingMatch) {
        return {title: 'heading', match: headingMatch}
    } else if (boldMatch) {
        return {title: 'bold', match: boldMatch}
    } else if (italicMatch) {
        return {title: 'italic', match: italicMatch}
    } else if (imageMatch) {
        return {title: 'image', match: imageMatch}
    } else if (linkMatch) {
        return {title: 'link', match: linkMatch}
    } else if (codeMatch) {
        return {title: 'code', match: codeMatch}
    } else if (paragraphMatch) {
        return {title: 'paragraph', match: paragraphMatch}
    } else {
        return {title: null, match: null}
    }
}