let res = fetch("https://restcountries.com/v3.1/all");
res.then((data) => data.json())
  .then((data1) => coo(data1));



function coo(obj) {
  for (var i = 0; i <= obj.length; i++) {

    // obj.forEach((element,i) => {
    //   console.log(element[i])




    console.log(obj[i]);
    
    var div = document.createElement("div");









    div.innerHTML =


    `
    <div class="container">
    <div class="card " >
        <div class="header"><b>${obj[i].name.common}</b></div>
        <img class="cards-img" src="${obj[i].flags.png}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <h5 class="card-text-la">Lattitude:${obj[i].latlng[0]}</h5>
            <h5 class="card-text-lo">Lattitude:${obj[i].latlng[1]}</h5>
            <h5 class="card-text">capital:${obj[i].capital}</h5>
            <h5 class="card-text">Region:${obj[i].region}</h5>
            <h5 class="card-text">Country code:${obj[i].ccn3}</h5>
            <a href="#" class="btn btn-primary"><button onclick=c()>Click for Weather</button></a>
         </div>
      </div >
      </div>
    
      `

  
   document.body.append(div);

   










  async function wea() {
    let re=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${obj[i].latlng[0]}&lon=${obj[i].latlng[1]}&appid==d52bc86b712ed53a8ea0ade304a0d142`);
  //  let re= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=d52bc86b712ed53a8ea0ade304a0d142`)

   let resu = await re.json();
  console.log(resu);
  
   

   }
  wea()
  }


}
  

//  function c(){
//   async function wea() {
//     let re=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${obj[i].latlng[0]}&lon=${obj[i].latlng[1]}&appid==d52bc86b712ed53a8ea0ade304a0d142`);
  

//    let resu = await re.json();
//   console.log(resu);
//   console.log(resu.main)
  

  
 
//    let la=document.getElementById("card-text-la").value;
//    let lo=document.getElementById("card-text-lo").value;

//   prompt(`
//   the latitude:${la}
//   the longitute:${lo}
//   `);
//   return prompt;
// }
 
// c()
