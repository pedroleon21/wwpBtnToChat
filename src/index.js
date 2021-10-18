var path = "https://api.whatsapp.com/send?&phone={fone}";
var phone = '{fone}';
var msgPlace = '{messege}'
var msg = '&text={messege}';
var btn = document.getElementById('btn');
var messege = document.getElementById('input-msg');
var num = document.getElementById('num');
var ddi = document.getElementById('ddi');
var zoneCode = document.getElementById('ddd');
var alert = document.getElementById('alert');

ddi.value = 55;
zoneCode.value = 11;
messege.value = '';

btn.addEventListener('click',(event)=>{
    alert.innerHTML = '';
    let numero = '+';
    let paisCode = ddi.value;
    let textMessge = messege.value;
    let phoneNumber =num.value;
    if (phoneNumber == '') {
        let el = document.createElement('p');
        el.innerText='fill phone number';
        alert.appendChild(el);
    }
    if(paisCode == ''){
        let el = document.createElement('p');
        console.log('aqui');
        el.innerText =' fill country code';
        alert.appendChild(el);
    }
    if (phoneNumber == '' || paisCode == '') return;
    numero += paisCode + phoneNumber;
    window.open(path.replace(phone,numero));
});