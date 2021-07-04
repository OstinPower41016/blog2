import { axiosUser } from "./axios";

interface ILoginUser {
  password: string;
  email: string;
}

interface ICreateUser extends ILoginUser {
  username?: string;
}

export interface IValuesForm {
  username: string;
  email: string;
  password: string;
  bio: string;
  image: string;
}

export const createUser = async (userData: ICreateUser) => {
  try {
    await axiosUser.post("/users", { user: { ...userData } });
    await login(userData);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (userData: ILoginUser) => {
  try {
    const t = (await axiosUser.post("/users/login", { user: { ...userData } })).data.user.token;
    localStorage.setItem("auth", t);
    return t;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const t = localStorage.getItem("auth");
    const user = await (
      await axiosUser.get("/user", { headers: { Authorization: "Bearer " + t } })
    ).data.user;
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const changeUserSettings = async (user: IValuesForm) => {
  try {
    const t = localStorage.getItem("auth");
    await axiosUser.put(
      "/user",
      { user: { ...user } },
      { headers: { Authorization: "Bearer " + t } },
    );
  } catch (error) {
    console.log(error);
  }
};
