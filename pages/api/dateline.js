import { BACKEND_HOST } from "./request";

export async function GetYears() {
  let url = BACKEND_HOST + "Backend/poeate/dateline/";
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
