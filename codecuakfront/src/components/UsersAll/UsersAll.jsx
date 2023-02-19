import React, { useEffect } from "react";
import { getAllUsers} from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../NavBar/NavBar";
import Users from "./Users";
import { getPage } from "../../redux/action";
const UsersAll = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users);
  const pageCount = data.pages;
  const buttons = [];
  const handleClick=(e)=>{
    let page = e.target.value
    console.log(page)
    dispatch(getPage(page))
  }
  for (let i = 1; i <= pageCount; i++) {
    buttons.push(
      <button key={i} value={i} onClick={handleClick}>
        {i}
      </button>
    );
  }

  useEffect(()=>{

  },[data])

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      <NavBar/>
      {data.results?.map((user) => {
        return <Users name={user.name} image={user.image} />;
      })}
      {buttons}
    </div>
  );
};

export default UsersAll;

