import React from "react";

export interface DataInterface {
    address: string
    detailAddress: string
}

export interface UserDataInterface {
    value: DataInterface,
    setValue: () => void
}

const UserDataContext = React.createContext<any | null>(null)

export default UserDataContext;

