import Register from "../../Components/Register/Register";
import "./registerPage.css";

const RegisterPage = () => {

  return (
    <>
    <div className="main">
      <div className="register">
        <Register 
            heading={"REGISTRATION"}
            firstelem={"username"}
            secondelem={"e-mail"}
            thirdelem={"city"}
            fourthelem={"password"}
            btnContent={"REGISTER"}
            successContent={"SUCCESSFULLY REGISTERED!!!"}
        />
      </div>
    </div>
    </>
  );
};

export default RegisterPage;
