import modifier from "./modifier";

export function headingHandler(match, value) {
    const number = match[1]?.length

    value = value.replace(match[0], `<h${number}>${match[2]}</h${number}>`)

    return modifier(value, match[2])
}

export function linkHandler(match, value) {
    value = value.replace(match[0], `<a href={match[2]}>${match[1]}</a>`)

    return modifier(value, match[1])
}

export function boldHandler(match, value) {
    value = value.replace(match[0], `<b>${match[2]}</b>`)

    return modifier(value, match[2] )
}

export function italicHandler (match, value) {
    value = value.replace(match[0], `<i>${match[2]}</i>`)

    return modifier(value, match[2] )
}

export function imageHandler (match, value) {
    value = value.replace(match[0], `<img alt=${match[1]} src=${match[2]} />`)

    return modifier(value, match[1] )
}

export function codeHandler (match, value) {
    value = value.replace(match[0], `<div style="border: 1px gray solid; padding: 2px">${match[1]}</div>`)

    return modifier(value, match[1] )
}

export function paragraphHandler (match, value) {
    value = value.replace(match[0], `<p>${match[1]}\n${match[2]}</p>`)

    return modifier(value, `${match[1]}\n${match[2]}}` )
}
