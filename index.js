


var siteName= document.getElementById('ur');
var urlSite= document.getElementById('url')
var tableeu= document.getElementById('rwww')
var valid= document.getElementById('alertM');




var sitesList =[];

    if (localStorage.getItem('nameOflink')!=null) {

        sitesList = JSON.parse(localStorage.getItem('nameOflink'));
        display()
        
    }
    else{
        sitesList=[]
    }
    

function addsite(){

  if (validateURL() == true) {

    var siteInfo={

      name: siteName.value,
      url: urlSite.value

  }

  sitesList.push(siteInfo);
  console.log(sitesList);
  clear();
  display();
  localStorage.setItem('nameOflink', JSON.stringify(sitesList));
    
  }

   
}


function clear(){
    siteName.value=null;
    urlSite.value=null;
    
}


function display() {

    var cartona='';

    for(var i=0 ; i<sitesList.length;i++){
        cartona+=
        
        `
        
       
       <div class="col-sm-12 ps-4">
       <tr>
       <td></td>
       <td class="w-25">${i}</td>
       <td class="w-25">${sitesList[i].name}</td>
       <td class="w-25"> <a href="${sitesList[i].url}" class="btn btn-success" target="_blank"> <i class="fa-solid fa-eye"></i>  Site visit</a></td>       </td>
       <td class="w-25"><button type="button" class="btn btn-danger" onclick="deletitems(${i})"> <i class="fa-solid fa-trash   "></i>  Delete</button></td>
       
     </tr>
     
     <div/>
        
        `
    } 
    tableeu.innerHTML=cartona;

    
}


function visitSite(url) {
    location.href = url;
  }


  function deletitems(deleted) {

    sitesList.splice(deleted,1)
    localStorage.setItem('nameOflink',JSON.stringify(sitesList))
    display()
    console.log(sitesList);
    
  }


  function validateURL() {


    var text= url.value;
  const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

  if (regex.test(text)== true) {
    urlSite.classList.add("is-valid")
    urlSite.classList.remove("is-invalid")
    valid.classList.add("d-none")
    return true;
    
    

  } else {
  urlSite.classList.add("is-invalid")
  urlSite.classList.remove("is-valid")
  valid.classList.remove("d-none")
  return false;
  }
}



function validateInput() {
 




  var num= siteName.value;
  // Regular expression for validating a URL
  const regex = /^[a-zA-Z0-9_-]{3,}$/;

  // Check if the URL matches the regular expression
  if (regex.test(num)== true) {
    siteName.classList.add("is-valid")
    siteName.classList.remove("is-invalid")
    num.classList.add("d-none")
    return true;
    
    

  } else {
  siteName.classList.add("is-invalid")
  siteName.classList.remove("is-valid")
  num.classList.remove("d-none")
  return false;
  }
}