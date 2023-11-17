const users = require('../utils/users');

const login = (req, res) => {
  const { email, password } = req.query;

  const userValid = users.find(
    (user) => user.email === email && user.password === password
  );

  if (userValid) {
    return res.json({ access: true });
  }
  return res.json({ access: false });

  /* 
  return userValid ? res.json({ access: true }) :
  res.json({ access: false });
  */
};

module.exports = login;
