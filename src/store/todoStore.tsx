import { atom } from "recoil";

export const todo = atom({
  key: "todoList",
  default: [
    {
      id: 1,
      name: "Name1",
      vote: 0,
    },
    {
      id: 2,
      name: "Name2",
      vote: 0,
    },
    {
      id: 3,
      name: "Name3",
      vote: 0,
    },
  ],
});
