import style from "./social.module.css"
import NavBar from '../NavBar/NavBar'
import FormPost from "../FormPost/FormPost"

const Social = () => {
  return (
    <div className={style.socialContainer}>
      <NavBar />
      <FormPost/>
    </div>
  )
}

export default Social