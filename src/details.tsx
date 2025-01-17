import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { todo } from "./store/todoStore";

interface IProps {}

const Details: FC<IProps> = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todoList] = useRecoilState(todo);
  return (
    <>
      <div>Details</div>
      <p>id: {id} </p>
      <p>name : {todoList[id - 1].name}</p>
      <p>vote : {todoList[id - 1].vote}</p>
      <button onClick={() => navigate("/")}>back</button>
    </>
  );
};

export default Details;
