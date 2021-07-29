// Github Class instance
const github = new Github();
const ui = new UI();

// Add event listener
document.querySelector('#searchUser').addEventListener('keyup', function(e){
    // Get username input
    let username = e.target.value;

    if(username == ''){
        // Clear user info
        document.querySelector('#profile').innerHTML = '';
    } else {
        // Send API request
        let userInfo = github.getUser(username);
        userInfo.then(res => {
            if(res.message != 'Not Found'){
                // Paint the UI of the user informations
                ui.paintUserInfo(res);
            } else {
                // Paint a notice if user not exist
                ui.showAlert();
            }
        });
    }
});