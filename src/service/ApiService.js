import { API_BASE_URL } from "App-config";

const SERVER_FILE_EXT = ".php";

export const customAlert = (msg) => {
  console.error(msg);
};

export const call = async (api, method, request, isForm) => {
  let options = {
    url: API_BASE_URL + api + SERVER_FILE_EXT,
    method: method,
  };

  if (request) {
    if (isForm) {
      options.body = request;
    } else {
      options.body = JSON.stringify(request);
    }
  }

  const response = await fetch(options.url, options);
  const json = await response.json();
  if (!json.success) {
    return Promise.reject(json);
  }
  return json;
};
