import { UserProxy } from '../user/userProxy'

/**
 * Class with the time api return data
 */
export interface TimeProxy {
    readonly id?: number | string
    readonly weekDay?: number
    readonly from?: string
    readonly to?: string
    readonly user?: UserProxy
}
