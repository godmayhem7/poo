let spanNumbers = document.querySelectorAll("span").length-1

for(let i=0; i<spanNumbers; i++){

    document.querySelectorAll("span")[i].addEventListener("mouseover",function(){
        document.querySelectorAll("span")[i].classList.add("wi");

       })


    document.querySelectorAll("span")[i].addEventListener("mouseleave",function(){
        document.querySelectorAll("span")[i].classList.remove("wi");
        
            document.querySelectorAll("span")[i].classList.add("zoo");
            setTimeout(() => {
                document.querySelectorAll("span")[i].classList.remove("zoo");
             },300);
            
              
        })


    document.querySelectorAll("span")[i].addEventListener("click",function(){
        
        if (this.innerHTML==="1"){
            document.querySelector(".sp1").classList.toggle("sub-classlist")
            document.querySelector(".sp2").classList.remove("sub-classlist")
            document.querySelector(".sp3").classList.remove("sub-classlist")
            document.querySelector(".sp4").classList.remove("sub-classlist")
            document.querySelector(".sp5").classList.remove("sub-classlist")  
         
        }else if(this.innerHTML==="2"){
         document.querySelector(".sp2").classList.toggle("sub-classlist")
            document.querySelector(".sp1").classList.remove("sub-classlist")
            document.querySelector(".sp3").classList.remove("sub-classlist")
            document.querySelector(".sp4").classList.remove("sub-classlist")
            document.querySelector(".sp5").classList.remove("sub-classlist")  
      
        }else if(this.innerHTML==="3"){
         document.querySelector(".sp3").classList.toggle("sub-classlist")
            document.querySelector(".sp1").classList.remove("sub-classlist")
            document.querySelector(".sp2").classList.remove("sub-classlist")
            document.querySelector(".sp4").classList.remove("sub-classlist")
            document.querySelector(".sp5").classList.remove("sub-classlist") 
         
        }else if(this.innerHTML==="4"){
         document.querySelector(".sp4").classList.toggle("sub-classlist")
            document.querySelector(".sp1").classList.remove("sub-classlist")
            document.querySelector(".sp2").classList.remove("sub-classlist")
            document.querySelector(".sp3").classList.remove("sub-classlist")
            document.querySelector(".sp5").classList.remove("sub-classlist")   
         
        }else if(this.innerHTML==="5"){
         document.querySelector(".sp5").classList.toggle("sub-classlist")
            document.querySelector(".sp1").classList.remove("sub-classlist")
            document.querySelector(".sp2").classList.remove("sub-classlist")
            document.querySelector(".sp3").classList.remove("sub-classlist")
            document.querySelector(".sp4").classList.remove("sub-classlist")
    
        }
        let ub = document.querySelector(".output");
        ub.innerText = this.innerHTML 

    })}
    

document.querySelector(".btn").addEventListener("click",()=>{
    document.querySelector(".main").setAttribute("style","display:none")
    document.querySelector(".main2").classList.remove("lin")
})




