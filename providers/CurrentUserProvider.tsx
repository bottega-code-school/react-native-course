import React, { useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

interface ICurrentUserProviderProps {
  children: any;
}

export default (props: ICurrentUserProviderProps) => {
  const [currentUser, setCurrentUser] = useState({
    id: 123,
    email: "hey@you.com"
  });

  const stateValues = {
    currentUser,
    setCurrentUser
  };

  return (
    <CurrentUserContext.Provider value={stateValues}>
      {props.children}
    </CurrentUserContext.Provider>
  );
};
