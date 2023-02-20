import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Users from "./Users";
import { getPage } from "../../redux/action";
import { getUsersAlpha } from "./../../redux/action";
import Style from "./UsersAll.module.css";

const UsersAll = () => {
  const dispatch = useDispatch();
  const [pages, setPages] = useState("1");
  const data = useSelector((state) => state.users);
  const pageCount = data.pages;
  const buttons = [];
  const handleClick = (e) => {
    let page = e.target.value;
    setPages(e.target.value);
    dispatch(getPage(page));
  };
  for (let i = 1; i <= pageCount; i++) {
    buttons.push(
      <button
        key={i}
        className={pages == i ? Style.button : Style.buttonNone}
        value={i}
        onClick={handleClick}
      >
        {i}
      </button>
    );
  }

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleChange = (event) => {
    event.preventDefault();
    
    event.target.name == "asc" ? dispatch(getUsersAlpha("asc")) : [];
    event.target.name == "desc" ? dispatch(getUsersAlpha("desc")) : [];
  };

  return (
    <div>
      <NavBar />
      {data.results?.map((user) => {
        return <Users name={user.name} image={user.image} />;
      })}
      {buttons}
      <button name="asc" className={Style.asc} onClick={handleChange} >
        ASC
      </button>
      <button name="desc" className={Style.asc} onClick={handleChange}>
        DESC
      </button>
    </div>
  );
};

export default UsersAll;
