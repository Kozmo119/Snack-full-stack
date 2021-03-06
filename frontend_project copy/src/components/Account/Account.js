import TextField from "@mui/material/TextField";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./account.css";
import ForgottenPassword from "./ForgottenPassword";

const Account = () => {
  const handleLoginClick = (event) => {
    alert("Logging in...please wait...");
  };

  return (
    <div className="parent">
      <div className="signin">
        <form>
          <TextField
            label="Email address"
            required
            style={{
              minWidth: "400px",
              minHeight: "30px",
            }}
          />
          <br /> <br></br>
          <TextField
            label="Password"
            type="password"
            required
            style={{
              minWidth: "400px",
              minHeight: "30px",
            }}
          ></TextField>
          <br />
        </form>
        <br />
        <Link to="/homepage" style={{ textDecoration: "none" }}>
          <Button
            onClick={handleLoginClick}
            style={{
              borderRadius: 5,
              backgroundColor: "#74b8b2",
              fontSize: "20px",
              color: "white",
              minWidth: "400px",
              minHeight: "30px",
            }}
          >
            Log in
          </Button>
        </Link>
        <br />
        <br />

        <h4 className="forgot">
          <ForgottenPassword />
        </h4>

        <br />
        <Link to="/account/createAccount" style={{ textDecoration: "none" }}>
          <Button
            style={{
              borderRadius: 5,
              backgroundColor: "#8bb854",
              fontSize: "20px",
              color: "white",
              minWidth: "250px",
              minHeight: "30px",
            }}
          >
            Create New Account
          </Button>
        </Link>
      </div>
      <img
        src="https://media-cldnry.s-nbcnews.com/image/upload/t_focal-758x379,f_auto,q_auto:best/rockcms/2022-03/plant-based-food-mc-220323-02-273c7b.jpg"
        alt="loading"
        className="poster"
      />
    </div>
  );
};

export default Account;
