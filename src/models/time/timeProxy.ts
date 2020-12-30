import { UserProxy } from '../user/userProxy'

export interface TimeProxy {
    readonly id?: number
    readonly weekDay?: number
    readonly from?: Date
    readonly to?: Date
    readonly user?: UserProxy
}
