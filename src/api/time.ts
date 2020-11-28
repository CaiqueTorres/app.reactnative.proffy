export enum WeekDay {
    SUNDAY = 'Domingo',
    MONDAY = 'Segunda-feira',
    TUESDAY = 'Terça-feira',
    WEDNESDAY = 'Quarta-feira',
    THURSDAY = 'Quinta-feira',
    FRIDAY = 'Sexta-feira',
    SATURDAY = 'Sábado'
}

export interface TimeProps {
    readonly id?: string | number
    readonly weekDay?: WeekDay
    readonly from?: Date
    readonly to?: Date
}
