import React, { useEffect } from "react";
import { getAllUsers } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Users from "./Users";
import { getUsersAlpha } from "./../../redux/action";

const UsersAll = () => {
  const data = useSelector((state) => state.users);

  const dispatch = useDispatch();
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
      {data?.map((user) => {
        return <Users name={user.name} image={user.image} />;
      })}
      <button name="asc" onClick={handleChange}>
        ASC
      </button>
      <button name="desc" onClick={handleChange}>
        DESC
      </button>
    </div>
  );
};

export default UsersAll;
