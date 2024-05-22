
const turkishAlphabet = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";

function caesarCipher(text, shift, decode = false) {
    if (decode) {
        shift = -shift;
    } /* 1- caesaerCipher funci text inputu, kaydırma degeri ve default olarak false degerine sahip decode funci dahil olmak üzere 3 tane parametre alıyor. 
       
        2- if (decode) blogumuz decode parametresi true ise shift degerini negatif yapıyor. 

    */
    return text.split('').map(char => {
        const isLower = char === char.toLowerCase();
        const upperChar = char.toUpperCase();
        const index = turkishAlphabet.indexOf(upperChar);
        if (index === -1) {
            return char;
        }
        let newIndex = (index + shift) % turkishAlphabet.length;
        if (newIndex < 0) {
            newIndex += turkishAlphabet.length;
        }
        const newChar = turkishAlphabet[newIndex];
        return isLower ? newChar.toLowerCase() : newChar;
    }).join('');
}

/*  3- return text.split text inputu olarak girilmis metni karakterlere ayırıyor ve map ile bu charları işliyor. upperChar isLower constları karakterleri metinde küçük harf/büyük harf girilen karşılıklarına göre küçük veya büyük harfli yapıyor.

    4- const index yapımız karakterin türkçe alfabesindeki indexini tutuyor. index degeri -1; yani alfabede mevcut olmayan negatif bir deger ise, karakteri oldugu gibi döndürüyor.

    5- let newIndex yapımız girdigimiz indeximizi kaydırır ve yeni indeximizi tutar. % operatoru indexi alfabe uzunlugu ile sınırlar. hemen altındaki if blogumuz ise negatif bir index olusması durumunda alfabedeki pozitif karsılıgına cevirir.

    6- line23 const newChar degerimiz yeni indeximizin alfabedeki karşılıgını tutar. hemen atlındaki ternary opumuz ise bu degerimizi (newChar) eger orjinal charımız küçük harfliyse küçük harfe çevirir. 

    7- line 25 .join methodumuz return valuemuzdaki işlenmiş tüm karakterleri birleştirir. yani çözülmüş metni döndürür.
*/

function encode() {
    const text = document.getElementById("text").value;
    const shift = parseInt(document.getElementById("shift").value, 10);
    const result = caesarCipher(text, shift);
    document.getElementById("result").innerText = result;
}

/*
    8- line40-41 const text ve shift yapılarımız html idsi ile user input alır.
        line 42 result yapısı ceaserCipher funcini cagırır ve metini şifreler.
        yine html idsi kullanılarak sonuç yazdırılır, line 43.

*/

function decode() {
    const text = document.getElementById("text").value;
    const shift = parseInt(document.getElementById("shift").value, 10);
    const result = caesarCipher(text, shift, true);
    document.getElementById("result").innerText = result;
}

/*
    9- encode funci ile tamamen aynı calısıyor. tek farkları caesarCipher fonksiyonundaki decode = false parametremiz cipherimizin default 
        davranışının encode olmasını saglıyor. cipher fonksiyonumuzun basındaki
        if blogumuz ise eger decodelamayı secersek shift yanı kaydırma
        degerimizi negatif yapıyor ki decodelayabilelim. line 56daki 
        ifademiz ile cipher funcındaki default olarak false olan decode 
        degerimizi/funcımızı trueya ceviriyor ve htmlde bulunan onclick 
        eventi ile decode funcımızı cagırmamızı saglıyor.
*/
