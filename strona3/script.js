f = document.getElementById("form");
w = document.getElementById("wypluwacz");
t = document.getElementById("tabela");
b = "<br>";

rexn = /^[a-zA-Z]+$/;
rexkp = /^\d{2}-\d{3}$/;
rexll = /^[a-zA-Z0-9\s]+$/;
rextc = /^\d+$/;

f.name.addEventListener("change", function(e) { walid(this); });
f.dob.addEventListener("change", function(e) { data(this); pesel(this) });
f.surname.addEventListener("change", function(e) { walid(this); });
f.miasto.addEventListener("change", function(e) { walid2(this); });
f.adres.addEventListener("change", function(e) { walid2(this); });
f.kodp.addEventListener("change", function(e) { walid3(this); });
f.pesel.addEventListener("change", function(e) { walid4(this); });
f.dob.addEventListener("change", function(e) { walid5(this); });
f.gender.addEventListener("change", function(e) { walid5(this); });


function data(d) {
    dzis = new Date();
    datka = new Date(d.value);
    ileMineloDni = Math.floor((dzis - datka) / (1000*60*60*24));
    ileMineloMiesiecy = Math.floor(ileMineloDni/30.44);
    ileMineloLat = Math.floor(ileMineloMiesiecy/12);
   // tabela(d,ileMineloMiesiecy);
}

function pesel(d){
    k = d.value;
    ck = Array(1,3,7,9,1,3,7,9,1,3);
    sk =0;
    skb = 0;
    peselo = k[2]+k[3]+k[5]+k[6]+k[8]+k[9];
    peselo +=Math.floor(Math.random()*1000)+1000 ;
    for(i=0;i< ck.length;i++){
        sk = ck[i] * (peselo[i]*1);

        if(sk >10) {  sk = sk%10; } 
        skb +=  sk;
     }
    
     peselo +=10 -skb%10;
     tabela(d,peselo);
}
function tabela(d,z){
    wiersz= t.insertRow(-1);
    w1 = wiersz.insertCell(0);
    w1.innerHTML = d.name;
    w2 = wiersz.insertCell(1);
    w2.innerHTML = d.value;
    w3= wiersz.insertCell(2);
    w3.innerHTML = z;
}
function walid(v) {
    if(v.value.length >2 && rexn.test(v.value)) {
 w.innerHTML += v.name + ":";
 w.innerHTML += v.value +b;
 v.style.color="#fff";
 v.style.backgroundColor= "green";
    } else {
        v.style.color="#fff";
        v.style.backgroundColor= "red";
    }
} 

function walid2(x) {
    if(x.value.length >1 && rexll.test(x.value)) {
 w.innerHTML += x.name + ":";
 w.innerHTML += x.value +b;
 x.style.color="white";
 x.style.backgroundColor= "green";
    } else {
        x.style.color="#fff";
        x.style.backgroundColor= "red";
    }
} 
function walid3(z) {
    if(z.value.length >5 && rexkp.test(z.value)){
 w.innerHTML += z.name + ":";
 w.innerHTML += z.value +b;
 z.style.color="white";
 z.style.backgroundColor= "green";
    } else {
        z.style.color="#fff";
        z.style.backgroundColor= "red";
    }
} 
function walid4(u) {
    if(u.value.length ==11 && rextc.test(u.value)){
 w.innerHTML += u.name + ":";
 w.innerHTML += u.value +b;
 u.style.color="white";
 u.style.backgroundColor= "green";
    } else {
        u.style.color="#fff";
        u.style.backgroundColor= "red";
    }
} 
function walid5(zz) {
    if(zz.value.length >0){
 w.innerHTML += zz.name + ":";
 w.innerHTML += zz.value +b;
 zz.style.color="white";
 zz.style.backgroundColor= "green";
    } else {
        zz.style.color="#fff";
        zz.style.backgroundColor= "red";
    }
} 