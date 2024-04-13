export const Register = function (req, res) {
  try {
    const { name, email, password, confirmPassword } = req.body;
    console.log("All Data:", name, email, password, confirmPassword);
    return res.send(true);
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};

export const Login = function (req, res) {
  try {
    const { email, password } = req.body;
    console.log("All Data:", email, password);
    return res.send(true);
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
};
