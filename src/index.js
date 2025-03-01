const path = "https://api.whatsapp.com/send?phone={fone}";
const phone = "{fone}";
const msgPlace = "{messege}";
const msg = "&text={messege}";
const btn = document.getElementById("btn");
const btnGen = document.getElementById("btn-gen");
const messege = document.getElementById("input-msg");
const num = document.getElementById("num");
const ddi = document.getElementById("ddi");
const zoneCode = document.getElementById("ddd");
const alert = document.getElementById("alert");
const showLink = document.getElementById("show-link");

ddi.value = 55;
zoneCode.value = 61;
messege.value = "";
num.addEventListener('input',(event)=>{
  
  let phoneValue = num.value.replace(/\D/g, '');
  if(phoneValue.length > 10){
    phoneValue = phoneValue.slice(0,-1)
  }
  if(phoneValue.length > 5)
    phoneValue = `${phoneValue.slice(0,5)}-${phoneValue.slice(5)}`
  num.value = phoneValue
})
const getPath = () => {
  alert.innerHTML = "";
  let _path = path;
  let numero = "+";
  let paisCode = ddi.value;
  let zone = zoneCode.value;
  let textMessge = messege.value;
  let phoneNumber = num.value.replace(/\D/g, '');
  if (phoneNumber == "") {
    let el = document.createElement("p");
    el.innerText = "fill phone number";
    alert.appendChild(el);
  }
  if (paisCode == "") {
    let el = document.createElement("p");
    el.innerText = " fill country code";
    alert.appendChild(el);
  }
  if (zone == "") {
    let el = document.createElement("p");
    el.innerText = " fill zone code";
    alert.appendChild(el);
  }
  if (textMessge != "") {
    _path = _path + msg;
    _path = _path.replace(msgPlace, textMessge);
  }
  if (phoneNumber == "" || paisCode == "" || zone == "") return;
  numero += paisCode + zone + phoneNumber;
  return _path.replace(phone, numero);
};
btnGen.addEventListener("click", (event) => {
  showLink.innerHTML = "Building....";
  const link = document.createElement('a')
  const path = getPath();
  link.setAttribute('href',path)
  link.setAttribute('target',"_blanck")
  link.innerText = `${path}`
  showLink.innerText = "Link: "
  showLink.appendChild(link) 
});
btn.addEventListener("click", (event) => {
  const path = getPath();
  window.open(path);
});

messege.addEventListener("input", (event) => {
  let txt = messege.value;
  if (txt.length > 120) txt = txt.substring(0, 120);
  setTimeout(() => (messege.value = txt), 50);
});
