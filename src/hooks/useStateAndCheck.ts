import { useState } from 'react'

export default function useStateAndCheck<TValue>(
    initialValue: TValue
): [TValue, (value: TValue) => void, boolean] {
    const [hasChanged, setHasChanged] = useState(false)
    const [value, setValue] = useState<TValue>(initialValue)
    const handleSetValue = (v: TValue): void => {
        if (!hasChanged) setHasChanged(true)
        setValue(v)
    }
    return [value, handleSetValue, hasChanged]
}
