import React, { useState } from 'react'
import UserDataContext, { DataInterface } from '../store/UserData'

const UserDataProvider = ({ children }: any) => {
    const [value, setValue] = useState({
        address: "",
        detailAddress: ""
    })

    return (
        <UserDataContext.Provider value={{
            data: value,
            setData: (key: string, changedValue: string) => setValue({ ...value, [`${key}`]: changedValue })
        }}>
            {children}
        </UserDataContext.Provider>
    )
}

export default UserDataProvider;