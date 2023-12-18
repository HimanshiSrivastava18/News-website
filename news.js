
let url1=`https://newsapi.org/v2/top-headlines?country=in&apiKey=f4cea415260b4a4eb8eca877b1f5b3f7`
async function fetchNews(url){
    try{
        let res=await fetch(url);
        let data= await res.json();
        for(i=0;i<9;i++){
            let box=document.querySelectorAll(".box");
            let a=data.articles[i].urlToImage;
            let img=document.createElement("img");
            img.src=a;
            box[i].appendChild(img);
            let p1=document.createElement("p")
            p1.innerText=data.articles[i].title;
            box[i].appendChild(p1);
            p1.classList.add("p1");
            let p2=document.createElement("p");
            p2.innerText=data.articles[i].description+"...."
            box[i].appendChild(p2)
            p2.classList.add("p2")
            let p3=document.createElement("p")
            p3.innerHTML=`Read full article <div class="arrow"><span class="material-symbols-outlined">arrow_right_alt</span>`
            box[i].appendChild(p3);
            p3.classList.add("p3");
    }}catch(err){
        console.log("error",err);
    }
}
fetchNews(url1);









