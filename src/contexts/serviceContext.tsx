import React, { createContext } from 'react'

import { AuthService } from '../services/authService'
import { SubjectService } from '../services/subjectService'
import { TimeService } from '../services/timeService'
import { UserService } from '../services/userService'

const defaultServices = {
    userService: new UserService(),
    subjectService: new SubjectService(),
    timeService: new TimeService(),
    authService: new AuthService()
}

export type IServiceProps = typeof defaultServices

export const ServiceContext = createContext<IServiceProps>({} as IServiceProps)

export const ServiceProvider: React.FC<{
    children: JSX.Element
}> = ({ children }: { children: JSX.Element }): JSX.Element => {
    return (
        <ServiceContext.Provider value={defaultServices}>
            {children}
        </ServiceContext.Provider>
    )
}
