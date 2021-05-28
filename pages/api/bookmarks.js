import { BACKEND_HOST } from "./request";

export async function GetBookmarks() {
  let token = sessionStorage.getItem("token");
  let url = BACKEND_HOST + "bookmarks/";
  let response = await fetch(url, {
    headers: {
      Token: token,
    },
  });
  let data = await response.json();
  return data;
}

export async function AddBookmark(id) {
  let token = sessionStorage.getItem("token");
  let url = BACKEND_HOST + "bookmarks/set/";
  let response = await fetch(url, {
    headers: {
      Poem: id,
      Token: token,
    },
  });
}

export async function RemoveBookmark(id) {
  let token = sessionStorage.getItem("token");
  let url = BACKEND_HOST + "bookmarks/remove/";
  let response = await fetch(url, {
    headers: {
      Poem: id,
      Token: token,
    },
  });
}
