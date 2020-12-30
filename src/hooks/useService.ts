import { useContext } from 'react'

import { IServiceProps, ServiceContext } from '../contexts/serviceContext'

export function useService(): IServiceProps {
    return useContext(ServiceContext)
}
