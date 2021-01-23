/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-prototype-builtins */

import { GetManyDefaultResponse } from '../models/getManyDefaultResponse'

export function map<TGetMany extends GetManyDefaultResponse<TValue>, TValue>(
    value: TGetMany,
    callbackfn: (value: TValue, index: number, array: TValue[]) => TValue
): GetManyDefaultResponse<TValue> {
    return {
        ...value,
        data: value.data.map<TValue>(callbackfn)
    }
}

/**
 * Static method that validates if the "value" parameter is an
 * instance of "GetManyDefaultResponse"
 * @param value stores the data that will be tested
 */
export function isGetMany<T>(value: any): value is GetManyDefaultResponse<T> {
    if (!value || Array.isArray(value)) return false

    return value.hasOwnProperty('data')
}
