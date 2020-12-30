import React, { createContext } from 'react'

import * as UserService from '../services/userService'

export interface IUserService {
    createUser: typeof UserService.createUser
    getMe: typeof UserService.getMe
    updateUser: typeof UserService.updateUser
}

export const UserServiceContext = createContext<IUserService | null>(null)

export const UserServiceProvider: React.FC<{
    children: JSX.Element
}> = ({ children }: { children: JSX.Element }): JSX.Element => {
    return (
        <UserServiceContext.Provider
            value={{
                getMe: UserService.getMe,
                createUser: UserService.createUser,
                updateUser: UserService.updateUser
            }}
        >
            {children}
        </UserServiceContext.Provider>
    )
}
