import { API_BASE_URL } from "../config";

export type PostObject = {
    color_code: string
    flush_type: number
};

const request = (options: any) => {
    const headers = new Headers({
      "Content-Type": "application/json"
    });
  
    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);
  
    return fetch(options.url, options).then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    );
  };

export function changePenlightColor(colorCode: PostObject) {
    return request({
      url: API_BASE_URL+'/color',
      method: "POST",
      body: JSON.stringify(colorCode)
    });
  }
  