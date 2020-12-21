export class GetManyDefaultResponse<TValue> {
    public total: number
    public count: number
    public page: number
    public pageCount: number
    public data: TValue[]

    public constructor(partial: Partial<unknown>) {
        Object.assign(this, partial)
    }
}
