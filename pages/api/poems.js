import { BACKEND_HOST } from "./request";

export async function GetPoem(profile) {
  let url = BACKEND_HOST + "Backend/poeate/poems/";
  let response = await fetch(url, {
    headers: {
      Profile: profile,
    },
  });
  let data = await response.json();
  return data;
}

export async function GetPoemBy(id) {
  let url = BACKEND_HOST + "Backend/poeate/poems/";
  let response = await fetch(url, {
    headers: {
      id: id,
    },
  });
  let data = await response.json();
  return data;
}
