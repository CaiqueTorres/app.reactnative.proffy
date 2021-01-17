/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-prototype-builtins */

import { GetManyDefaultResponse } from '../models/getManyDefaultResponse'

// /**
//  * Method that maps all the elements of "data" property and return a new
//  * "GetManyDefaultResponse" with the new mapped elements
//  * @param callbackfn
//  */
// export function map<T>(
//     callbackfn: (value: TValue, index: number, array: TValue[]) => T
// ): GetManyDefaultResponse<T> {
//     return new GetManyDefaultResponse<T>({
//         total: this.total,
//         count: this.count,
//         page: this.page,
//         pageCount: this.pageCount,
//         data: this.data.map(callbackfn)
//     })
// }

/**
 * Static method that validates if the "value" parameter is an
 * instance of "GetManyDefaultResponse"
 * @param value stores the data that will be tested
 */
export function isGetMany<T>(value: any): value is GetManyDefaultResponse<T> {
    if (!value || Array.isArray(value)) return false

    return value.hasOwnProperty('data')
}
