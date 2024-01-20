export const checkId = function (req, res, next) {
  const { userId } = req.body;

  if (userId) {
    next();
  } else {
    return res.send("User ID is required. From Middleware.");
  }
};
