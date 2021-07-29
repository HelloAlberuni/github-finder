class Github{
    // get user
    getUser(username){
        let client_id = 'ee591408080d5e5946da';
        let client_secret = '87cb9f7500f8d1cfc72566468d589102be53a2f7';
        return fetch(`https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`)
        .then( res => res.json() );
    }
}