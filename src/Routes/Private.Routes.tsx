import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ user }: any) => {
  const arrayString = localStorage.getItem('userToken');
  let userExist:any = {};
  userExist = arrayString && arrayString !== "undefined"? JSON.parse(arrayString):"";
 
  return userExist ? <Outlet />:<Navigate to="/login" />;

};

export default PrivateRoute;
