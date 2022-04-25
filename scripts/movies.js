 
  let sum= JSON.parse(localStorage.getItem("amount"))
  document.querySelector("#wallet").innerHTML= sum
  
  let id;
  
  
  async function searchMovies() {

  

try {
    const query = document.querySelector("#search").value;

    const res = await fetch(
      `https://www.omdbapi.com/?apikey=ae3b8760&s=${query}`
    );

    const data = await res.json();
    console.log("data",data)
    showMovies(data)

    const movies = data.Search;
   // appendMovies(movies);
  } catch (err) {
    console.log("err:", err);
  }
}





///////////////////////////////////we assemble in one function

async function main() {
  let data = await searchMovies();
 // showMovies(data)

  if (data == undefined) {
    return false;
  }
 
  //appendMovies(data);
  showMovies(el);
}
////////////////////////////////////////// debouncing

function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}



function  showMovies(el){
    
    console.log(el)
    
    document.getElementById("movies").innerHTML=null;

    el.forEach(function(data){
        console.log(data)

        let div = document.createElement("div");

        let poster = document.createElement("img")
          poster.src= data.poster;

          let name = document.createElement("p")
            p.innerText= `Name : ${data.Title}`

            let button = document.querySelector("button")
            button.innerText= "Book Now"

            button.addEventListener("click",function(){
                localStorage.setItem("movie",JSON.stringify(data))
                windows.location.href="checkout.html"
            })

          //  console.log(el)

            div.append(poster,name,button)
            document.getElementById("movies").append(div)
    })

    
}