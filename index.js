fetch ('https://rickandmortyapi.com/api/character', {
    method: 'GET'
})
.then(response => response.json())
.then(function(json){
    
    var container = document.querySelector('.container');

    json.results.map(function(results){

        container.innerHTML += `
        
        <div class="card border border-2 border-success p-2 mb-2"" style="width: 18rem;">
        <img src = ` + results.image + ` class="rounded border border-2 border-dark">
  <div class="card-body text-bg-light p-3">
    <h5 class="card-title"><strong> Nome: </strong>` + results.name + `</h5>
    <h5 class="card-title"><strong> Status: </strong>` + results.status + `</h5>
    <h5 class="card-title"><strong> Espécie: </strong>` + results.species + `</h5>
    <h5 class="card-title"><strong> Sexo: </strong>` + results.gender + `</h5>
    <h5 class="card-title"><strong> Origin: </strong>` + results.origin.name + `</h5>
  </div>  
</div>
` ;
    })
})