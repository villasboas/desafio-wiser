import apiService from "../api";

export function logIn(email: string, password: string) {
  return apiService
    .post("/login", { email, password })
    .then(({ data }) => data);
}

export default {
  logIn,
};
