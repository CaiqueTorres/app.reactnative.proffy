/**
 * Function that can validate if a text is null or empty
 * @param text stores the text string
 */
export default function validateText(text: string): boolean {
    return text == '' || text == null || text.length === 0
}
