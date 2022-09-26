import Login from "../../Components/Login/Login";
import "./loginPage.css";

const RegisterPage = () => {

  return (
    <>
    <div className="main">
      <div className="login">
        <Login
          header={'LOGIN'}
          input1={'username'}
          input2={'password'}
          btnContent={'LOGIN'}
          question={`Don't have an account yet?`}
          altBtn={'REGISTER'}
        />
      </div>
    </div>
    </>
  );
};

export default RegisterPage;
