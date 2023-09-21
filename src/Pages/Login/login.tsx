import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignIn } from "../../Redux/Feature/Auth-Slice";

const Login = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [isEmailError, setIsEmailError] = useState("");
  const [isPasswordError, setIsPasswordError] = useState("");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (e.target.name === "email") setIsEmailError("");
    if (e.target.name === "password") setIsPasswordError("");
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if(loginData?.email ==="testuser@gmail.com" && loginData?.password ==="password"){
      const userData = {
        name: "testuser",
        email: "testuser@gmail.com",
        token: "test@46#jjhh",
      };
      /// user login successfully then store the user object data in local storage
      localStorage.setItem("userToken", JSON.stringify(userData));
      navigation("/");
    }



    // dispatch(
    //   SignIn({
    //     email: loginData.email,
    //     password: loginData.password,
    //   })
    // );
  };

  // const disabledButton = useMemo(() => {
  //   if (loginData?.email.length > 0 && loginData?.password?.length > 0)
  //     return false;
  //   return true;
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loginData]);

  return (
    <>
      <div className="formTemplate formTemplate">
        <div className="formTemplate__container">
          <div className="formTemplate__logo">{/* <Logo /> */}</div>
          <div className="formCard formCard--green">
            <Typography component="h1" variant="h5" className="formCard__title">
              Login
            </Typography>
            <form>
              <Box className="formGroup">
                <TextField
                  type="email"
                  fullWidth
                  name="email"
                  value={loginData?.email}
                  label={"Email"}
                  onChange={(e) => handleChange(e)}
                  focused
                />
                <Typography className="errorText">{isEmailError}</Typography>
              </Box>
              <Box className="formGroup">
                <TextField
                  type="password"
                  name="password"
                  value={loginData?.password}
                  fullWidth
                  label={"Password"}
                  onChange={(e) => handleChange(e)}
                  focused
                />
                {/* {ToggleIcon} */}
                <Typography className="errorText">{isPasswordError}</Typography>
              </Box>
              <Box className="formCard__btn">
                <Button
                  variant="contained"
                  color="primary"
                  className="btn"
                  onClick={(e) => handleSubmit(e)}
                  //   disabled={isFetching || disabledButton}
                >
                  Sign in
                </Button>
              </Box>
            </form>
            <p className="contentLink" style={{ textAlign: "center" }}>
              Don't have Account,
              <div
                onClick={() => {
                  navigation("/register");
                }}
              >
                Create new account
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
