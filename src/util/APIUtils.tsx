import { API_BASE_URL } from "../config";

export type PostObject = {
    color_code: string
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
    let url: string = API_BASE_URL!
    if (API_BASE_URL!.includes('undefined')) {
        url = API_BASE_URL!.replace('undefined','')
    }

    return request({
      url: url,
      method: "POST",
      body: JSON.stringify(colorCode)
    });
  }
  