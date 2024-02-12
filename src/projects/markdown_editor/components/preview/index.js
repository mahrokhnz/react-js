import "./index.css";
import {useMemo} from "react";

function Preview({value}) {
    function createNodes(type, firstMatch, secondMatch = null) {
        if (type === 'heading') {
            const number = firstMatch[1]?.length
            value = value.replace(firstMatch[0], `<h${number}>${firstMatch[2]}</h${number}>`)

            previewText()
        }

        if (type === 'link') {
            value = value.replace(`${firstMatch[0]}${secondMatch[0]}`, `<a href='${secondMatch[1]}'>${firstMatch[1]}</a>`)

            previewText()
        }

        if (type === 'bold') {
            value = value.replace(firstMatch[0], `<b>${firstMatch[2]}</b>`)

            previewText()
        }

        if (type === 'italic') {
            value = value.replace(firstMatch[0], `<i>${firstMatch[2]}</i>`)

            previewText()
        }

        // Paragraph

        // Image

        // Code

        // List

        return value
    }

    function previewText() {
        const headingRegex = /^(#{1,6})\s+(.*)$/gm
        const linkRegex = /\[(.*?)]/gm
        const addressRegex = /\(([^\)]+)\)/gm
        const boldRegex = /^(\*{2})+(.*)+(\*{2})/gm
        const italicRegex = /^(\*{1})+(.*)+(\*{1})/gm

        const headingMatch = headingRegex.exec(value)
        const linkMatch = linkRegex.exec(value)
        const addressMatch = addressRegex.exec(value)
        const boldMatch = boldRegex.exec(value)
        const italicMatch = italicRegex.exec(value)

        if (headingMatch) {
            return createNodes('heading', headingMatch)
        } else if (linkMatch && addressMatch) {
            return createNodes('link', linkMatch, addressMatch)
        } else if (boldMatch) {
            return createNodes('bold', boldMatch)
        } else if (italicMatch) {
            return createNodes('italic', italicMatch)
        } else {
            return null
        }
    }

    return (
        <div className='preview' dangerouslySetInnerHTML={{__html: previewText()}}>

        </div>
    )
}

export default Preview;