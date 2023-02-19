import React, { useEffect } from "react";
import { getAllUsers} from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Users from "./Users";

const UsersAll = () => {
  
  const data = useSelector((state) => state.users);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      <NavBar/>
      {data?.map((user) => {
        return <Users name={user.name} image={user.image} />;
      })}
    </div>
  );
};

export default UsersAll;

