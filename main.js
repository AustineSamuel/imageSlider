function imageSlider(imgs=[]){
if(imgs.length<1){
alert("Image slider has no image to view pls add images");
return
}
  //make append my code to your html file
const html=  document.createElement("div");
 html.innerHTML=`  
 <div id="imageContainer">
   <button class="close">
 x
 </button>
   <img id="view"><br>
   <div id="imageList">
   </div>
 </div>`
 //add my css you can edit it if you want or just copy it to your main css file
const css=document.createElement("link")
 css.id="slideCss"
 css.href="http://austinesamuelcodes.000webhostapp.com/codes/style.css"
 css.rel="stylesheet"
 document.querySelector("head").appendChild(css);
 document.querySelector("body").appendChild(html);
 
  let view=document.querySelector("#imageContainer #view")//the view imag
  imgs.forEach((e,i)=>{
    let img=document.createElement("img")
   img.src=e.src;///create ing element
   img.setAttribute("index",i);
    document.querySelector("#imageContainer #imageList").appendChild(img)//append it to the Container
  });///image Are ready
  
  
  //get image list
  let index=0;
  const imageList=document.querySelectorAll("#imageContainer #imageList img");
  
  imageList.forEach((e,i)=>{
  imageList[i].addEventListener("click",(e)=>{//check click of each image
  index=parseInt(e.target.getAttribute("index"))
  showImage();
  })
  });
  
  function showImage(){
    imageList.forEach((e,i)=>{imageList[i].setAttribute("style","border: none; width:; height:;")
    })
  imageList[index].setAttribute("style","width:60px; height:70px;border:2px solid white;")//mark img element
  view.src=imgs[index]!=undefined ? imgs[index].src:""//set the first image
 view.style.transitionDuration="800ms";
  view.style.transform = "none";//restore image width
  view.style.width = "100%";
  }
  showImage()
  
  function next(){//function that increment index
    if(index<imgs.length -1){
      index++
    }
    else{
      index=0;
    }
  }
  function prev(){
    if (index > -1) {
      index-=1
    }
    else {
      index=index+1
  }
  }
  
  //get point of touchs only x cor ordinan
  let touchPoint={
    start: undefined,
    move:undefined,
    end: undefined
  }
  view.addEventListener("touchstart",(e)=>{
    touchPoint.start=e.touchse[0].clientX
  })
  
  view.addEventListener("touchmove",(e)=>{
    touchPoint.move=e.touches[0].clientX/2
  slide();
  })
  
  view.addEventListener("touchend", (e) => {
   // alert("0")
    endSlide();
   // touchPoint.end= e.touches[0].clientX
  })//touch gotten end 
  
function slide(){//slide image
view.style.transitionDuration="0ms";
  view.style.transform="rotateY("+touchPoint.move+"deg)";
//  view.style.marginLeft=touchPoint.move+"px"
}
function endSlide(){
//  alert("endSlide")
  if(touchPoint.move+100>(screen.width/2)){
prev()
   // alert("prev"+index)
  }
  else if(touchPoint.move-100<(screen.width/2)){
            next()
      //  alert("next" + index)
  }
showImage();
}//end endSlide function

document.querySelector("#imageContainer .close").addEventListener("click",()=>{//close slider and remove from Dom tree
document.querySelector("head").removeChild(document.querySelector("#slideCss"));
document.querySelector("#imageContainer").remove();
})
}//end slide function