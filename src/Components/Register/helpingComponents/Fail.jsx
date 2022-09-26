import "../register.css";
import { Link, useNavigate } from "react-router-dom";

const Result = ({resultContent, btnContent, navUrl}) => {

  const navigate = useNavigate();

  const refresh = () => {
    window.location.reload(false)
  }

  return (
    <div className="formSuccess">
      <h2>{resultContent}</h2>
      <div className="submitBtn">
      <Link to={navUrl}>
          <button className="btnRegister" onClick={() => {if(navUrl==="/register")refresh(); if(navUrl==="/sign-up") {navigate('/sign-up', { replace: true }); refresh()}}}>{btnContent}</button>
      </Link>
        </div>
    </div>
  );
};

export default Result;
