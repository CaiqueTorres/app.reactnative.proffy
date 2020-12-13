/**
 * Function that adds a zero in front of the time if the length
 * is equals to 1
 * @param sentence stores the senceten text
 */
export function completeWithZero(sentence: string): string {
    if (sentence.length === 1) return '0' + sentence
    return sentence
}

/**
 * Function that can format the date as "hours":"minute"
 * @param date stores the date value
 */
export function formatDate(date: Date): string {
    const hours = completeWithZero(date.getHours().toString())
    const minutes = completeWithZero(date.getMinutes().toString())

    return `${hours}:${minutes}`
}
