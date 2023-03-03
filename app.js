// Instances
const github = new Github();
const ui = new UI();

// Add event listener
document.querySelector('#searchUser').addEventListener('keyup', function(e){
    // Get username input
    let username = e.target.value;

    if( username == '' ){
        // Clear user info
        document.querySelector('#profile').innerHTML = '';
    } else {
        // Make HTTP call
        let request = github.getUser(username);

        request.then(data => {
            if(data.profile.message != 'Not Found'){
                // Paint the UI of the user informations
                ui.paintUserInfo(data.profile);
                ui.paintRepositories(data.repos);
            } else {
                // Paint a notice if user not exist
                ui.showAlert();
            }
        });
    }
});