function czas(){
    let data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    
    let rok = data.getFullYear();
    let miesiac = data.getMonth() + 1;
    let dzien = data.getDate();

    if(s.toString().length<2){
        s="0"+s;
    }
    if(m.toString().length<2){
        m="0"+m;
    }
    if(h.toString().length<2){
        h="0"+h;
    }
    console.log(h + " " + m + " " + s +" "+ rok + " " + miesiac + " " + dzien);
    console.log("siema");
    
    document.querySelector("#czas"). innerHTML = "Czas: " + h + ":" + m + ":" + s + " " + dzien + "." + miesiac + "." + rok;
}

setInterval(czas,1000);

// Dodanie cienia do navbara po przewinięciu strony
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }
});
function otworzDane(){
    console.log("czarnuch");
        var daneDokumentu = document.getElementById('DaneDokumentu');
        var calaStrona = document.querySelector('#mainik');
        daneDokumentu.classList.toggle('show');
        calaStrona.classList.toggle('ciemno');
}

function zamknijDane(){
        var daneDokumentu = document.getElementById('DaneDokumentu');
        var calaStrona = document.querySelector('#mainik');
        daneDokumentu.classList.toggle('show');
        calaStrona.classList.toggle('ciemno');
}


function pokazDaneMDowod(){
    var daneDokumentu = document.getElementById('DaneDokumentu');
        var originalContent = daneDokumentu.innerHTML;

        daneDokumentu.innerHTML = `
        <div id="div-1">
            <h3 id="h3-1">Dane dowodu osobistego</h3>
            <div id="daneDowoduOsobistego">
                <p class="p-1">Seria i numer</p>
                <h2 class="h2-1" id="h22">AMW074801</h2>
                <p class="p-1">Organ wydający</p>
                <h2 class="h2-1">PREZYDENT MIASTA GDAŃSK</h2>
                <p class="p-1">Termin ważności</p>
                <h2 class="h2-1">2034-06-12</h2>
                <p class="p-1">Data wydania</p>
                <h2 class="h2-1">2024-06-12</h2>
            </div>
            <button id="powrot">Wróc</button>
        <div>
        `;

        document.getElementById('powrot').addEventListener('click', function() {
            daneDokumentu.innerHTML = originalContent;
            addEventListeners(); // Ponownie dodaj event listenery po przywróceniu zawartości
        });
}

function pokazDane(){
    var daneDokumentu = document.getElementById('DaneDokumentu');
        var originalContent = daneDokumentu.innerHTML;

        daneDokumentu.innerHTML = `
        <div id="div-1">
            <h3 id="h3-1">Dane dowodu osobistego</h3>
            <div id="daneDowoduOsobistego">
                <p class="p-1">Seria i numer</p>
                <h2 class="h2-1" id="h22">AMW074801</h2>
                <p class="p-1">Organ wydający</p>
                <h2 class="h2-1">PREZYDENT MIASTA GDAŃSK</h2>
                <p class="p-1">Termin ważności</p>
                <h2 class="h2-1">2034-06-12</h2>
                <p class="p-1">Data wydania</p>
                <h2 class="h2-1">2024-06-12</h2>
            </div>
            <button id="powrot">Wróc</button>
        <div>
        `;

        document.getElementById('powrot').addEventListener('click', function() {
            daneDokumentu.innerHTML = originalContent;
            addEventListeners(); // Ponownie dodaj event listenery po przywróceniu zawartości
        });
};

function twojeDodatkoweDane(){
    var dodatkoweDaneDiv = document.getElementById('dodatkoweDane');
    dodatkoweDaneDiv.classList.toggle('show');
    document.getElementById('twojeDodatkoweDane').classList.toggle('obrot');
}

function potwierdzDane(){
    var potwierdzDane = document.getElementById('potwierdzDane');
    var calaStrona = document.querySelector('#mainik');
    potwierdzDane.classList.toggle('show');
    calaStrona.classList.toggle('ciemno');
}

function zamknijPotw(){
    var potwierdzDane = document.getElementById('potwierdzDane');
    var calaStrona = document.querySelector('#mainik');
    potwierdzDane.classList.toggle('show');
    calaStrona.classList.toggle('ciemno');
}