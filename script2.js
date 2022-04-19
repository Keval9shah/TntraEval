window.onload = function () {
  var url = document.location.href,
      params = url.split('?')[1].split('&'),
      data = {}, tmp;
  for (var i = 0, l = params.length; i < l; i++) {
       tmp = params[i].split('=');
       data[tmp[0]] = tmp[1];
  }
  // decodeURIComponent(document.location.href)
  keys=Object.keys(data);
  for (let i=0;i<4;i++) {
    document.getElementById(keys[i]).innerHTML =decodeURIComponent(data[keys[i]]);
  }
  console.log(keys.length,data)
  var trString="";
  if(keys.length>4){
    for(let i=4;i<keys.length;i++){
      trString+="<tr><th>"+keys[i]+"</th><td>"+decodeURIComponent(data[keys[i]])+"</td></tr>";
    }
  }
  document.querySelector("tbody").innerHTML+=trString;
  // for (let i = 0; i < data.; i++) {
  //   const element = array[i];
    
  // }
  // document.getElementById('here').innerHTML +=data.name;
}