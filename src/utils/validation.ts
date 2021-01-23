import { TimeProxy } from '../models/time/timeProxy'

/**
 * Function that can validate if a text is null or empty
 * @param text stores the text string
 */
export function isStringEmpty(text: string | undefined | null): boolean {
    return !text || text.length === 0
}

/**
 * Function that can validate some e-mail based on it characters
 * @param email stores the emails string
 */
export function validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return regex.test(email)
}

/**
 * Function that can validate the password that the user is passing
 * @param password stores the password string
 */
export function validatePassword(password: string): boolean {
    return password.length >= 6
}

/**
 * Function that can validate the time props list
 *
 * It checks if the list is empty of some field is undefined or null
 * @param timePropsList stores the TimeProps array
 */
export function validateTimePropsList(timePropsList: TimeProxy[]): boolean {
    return (
        timePropsList.length != 0 &&
        timePropsList.every((timeProps) => {
            return !!timeProps.to && !!timeProps.from
        })
    )
}
