let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]

// map
console.log("<ul>")
cart.map(product=>{       //map --> arrayin içindeki elemanları tek tek dolaşmamızı sağlar. // product -> her bir değerin takma adı
    console.log("<li>"+product.productName + " : " 
    + product.unitPrice * product.quantity+"</li>")
})
console.log("</ul>")


// reduce
let total0 = cart.reduce((acc,product)=>acc+ product.unitPrice, 0)//acc -> accumulator // toplam hesaplamak için // 0-> toplamaya kaçtan başayayım. acc'ın ilk değeridir.
//product'ın unitPrice'ını accumulator'e ekliyor. (0 + 4000 + 30 + ... + 150)
let total = cart.reduce((acc,product)=>acc+ product.unitPrice * product.quantity,0)  // product'ın unitPrice ve quantity çarpımlarını yapıp toplam değeri veriyor.
console.log(total)


// filter
let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2)



// add reference type
function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}

addToCart(cart)         // Referans tip olduğu için burada aslında cartın adresini gönderiyoruz.
console.log(cart)      // Adresine atama yapılabildi ve ürün eklendi.


//add value type
let sayi = 10
function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)       // Değer tip olduğu için değer değişmedi. 10 atanmıştı ve 10 yazdırdı.
