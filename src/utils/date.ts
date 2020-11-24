export function completeWithZero(time: string): string {
    if (time.length === 1) return '0' + time
    return time
}

export function formatDate(date: Date): string {
    const hours = completeWithZero(date.getHours().toString())
    const minutes = completeWithZero(date.getMinutes().toString())

    return `${hours}:${minutes}`
}

export enum WeekDay {
    SUNDAY = 'Domingo',
    MONDAY = 'Segunda-feira',
    TUESDAY = 'Terça-feira',
    WEDNESDAY = 'Quarta-feira',
    THURSDAY = 'Quinta-feira',
    FRIDAY = 'Sexta-feira',
    SATURDAY = 'Sábado'
}
