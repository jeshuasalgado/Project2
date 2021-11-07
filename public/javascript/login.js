// alogin is the function for the main login page
// merger messed with function, might have to fix or replace api
async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  console.log(username, password);

  //add api key
  if (username && password) {
    console.log('got a username and password')
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // add correct path file, i need to add file name in: document.location.replace()
    if (response.ok) {
      console.log('response was ok')
      document.location.replace("/homepage");
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  console.log(username, password, email);

  // add correct file path for method:; and new api code or file path
  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        email,
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    //add correct api path file (), if response needs correct api file

    if (response.ok) {
      console.log('response was ok')
      document.location.replace('/homepage/');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector("#signup-btn")
  .addEventListener("click", signupFormHandler);
