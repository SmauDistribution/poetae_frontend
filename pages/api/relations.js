import { BACKEND_HOST } from "./request";

export async function GetRelations() {
  let url = BACKEND_HOST + "Backend/poeate/relations/";
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
