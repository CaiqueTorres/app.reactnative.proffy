import { useEffect, useRef } from 'react'

/**
 * Hook that can return the old value of some state
 * @param value stores the state value
 */
export default function usePrevious<TValue>(value: TValue): TValue | undefined {
    const ref = useRef<TValue>()
    useEffect(() => {
        ref.current = value
    })
    return ref.current
}
