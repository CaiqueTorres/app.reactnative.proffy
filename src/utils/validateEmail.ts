export default function validateEmail(email: string) {
    const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
    return regex.test(email)
}
