import React, { useState } from "react";
import UserDataContext, { DataInterface } from "../store/UserData";

const UserDataProvider = ({ children }: any) => {
  const [value, setValue] = useState({
    address: "",
    detailAddress: "",
    market: { id: "", name: "" },
    selectStore: "",
    storeInfo: { store: [], product: [] },
    cart: [],
  });

  return (
    <UserDataContext.Provider
      value={{
        data: value,
        setData: (key: string, changedValue: any) =>
          setValue({ ...value, [`${key}`]: changedValue }),
        setCart: (cart: any) => setValue({ ...value, cart }),
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
