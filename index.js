import { authenticate } from "./auth.js";
const username = "admin";
const password = "supersecret123";
const app = document.getElementById("app");

if (authenticate(username, password)) {
  app.innerHTML = "<h1>Welcome, admin!</h1>";
} else {
  app.innerHTML = "<h1>Access Denied</h1>";
}
