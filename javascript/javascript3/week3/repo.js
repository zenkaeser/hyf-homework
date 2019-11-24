let p1 = fetch('https://api.github.com/search/repositories?q=user:m-elshawa')
          .then(res => res.json())
          .then(res => {
            const repos = 
                  {
                    name: res.items[0].owner.login,
                    items: []
                  }
                  for(let i in res.items) {
                    repos.items.push({
                      repo_name: res.items[i].name,
                      repo_url: res.items[i].html_url
                    })
                  }
            renderPromise(repos);      
            return repos;
          })
let p2 = fetch('https://api.github.com/search/repositories?q=user:ricardoaguiar')
          .then(res => res.json())
          .then(res => {
            const repos = 
                  {
                    name: res.items[0].owner.login,
                    items: []
                  }
                  for(let i in res.items) {
                    repos.items.push({
                      repo_name: res.items[i].name,
                      repo_url: res.items[i].html_url
                    })
                  }
            renderPromise(repos);        
            return repos;
          })
let p3 = fetch('https://api.github.com/search/repositories?q=user:wael85')
          .then(res => res.json())
          .then(res => {
            const repos = 
                  {
                    name: res.items[0].owner.login,
                    items: []
                  }
                  for(let i in res.items) {
                    repos.items.push({
                      repo_name: res.items[i].name,
                      repo_url: res.items[i].html_url
                    })
                  }
            renderPromise(repos);
            return repos;
          })       

Promise.all([p1, p2, p3])
      .then(values => console.log(values));


function renderPromise(data) {
  const li = document.createElement('li');
  li.innerText = data.name;
  const ul = document.createElement('ul');
  let arrData = data.items;

  for(let item in arrData) { 
    const innerLi = document.createElement('li');
    innerLi.innerText = `${arrData[item].repo_name}: ${arrData[item].repo_url}`;
    ul.appendChild(innerLi);
  }

  li.appendChild(ul);
  document.querySelector('#reposUl').appendChild(li);
}

