import { BACKEND_HOST } from "./request.js";

export async function GetProfiles() {
  let url = BACKEND_HOST + "Backend/poeate/";
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
