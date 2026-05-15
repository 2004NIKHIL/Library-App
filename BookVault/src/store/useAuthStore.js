import { create } from "zustand";

const useAuthStore = create((set) => ({
  users: [
    {
      id: 1,
      username: "admin",
      password: "1234",
      role: "admin",
      name: "Nikhil Kumar ",
    },
    {
      id: 2,
      username: "reader",
      password: "1234",
      role: "reader",
      name: "John Doe",
    },
  ],

  user: null,
  isLoggedIn: false,
  login: function (username, password) {
    const allUsers = useAuthStore.getState().users;
    const foundUser = allUsers.find((u) => {
      return u.username === username && u.password === password;
    });

    if (foundUser) {
      set({ user: foundUser, isLoggedIn: true });
      return true;
    }
    return false;
  },

  logout: function () {
    set({ user: null, isLoggedIn: false });
  },
}));

export default useAuthStore;
