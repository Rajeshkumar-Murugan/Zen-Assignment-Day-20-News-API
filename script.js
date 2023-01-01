const url ="https://inshortsapi.vercel.app/news?category="

async function getdata(catagory){
    let newsdisplay = document.querySelector(".display") 
    newsdisplay.innerHTML=`<div >
    <center>
    <img  src="https://assets-global.website-files.com/5c7fdbdd4e3feeee8dd96dd2/6134707265a929f4cdfc1f6d_5.gif" 
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
