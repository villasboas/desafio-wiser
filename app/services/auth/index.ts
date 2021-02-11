import apiService from "../api";

/**
 * logIn
 *
 * log a user in with email and password
 *
 * @param email
 * @param password
 */
export function logIn(email: string, password: string) {
  return apiService
    .post("/login", { email, password })
    .then(({ data }) => data);
}

export default {
  logIn,
};
