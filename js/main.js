import LoginUser from "./login.js";
import RegisterUser from "./register.js";
import Authenticated from "./authenticated.js";
import Notificades from "./notificade.js";
import Feedback from "./Feedback.js";

const login = new LoginUser();
login.authenticated();

const authenticatedIndex = new Authenticated();
authenticatedIndex.verificarLogin();

if (window.location.pathname === "/views/login.html") {
	document.getElementById("login").addEventListener("submit", (event) => {
		event.preventDefault();

		login.getUsers();
	});
}

if (window.location.pathname === "/views/register.html") {
	document.getElementById("register").addEventListener("submit", (event) => {
		event.preventDefault();

		const register = new RegisterUser();
		register.getUsers();
	});
}
//notificade


// notificade.GetNotificade();
document.getElementById("start").addEventListener("click", () => {
	const feedback = new Feedback();
	feedback.getFeedback();
});
document.getElementById("decline").addEventListener("click", () => {
	storage.removeItem(keyName);
});



// const register = new RegisterUser

// const registerUser = new RegisterUser
// registerUser.addUser()
