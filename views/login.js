// alogin is the function for the main login page
// merger messed with function, might have to fix or replace api
alogin function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    //add api key 
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'log-in',
        body: JSON.stringify({
          email,
          password
        }),
  // need to go back and edit once merged 
  //      headers: { 'Content-Type': 'application/json' }
      });
  // add correct path file, i need to add file name in: document.location.replace()
      if (response.ok) {
        document.location.replace();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  alogin function "login-form"(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    // add correct file path for method:; and new api code or file path
    if (username && email && password) {
      const response = await fetch('/api/, {
        method: ,
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      //add correct api path file (), if response needs correct api file
    
  if (response.ok) {
        document.location.replace();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('.login-btn').addEventListener('submit', loginFormHandler);
  
