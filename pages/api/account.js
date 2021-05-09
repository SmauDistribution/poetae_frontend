import { BACKEND_HOST } from "./request";

export function GetToken() {
  let token = undefined;
  if (typeof window !== "undefined") token = sessionStorage.getItem("token");

  if (token !== undefined && token !== null) return token;
  else return null;
}

export async function register(username, password) {
  let url = BACKEND_HOST + "Backend/poeate/register/";
  await fetch(url, {
    method: "POST",
    headers: {
      Username: username,
      Password: password,
    },
  });
}

export async function login(username, password) {
  let url = BACKEND_HOST + "Backend/poeate/login/";
  let resp = await fetch(url, {
    headers: {
      Username: username,
      Password: password,
    },
  });

  let data = resp.json();
  return data;
}

export async function auth() {
  let token = GetToken();
  let url = BACKEND_HOST + "Backend/poeate/auth/";

  let resp = await fetch(url, {
    headers: {
      Token: token,
    },
  });

  let data = resp.json();
  return data;
}

export function logout() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("username");
}
