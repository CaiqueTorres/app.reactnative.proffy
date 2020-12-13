import { SubjectProxy } from '../subject/subjectProxy'

export interface UserProxy {
    id: number
    photo?: string
    name: string
    lastName: string
    email: string
    roles: string
    whatsapp?: string
    description?: string
    subject?: SubjectProxy
    price?: number
}
