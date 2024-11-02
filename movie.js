document.addEventListener("DOMContentLoaded",function(){
    var movieNameElement = document.getElementById("movie-name")
    var searchButton = document.getElementById("search-btn")
    var movieContainer = document.getElementById("movie-container")
    var movieStatusElement = document.getElementById("movie-status")
    var loadingElement = document.getElementById("loading")
    searchButton.addEventListener("click",function(){
        movieContainer.innerHTML = ""
        movieStatusElement.innerHTML = ""
        let movieName = movieNameElement.value
        var xhttp = new XMLHttpRequest();
        loadingElement.style.display="block";

        xhttp.onreadystatechange =function(){
            if(this.readyState == 4){
                loadingElement.style.display="none";
                movieStatusElement.innerHTML = "";

                let result = JSON.parse(this.responseText);
                if(result.Response == "True"){
                    console.log(result);
                    result.Search.map((item,i)=>{
                        movieContainer.innerHTML += `
                        <div class="movie-cards">
                            <img    
                                class="movie-thumbnail"
                                src="${item.Poster}"
                            />
                            <p><b>Title : </b>${item.Title}</p>
                            <p><b>Release Year : </b>${item.Year}</p>
                            <p><b>Type : </b>${item.Type}</p>
                        </div>
                        `
                    })
                }else if(result.Response == "False"){
                    movieStatusElement.innerText = "404 movie not found..!";
                }
            }

        }
        xhttp.open("GET", `https://www.omdbapi.com/?apikey=45f0782a&s=${movieName}`, true);
        xhttp.send();
    })
})

