import { useEffect, useRef } from 'react'

export default function usePrevious<TValue>(value: TValue): TValue | undefined {
    const ref = useRef<TValue>()
    useEffect(() => {
        ref.current = value
    })
    return ref.current
}
