import React from "react";

export interface DataInterface {
  address: "";
  detailAddress: "";
  market: { id: ""; name: "" };
  selectStore: "";
  storeInfo: { store: []; product: [] };
  cart: [];
}

export interface UserDataInterface {
  value: DataInterface;
  setValue: () => void;
}

const UserDataContext = React.createContext<any | null>(null);

export default UserDataContext;
