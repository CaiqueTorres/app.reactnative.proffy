import { SubjectProxy } from '../subject/subjectProxy'

export interface UserProxy {
    id: number
    image?: string
    name: string
    lastName: string
    email: string
    roles: string
    whatsapp?: string
    about?: string
    subject?: SubjectProxy
    cost?: number
}
