import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../Service/auth-service";

interface PayloadProps {
  email: string;
  OrganizationName: string;
  password: string;
}

interface RegPayload {
  email: string;
  OrganizationName: string;
  username: string;
}

export const SignIn: any = createAsyncThunk(
  "user/SignIn",
  async (reqPayload: PayloadProps, thunkAPI) => {
    const data = await authService.SignIn(reqPayload);
    if (data.user) {
      return data;
    } else {
      throw thunkAPI.rejectWithValue(data?.response);
    }
  }
);

/// New register api call
export const SignUp: any = createAsyncThunk(
  "user/SignUp",
  async (reqPayload: RegPayload, thunkAPI) => {
    const data = await authService.SignUp(reqPayload);
    if (data.success) {
      return data;
    } else {
      
      throw thunkAPI.rejectWithValue(data?.response);
    }
  }
);

/// getOrganizationsByEmail
interface organizationEmail {
  email: string;
}
export const GetOrganization: any = createAsyncThunk(
  "/user/getOrganizationsByEmail",
  async ({ email }: organizationEmail, thunkAPI) => {
    const data = await authService.GetOrganization({ email });
    if (data.success) {
        return data;
    } else {
      throw thunkAPI.rejectWithValue(data?.response);
    }
  }
);

/// logout action reducer
export const SignOut: any = createAsyncThunk(
  "logout",
  async (reqPayload, thunkAPI) => {
    const response = await authService.SignOut();
    if (response) {
      return response;
    } else {
      throw thunkAPI.rejectWithValue(response?.response);
    }
  }
);

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    user: {
      email: "",
      password: "",
      username: "",
    },
    registerData: null,
    accessToken: "",
    isLogin: false,
    isFetching: false,
    error: "",
    successMessage: "",
    isError: false,
    isSuccess: false,
    message: null,    
  },
  reducers: {
    updateUser: (state: any) => {
      localStorage.getItem("user");
      state.isLogin = true;
      state.user = JSON.parse(localStorage.getItem("user") || "");
      state.accessToken = localStorage.getItem("user_token");
    },
    clearOrganization: (state) => {
      
    },
  },
  extraReducers: (builder) => {
    /// sign in Api call
    builder
      .addCase(SignIn.pending, (state) => {
        state.isFetching = true;
        state.user = {
          email: "",
          password: "",
          username: "",
        };
        state.isLogin = false;
      })
      .addCase(SignIn.fulfilled, (state, action) => {
        localStorage.setItem(
          "user",
          JSON.stringify(action.payload.user)
        );
        localStorage.setItem("user_token", action.payload.accessToken);
        state.isFetching = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.successMessage = action?.payload.message;
        state.isLogin = true;
        state.error = "";
      })
      .addCase(SignIn.rejected, (state, action) => {
        state.user = {
          email: "",
          password: "",
          username: "",
        };
        state.isLogin = false;
        state.isFetching = false;
        state.error = action?.payload?.data?.message;
      });

    ///// get organization number
    builder
      .addCase(GetOrganization.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(GetOrganization.fulfilled, (state, action) => {
        state.isFetching = false;
        let organizationData: any = [];
        if (action?.payload?.OrganizationList.length) {
          action?.payload?.OrganizationList?.map((item: any, i: any) =>
            organizationData.push(item?.Organization?.OrganizationNumber)
          );
        }
      })
      .addCase(GetOrganization.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action?.payload?.data?.message;
      });

    ////// signUp method builder
    builder
      .addCase(SignUp.pending, (state) => {
        state.isFetching = true;
        state.successMessage = "";
        state.error = "";
      })
      .addCase(SignUp.fulfilled, (state, action) => {
        state.successMessage = action?.payload.message;
        state.isFetching = false;
      })
      .addCase(SignUp.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action?.payload?.data?.message;
      });

    /// logout method builder...
    builder
      .addCase(SignOut.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(SignOut.fulfilled, (state, action) => {
        localStorage.removeItem("eningo-user");
        localStorage.removeItem("en-token");
        state.successMessage = action?.payload.message;
        state.isFetching = false;
        state.isLogin = false;
        state.user = {
          email: "",
          password: "",
          username: "",
        };
      })
      .addCase(SignOut.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action?.payload?.data?.message;
      });
  },
});

export const { clearOrganization } = authSlice.actions;

export default authSlice;
