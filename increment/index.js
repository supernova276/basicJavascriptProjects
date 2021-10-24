const counterInc=document.querySelectorAll('.counter');//to select all the counter classes we have used queryselectall

counterInc.forEach((counter)=>{
   // console.log(counter);
  counter.innerHTML=0;

  const updateCounter=()=>{
      const targetVal= +counter.getAttribute('data-target');//to get the data target attribute of the counter
      //here we have used this + because as it converts the initial value of counter from a string to number
      //console.log(targetVal);
      const startingCount=Number(counter.innerHTML);
      const increment=targetVal/100;

      if(startingCount<targetVal){
          counter.innerHTML=`${Math.round(startingCount + increment)}`;
          setTimeout(updateCounter,10);
      }
      else{
          counter.innerHTML=targetVal;
      }
  }
  updateCounter();

})