// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  const updateUserData = (data) => {
    setUserData((prevData) => ({ ...prevData, ...data }));
  };

  const [userAnswers, setUserAnswers] = useState({});
  const updateUserAnswers = (index, answer) => {
    setUserAnswers((prevAnswers) => ({ ...prevAnswers, [index]: answer }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData, userAnswers, updateUserAnswers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
