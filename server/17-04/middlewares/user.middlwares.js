export const isValidToken = function (req, res, next) {
  console.log("Token verified");
  next();
};
