
//const degismez sabit kalacak,   html de id yi refer etmek icin getElementById() yazariz. parantez icine par yazariz

// iteratiron,  tekrarlamak demek, sen sinirlayincaya kadar.


//! eger kendimiz dakika girip eri sayim baslatacaksal asagidaki prompt lu ifadeyi gireriz.
let dakika=prompt("Lutfen dakika giriniz:");


//!  let dakika= 10 diye sabitlersek 10:00 dan baslar ve geriye gider.
// let dakika=10; 
let saniye=dakika * 60;

const myPar = document.getElementById("par");

//!burda sure frekansini ayarliyoruz. Fonksiyonun veya iterasyonun calisma suresini ayarlar. setinterval  icerisine iki eger alir. ilk olarak fonksiyon yazilr. sonrasinda itere edecegi sure yazilir. 
setInterval(myFunction,1000)

function myFunction(){
    let minutes =  Math.floor(saniye/60);

    //!math floor kullanma amacimiz her zaman dakikayi tam sayi olarak gostermek ve sayiyi her zaman aasgiya yuvarlamak. 

    let seconds = saniye%60;


    seconds = seconds<10  ? "0" + seconds : seconds;
    //! seconds eger 10 dan kucukse 0 stingiyle beraber second i  yazdir. eger yok egilse sadece bana second 9 yazdir. ONEMLI !!!!!!!


    minutes = minutes <10 ? "0" + minutes : minutes;

    myPar.innerHTML=`${minutes} : ${seconds}`;
    saniye--;

}
