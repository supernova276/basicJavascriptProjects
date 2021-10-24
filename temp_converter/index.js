const calculateTemp=()=>{

    const numberTemp=document.getElementById('temp').value;
    //console.log(numberTemp); //this will give the vlaue enetered by user

   const tempSelected=document.getElementById('temp_diff');
   const valueTemp=tempSelected.options[tempSelected.selectedIndex].value;
   console.log(valueTemp);


   const celToFah=(cel)=>{
       let fahrenite=Math.round((cel*9/5)+32);
       return fahrenite;
   }

   const fahToCel=(fah)=>{
       let celcius=Math.round((fah-32)*5/9);
       return celcius;
   }

   let result;

   if(valueTemp=="cel"){
       result=celToFah(numberTemp);
       document.getElementById('resCont').innerHTML=`=${result}*fahrenite`;
      // console.log(result);
   }
   else{
       if(valueTemp=="fah"){
           result=fahToCel(numberTemp);
           document.getElementById('resCont').innerHTML=`=${result}*celcius`;
          // console.log(result);
       }
   }
}
