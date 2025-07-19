

 let card=document.querySelectorAll(".card");
 let close=document.getElementById("close");
 let slide=document.querySelectorAll(".patientReview");
 let submit=document.getElementById("submit");
 
 let count=0;

 //doctor
card.forEach(function(cards){
    cards.addEventListener("click",function(){
        console.log(cards);
         document.querySelector(".detail").style.display="block"
        document.querySelector(".content").innerHTML=`
        <img src=${cards.firstElementChild.src} alt="">
        <div class="contentText">
            <h1>Doctor</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, nesciunt ad et harum nemo reprehenderit vero odit porro at voluptatibus id similique itaque dignissimos quis praesentium, ipsum excepturi quibusdam accusamus.</p>
        </div>`

        close.addEventListener("click",function(){
            document.querySelector(".detail").style.display="none"
        })
    })
})

//slide patient
slide.forEach(function(slides,index){
    slides.style.left=`${index*100}%`
})

function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count*100}%)`
    })
}
setInterval(function(){
   count++;
   if(count == slide.length){
    count=0; 
}
myFun()
},2000)

//form submit button
submit.addEventListener("click",function(){
    let name =document.getElementById("name");
    let number =document.getElementById("number");
    let date =document.getElementById("date");
   
    if(name.value =="" && number.value=="" && date.value){
        alert("Enter the details")
    }else{
        alert("Form submitted successfully")
    }
})