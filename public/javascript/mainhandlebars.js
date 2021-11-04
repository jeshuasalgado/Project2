async function loginHandler(event) {
    event.preventDefault();
    document.location.replace('/login')
}

async function logoutHandler(event) {
  event.preventDefault();
  console.log('logout button hit');
}

async function newRecipeHandler(event) {
  event.preventDefault();
  console.log('new recipe button hit');
}
 
document.querySelector('#login-nav').addEventListener('click', loginHandler);
document.querySelector('#logout-nav').addEventListener('click', logoutHandler);
document.querySelector('#recipe-nav').addEventListener('click', newRecipeHandler);
