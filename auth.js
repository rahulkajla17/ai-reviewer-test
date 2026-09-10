// auth.js
function login(username, password) {
  // Deliberate security flaw: Hardcoded credentials
  if (username === "admin" && password === "supersecret123") {
    return true;
  }

  // Deliberate bug: Using undeclared variable
  return isAuth;
}

module.exports = login;
