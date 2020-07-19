import React from "react";

export interface DataInterface {
  address: string;
  detailAddress: string;
  market: { id: string; name: string };
  storeInfo: { store: []; product: [] };
  cart: [];
}

export interface UserDataInterface {
  value: DataInterface;
  setValue: () => void;
}

const UserDataContext = React.createContext<any | null>(null);

export default UserDataContext;
