import { WeekDay } from '../models/time/weekDay'

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

export function fromWeekDay(weekDay: WeekDay): string {
    switch (weekDay) {
        case WeekDay.MONDAY:
            return 'Segunda-feira'
        case WeekDay.TUESDAY:
            return 'Terça-feira'
        case WeekDay.WEDNESDAY:
            return 'Quarta-feira'
        case WeekDay.THURSDAY:
            return 'Quinta-feira'
        case WeekDay.FRIDAY:
            return 'Sexta-feira'
        default:
            throw new Error('This value is a not a week day')
    }
}
