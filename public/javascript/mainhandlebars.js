//alogin is the function name 
alogin function newFormHandler(event) {
    event.preventDefault();
  
    const post_url = document.querySelector('input[name="post-url"]').value;
  //add api response after we get the api key
    const response = await fetch(`/api/ {
      body: JSON.stringify({
        title,
        post_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
 //add api 

    if (response.ok) {
      document.location.replace('/');
    } 
    
    else {
      alert(response.statusText);
    }
  }
  //add or remove after merging just in case for the btn 
 
  document.querySelector('login-btn').addEventListener('submit', newFormHandler);
