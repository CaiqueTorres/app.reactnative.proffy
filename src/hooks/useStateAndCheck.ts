import { useState } from 'react'

/**
 * Hook that can create a state and return if the state has changed
 * @param initialValue stores the first value that the state will receive
 */
export default function useStateAndCheck<TValue>(
    initialValue: TValue
): [TValue, (value: TValue) => void, boolean] {
    const [hasChanged, setHasChanged] = useState(false)
    const [value, setValue] = useState<TValue>(initialValue)
    const handleSetValue = (newValue: TValue): void => {
        if (!hasChanged) setHasChanged(true)
        setValue(newValue)
    }
    return [value, handleSetValue, hasChanged]
}
