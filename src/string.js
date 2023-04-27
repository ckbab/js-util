export const createUrl = (basePath, obj) => {
  const params = Object.entries(obj)
    ?.map(([key, value]) => [key, value].join("="))
    .join("&");
  return params ? `${basePath}?${params}` : basePath;
};

export const formatUrl = (str) => {
  if (str) {
    // If URL starts with "http" - keep it.
    if (str.indexOf("http://") == 0) {
      return str;
    }
    // Otherwise always use "https".
    return "https://" + str.replace(/^https?:\/\//, "");
  }
  return null;
};

export const isEmail = (str) => {
  if (str) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(str);
  }
  return false;
};
