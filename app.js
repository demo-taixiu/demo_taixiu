let balance = parseInt(localStorage.balance || 1000000);
let vip = parseInt(localStorage.vip || 1);
let username = localStorage.username || "UserDemo";

function save(){
    localStorage.balance = balance;
    localStorage.vip = vip;
    localStorage.username = username;
}

function updateHeader(){
    const bal = document.getElementById("balance");
    const vipEl = document.getElementById("vip");
    const userEl = document.getElementById("username");

    if(bal) bal.innerText = balance.toLocaleString();
    if(vipEl) vipEl.innerText = vip;
    if(userEl) userEl.innerText = username;
}

function nap(){
    let amt = parseInt(prompt("Nhập số tiền nạp"));
    if(amt>0){
        balance+=amt;
        vip=Math.floor(balance/2000000)+1;
        save();
        updateHeader();
    }
}

function rut(){
    let amt = parseInt(prompt("Nhập số tiền rút"));
    if(amt>0 && balance>=amt){
        balance-=amt;
        vip=Math.floor(balance/2000000)+1;
        save();
        updateHeader();
    }
}

function playDemo(){
    alert("🎮 Demo game – chưa kết nối server");
}

save();
