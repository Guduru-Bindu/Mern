import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  const login = (userData) => {
    setUser(userData);
    setTasks(userData.tasks || []);
  };

  const logout = () => {
    setUser(null);
    setTasks([]);
  };

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem(user.email, JSON.stringify({ ...user, tasks: updatedTasks }));
  };

  const updatePassword = (newPassword) => {
    const updatedUser = { ...user, password: newPassword };
    setUser(updatedUser);
    localStorage.setItem(user.email, JSON.stringify(updatedUser));
  };

  return (
    <UserContext.Provider value={{ user, tasks, login, logout, addTask, updatePassword }}>
      {children}
    </UserContext.Provider>
  );
};
