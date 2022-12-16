var path = "https://api.whatsapp.com/send?&phone={fone}";
var phone = "{fone}";
var msgPlace = "{messege}";
var msg = "&text={messege}";
var btn = document.getElementById("btn");
const btnGen = document.getElementById("btn-gen");
var messege = document.getElementById("input-msg");
var num = document.getElementById("num");
var ddi = document.getElementById("ddi");
var zoneCode = document.getElementById("ddd");
var alert = document.getElementById("alert");
const showLink = document.getElementById("show-link");

ddi.value = 55;
zoneCode.value = 11;
messege.value = "";
const getPath = () => {
  alert.innerHTML = "";
  let _path = path;
  let numero = "+";
  let paisCode = ddi.value;
  let zone = zoneCode.value;
  let textMessge = messege.value;
  let phoneNumber = num.value;
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
  const path = getPath();
  showLink.innerHTML = `Link: ${path}`;
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
