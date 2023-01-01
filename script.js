const url ="https://inshortsapi.vercel.app/news?category="

async function getdata(catagory){
    let newsdisplay = document.querySelector(".display") 
    newsdisplay.innerHTML=`<div >
    <center>
    <img  src="https://i.pinimg.com/originals/7e/4d/c4/7e4dc49c0a189260eb678a49be2c686b.gif" 
     alt="..."/>
     <center/>
    
    </div>`

    let resdata = await fetch(url+`${catagory}`, {method:"GET"})
    console.log(resdata)
    // if(!resdata){
    //     
    // }
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
