export const capitalize = (str) => {
  if (str) {
    return str.charAt(0)?.toUpperCase() + str.slice(1);
  }
  return "";
};

export const cutText = (str, length) => {
  if (str && str.length > length) {
    const text = str.slice(0, length - 3).trim();
    return text + "...";
  }
  return str;
};

export const formatPhoneNumber = (str) => {
  if (str) {
    const match = str.toString().match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
      // [0] is the input string
      return match.slice(1).join(" ");
    }
  }
  return null;
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
    const re = /\S+@\S+/;
    return re.test(str);
  }
  return false;
};

export const stripPhoneNumber = (str) => {
  if (str) {
    // Remove (0) from e.g. "+46 (0) 73 693..."
    str = str.replace(/\(0\)/g, "");
    // Remove everything except digits and plus sign
    str = str.replace(/[^\d+]+/g, "");
    // Replace "00" with "+"
    str = str.replace(/^00/, "+");
    // Localize number if Swedish
    str = str.replace(/^\+46/, "0");
  }
  return str;
};

export const uncapitalize = (str) => {
  if (str) {
    return str.charAt(0)?.toLowerCase() + str.slice(1);
  }
  return "";
};
