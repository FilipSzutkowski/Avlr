const userIDFromHeader = (string) => {
  return string.slice(string.indexOf('|') + 1);
};

export default userIDFromHeader;
