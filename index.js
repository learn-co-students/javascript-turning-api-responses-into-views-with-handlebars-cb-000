
document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML)
});

function showRepositories() {
  const repos = JSON.parse(this.responseText)

  const template = Handlebars.compile(document.getElementById('repository-template').innerHTML)
  const repoList = template(repos)

  const lodashTemplate = _.template(document.getElementById('repository-lodash-template').innerHTML)
  reposLodashHTML = lodashTemplate({'repos': repos})

  document.getElementById('handlebars-repositories').innerHTML = repoList
  document.getElementById('lodash-repositories').innerHTML = reposLodashHTML
}

function getRepositories(){
  const req = new XMLHttpRequest()
  req.addEventListener('load', showRepositories)
  req.open("GET", 'https://api.github.com/users/octocat/repos')
  req.send()
}
