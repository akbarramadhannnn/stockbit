export const ReplaceToStartUpperCase = (str) => {
  const replaceStr = str.replace(/-/g, ' ');
  return replaceStr.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const ReplaceToSlug = (str) => {
  return str.replace(/\s+/g, '-').toLowerCase();
};
