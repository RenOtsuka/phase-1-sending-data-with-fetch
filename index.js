// Add your code here

function submitData(username, useremail){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: username,
            email: useremail,
        })
    })
    .then(resp => resp.json())
    .then(obj => document.querySelector('body').append(obj.id))
    .catch(error => document.querySelector('body').append(error));
}
