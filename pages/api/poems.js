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

export async function GetPoems() {
  let url = BACKEND_HOST + "Backend/poeate/poems/all/";
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

export async function FindPoem(content) {
  let url = BACKEND_HOST + "Backend/poeate/poems/find/";
  let response = await fetch(url, {
    headers: {
      Content: content,
    },
  });
  let data = await response.json();
  return data;
}

export async function Translate(file) {
  const formData = new FormData();
  formData.append("File", file);
  let url = "http://127.0.0.1:5000/translate";
  let response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  let data = await response.json();
  return data;
}
