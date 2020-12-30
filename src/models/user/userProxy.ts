import { SubjectProxy } from '../subject/subjectProxy'

export interface UserProxy {
    readonly id: number
    readonly image?: string
    readonly name: string
    readonly lastName: string
    readonly email: string
    readonly roles: string
    readonly whatsapp?: string
    readonly about?: string
    readonly subject?: SubjectProxy
    readonly cost?: number
}
