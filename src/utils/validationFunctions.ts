/**
 * Function that can validate if a text is null or empty
 * @param text stores the text string
 */
export function isTextEmpty(text: string): boolean {
    return text.length === 0
}

/**
 * Function that can validate some e-mail based on it characters
 * @param email stores the emails string
 */
export function validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return regex.test(email)
}

export function validatePassword(password: string): boolean {
    return password.length >= 6
}
