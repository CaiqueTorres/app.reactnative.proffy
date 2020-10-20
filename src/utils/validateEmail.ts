/**
 * Function that can validate some e-mail based on it characters
 * @param email stores the emails string
 */
export default function validateEmail(email: string): boolean {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    return regex.test(email)
}
