import { useState } from 'react'

/**
 * Hook that works as a toggle, having the opposite value each time that the
 * user click on it
 * @param initialValue stores the toggle initial value
 */
export default function useToggle(
    initialValue: boolean
): [boolean, () => void] {
    const [active, setActive] = useState(initialValue)
    const toggleValue = (): void => setActive(!active)
    return [active, toggleValue]
}
