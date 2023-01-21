const url ="https://inshortsapi.vercel.app/news?category="

async function getdata(catagory){
    let display = document.querySelector(".display") 
    display.innerHTML=`<div >

    <div class="position-absolute top-50 start-50 translate-middle">
    <img  src="https://i.pinimg.com/originals/7e/4d/c4/7e4dc49c0a189260eb678a49be2c686b.gif" 
     alt="..." style="width:300px;"/>
    </div>

    
    
    </div>`

    let resdata = await fetch(url+`${catagory}`, {method:"GET"})
    console.log(resdata)
    let jsdata = await resdata.json()
    return jsdata
    
}



async function newsdisplay(catagory){


    
    let newsdata = await getdata(catagory)
    let newsdisplay = document.querySelector(".display")  
    newsdisplay.innerHTML= '' //Wipping the data
     
    //Displaying news  
    newsdata.data.map((e)=>{
        newsdisplay.innerHTML+=` 
        <div class="card">
            <div class="flexs">
            <div>
                <img src="${e.imageUrl}" class="card-img-top images" alt="...">
            </div>    
            <div class="card-body">
                <h5 class="card-title">${e.title}</h5>
                <p class="card-text">${e.content}</p>
                <div class="row">
                <div class="col">
                <a href="${e.readMoreUrl}" class="btn btn-primary">Read More</a>
                </div>
                <div class="col">
                --${e.author}
            </div>
            </div>
        </div>
        `
    })
}
newsdisplay('all')

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.querySelector(".menu").innerHTML = `
    </br>
    </br>
    </br>
    <nav class="navbar navbar-dark bg-dark fixed-top ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Todays News</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Topics</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          
          <!-- <ul class="nav nav-tabs" id="myTab" role="tablist"> -->
            <li class="nav-item" role="presentation">
              <a class="nav-link active btn-lg" data-bs-dismiss="offcanvas" data-bs-toggle="tab" aria-current="page" href="#" onclick="newsdisplay('all')">All</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link btn-lg"data-bs-dismiss="offcanvas" data-bs-toggle="tab" href="#"onclick="newsdisplay('national')">National</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link btn-lg"data-bs-dismiss="offcanvas" data-bs-toggle="tab" href="#" onclick="newsdisplay('business')">Business</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link btn-lg"data-bs-dismiss="offcanvas" data-bs-toggle="tab" href="#" onclick="newsdisplay('sports')">Sports</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link btn-lg " data-bs-dismiss="offcanvas" data-bs-toggle="tab" href="#" onclick="newsdisplay('world')">World</a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-lg"data-bs-dismiss="offcanvas" data-bs-toggle="tab" href="#" onclick="newsdisplay('politics')">Politics</a>
              </li>
              <li class="nav-item" >
                <a class="nav-link btn-lg" data-bs-dismiss="offcanvas" data-bs-toggle="tab" href="#" onclick="newsdisplay('technology')">Technology</a>
              </li> <li class="nav-item">
                <a class="nav-link btn-lg"data-bs-dismiss="offcanvas" data-bs-toggle="tab" href="#" onclick="newsdisplay('startup')">Startup</a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-lg"data-bs-dismiss="offcanvas" data-bs-toggle="tab" href="#" onclick="newsdisplay('entertainment')">Entertainment
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-lg" data-bs-dismiss="offcanvas" data-bs-toggle="tab" href="#"  onclick="newsdisplay('miscellaneous')">Miscellaneous
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-lg"data-bs-dismiss="offcanvas" data-bs-toggle="tab" href="#" onclick="newsdisplay('hatke')">Hatke</a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-lg" data-bs-dismiss="offcanvas" data-bs-toggle="tab" href="#" onclick="newsdisplay('science')">Science</a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-lg"data-bs-dismiss="offcanvas" data-bs-toggle="tab" href="#" onclick="newsdisplay('automobile')">Automobile</a>
              </li>
            
          <!-- </ul> -->

        </ul>
        
      </div>
    </div>
  </div>
</nav>
    `
  } else {
    document.querySelector(".menu").innerHTML = `

    <div class="header">
    <p><b>TODAYS NEWS</b></p>
    </div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active btn-lg"  data-bs-toggle="tab" aria-current="page" href="#" onclick="newsdisplay('all')">All</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link btn-lg" data-bs-toggle="tab" href="#"onclick="newsdisplay('national')">National</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link btn-lg" data-bs-toggle="tab" href="#" onclick="newsdisplay('business')">Business</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link btn-lg" data-bs-toggle="tab" href="#" onclick="newsdisplay('sports')">Sports</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link btn-lg "  data-bs-toggle="tab" href="#" onclick="newsdisplay('world')">World</a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-lg" data-bs-toggle="tab" href="#" onclick="newsdisplay('politics')">Politics</a>
              </li>
              <li class="nav-item" >
                <a class="nav-link btn-lg"  data-bs-toggle="tab" href="#" onclick="newsdisplay('technology')">Technology</a>
              </li> <li class="nav-item">
                <a class="nav-link btn-lg" data-bs-toggle="tab" href="#" onclick="newsdisplay('startup')">Startup</a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-lg" data-bs-toggle="tab" href="#" onclick="newsdisplay('entertainment')">Entertainment
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-lg"  data-bs-toggle="tab" href="#"  onclick="newsdisplay('miscellaneous')">Miscellaneous
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-lg" data-bs-toggle="tab" href="#" onclick="newsdisplay('hatke')">Hatke</a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-lg"  data-bs-toggle="tab" href="#" onclick="newsdisplay('science')">Science</a>
              </li>
              <li class="nav-item">
                <a class="nav-link btn-lg" data-bs-toggle="tab" href="#" onclick="newsdisplay('automobile')">Automobile</a>
              </li>
            
          </ul>
    `
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
