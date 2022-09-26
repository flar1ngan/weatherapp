import { useState } from "react";
import axios from "axios";
import "./register.css";
import Result from "./helpingComponents/Fail";
import { Link } from "react-router-dom";

const Register = ({
  heading,
  firstelem,
  secondelem,
  thirdelem,
  fourthelem,
  btnContent
}) => {
  const [registerData, setRegisterData] = useState({
    userName: "",
    email: "",
    password: "",
    city: "",
  });

  const [display, setDisplay] = useState(0);

  const [errorStatus, setErrorStatus] = useState(0);

  const handleRegisterInput = (e) => {
    setRegisterData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(registerData);
  };

  const handleRegisterSubmit = async () => {
    try {
      await axios.post("https://boiling-dusk-43878.herokuapp.com/api/register", registerData);
    } catch (error) {
      console.log(error);
      setErrorStatus(error.response.status);
    }
  };

  const changeView = (value1, value2) => {
    setDisplay(value1);
    setTimeout(() => {
      setDisplay(value2);
    }, 1000);
  };

  return (
    <>
      <div className="registerWrapper">
        <div className="registerContentWrapper">
          <h1>{heading}</h1>
          <Link to = "/">
          <span className="icon">
            <i className="fa-solid fa-house"></i>
          </span>
          </Link>
          {display === 0 && (
            <div className="formWrapper">
              <div className="formItem">
                <label>{firstelem}</label>
                <input
                  className="registerInput"
                  onChange={handleRegisterInput}
                  name="userName"
                  type="text"
                  placeholder="Required"
                />
              </div>
              <div className="formItem">
                <label>{secondelem}</label>
                <input
                  className="registerInput"
                  onChange={handleRegisterInput}
                  name="email"
                  type="email"
                  placeholder="Required"
                />
              </div>
              <div className="formItem">
                <label>{thirdelem}</label>
                <input
                  className="registerInput"
                  onChange={handleRegisterInput}
                  name="city"
                  type="text"
                  placeholder="Optional"
                />
              </div>
              <div className="formItem">
                <label>{fourthelem}</label>
                <input
                  className="registerInput"
                  onChange={handleRegisterInput}
                  name="password"
                  type="password"
                  placeholder="Required"
                />
              </div>
              <div className="submitBtn">
                <button
                  className="btnRegister"
                  onClick={() => {
                    handleRegisterSubmit();
                    changeView(1, 2);
                  }}
                >
                  {btnContent}
                </button>
              </div>
              <p className="questionReg">Already have an accout?</p>
              <Link to="/sign-up">
                <button className="btnRegister btnReg">SIGN-UP</button>
              </Link>
            </div>
          )}
          {display === 1 && (
            <div className="loader">
              <img src={require("./loader.png")} alt="loader" />
            </div>
          )}
          {display === 2 && errorStatus !== 405 && (
            <Result
              resultContent={"REGISTERED SUCCESSFULLY"}
              btnContent={"LOG IN"}
              navUrl="/sign-up"
            />
          )}
          {display === 2 && errorStatus === 405 && (
            <Result
              resultContent={"REGISTRATION FAIL"}
              btnContent={"TRY AGAIN"}
              navUrl="/register"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
