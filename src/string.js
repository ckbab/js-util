export const capitalize = (str) => {
  if (str) {
    return str.charAt(0)?.toUpperCase() + str.slice(1);
  }
  return "";
};

export const uncapitalize = (str) => {
  if (str) {
    return str.charAt(0)?.toLowerCase() + str.slice(1);
  }
  return "";
};

export const isEmail = (email) => {
  if (email) {
    const re = /\S+@\S+/;
    return re.test(email);
  }
  return false;
};
