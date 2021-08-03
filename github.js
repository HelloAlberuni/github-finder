class Github{
    constructor(){
        this.per_page = 5;
    }

    // get user
    async getUser(username){
        let client_id = 'ee591408080d5e5946da';
        let client_secret = '87cb9f7500f8d1cfc72566468d589102be53a2f7';

        let profileResponse = await fetch(`https://api.github.com/users/${username}?client_id=${client_id}&client_secret=${client_secret}`);
        let repoResponse    = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.per_page}&client_id=${client_id}&client_secret=${client_secret}`);

        let profile         = await profileResponse.json();
        let repos           = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}