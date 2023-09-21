import http from "../../ApiService/http.service";

interface PayloadProps {
  email: string;
  OrganizationName: string;
  password: string;
}
/// Sign in
const SignIn = async (reqPayload: PayloadProps) => {
  try {
    let response = await http.post(`/auth/login`, { ...reqPayload });
    return response.data;
  } catch (e) {
    return e;
  }
};
interface RegPayload {
  email: string;
  OrganizationName: string;
  username: string;
}
/// Sign up
const SignUp = async (reqPayload: RegPayload) => {
  try {
    let response = await http.post(`/auth/register`, { ...reqPayload });
    return response.data;
  } catch (e) {
    return e;
  }
};

interface organizationEmail {
  email: string;
}
/// getOrganizationsByEmail
const GetOrganization = async ({ email }: organizationEmail) => {
  try {
    let response = await http.get(
      `/user/getOrganizationsByEmail/?email=${email}`
    );
    return response.data;
  } catch (e) {
    return e;
  }
};

/// logout api
const SignOut = async () => {
  try {
    const response = await http.get("/auth/logout");
    if (response) return response.data;
  } catch (error) {
    return error;
  }
};

const rolesService = {
  SignIn,
  SignUp,
  GetOrganization,
  SignOut,
};
export default rolesService;
