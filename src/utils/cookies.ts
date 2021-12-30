export const getCookie = (name: string) => {
  // Split cookie string and get all individual name=value pairs in an array
  let cookieArr = document.cookie.split(";");

  // Loop through the array elements
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");

    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }

  // Return null if not found
  return null;
};

export const setCookie = (name: string, value: string, daysToLive: number) => {
  var cookie = name + "=" + encodeURIComponent(value);

  if (typeof daysToLive === "number") {
    cookie += "; max-age=" + daysToLive * 24 * 60 * 60;

    document.cookie = cookie;
  }
};
