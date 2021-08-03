class UI{
    paintUserInfo(userInfo){
        document.querySelector('#profile').innerHTML = `
        <div class="card card-body mb-3">
          <div class="row">
            <div class="col-md-3">
              <img class="img-fluid mb-2" src="${userInfo.avatar_url}">
              <a href="${userInfo.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge badge-primary">Public Repos: ${userInfo.public_repos}</span>
              <span class="badge badge-secondary">Public Gists: ${userInfo.public_gists}</span>
              <span class="badge badge-success">Followers: ${userInfo.followers}</span>
              <span class="badge badge-info">Following: ${userInfo.following}</span>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">Company: ${userInfo.company}</li>
                <li class="list-group-item">Website/Blog: ${userInfo.blog}</li>
                <li class="list-group-item">Location: ${userInfo.location}</li>
                <li class="list-group-item">Member Since: ${userInfo.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    paintRepositories(repoList){
      let output = '';

      console.log(repoList);

      // repoList.forEach(function(repo, index, actualArray ){
      //   output += `<div class="card card-body mb-2">
      //     <div class="row">
      //       <div class="col-md-6">
      //         <a href="${repo.html_url}" target="_blank">${repo.name}</a>
      //       </div>
      //       <div class="col-md-6">
      //       <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
      //       <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
      //       <span class="badge badge-success">Forks: ${repo.forms_count}</span>
      //       </div>
      //     </div>
      //   </div>`;
      // });

      // document.querySelector('#repos').innerHTML = output;
    }

    showAlert(){
        // Render the alert
        let div = document.createElement('div');
        div.className = 'alert alert-danger';
        div.appendChild(document.createTextNode('This user does not exist!'));
        document.querySelector('.searchContainer').insertBefore(div, document.querySelector('.search'));

        // Remove the alert after 4 sec
        setTimeout(function(){
            let $alert =  document.querySelector('.alert');
            $alert.parentNode.removeChild($alert);
        }, 3000);
    }
}