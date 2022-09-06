// model dememizin sebebi, model bizim componentlerimizde kullanıcıya gösterdiğimiz veri tiplerin veya kullanıcıdan alıp apiye gönderdiğimiz veri tiplerine verdiğimiz genel isim
export default class User {
    constructor(id, firstName, lastName, city,age) {
        this.id = id   //this demek bu class demek. this'de id oluştur onun değeri de constructor'a gönderilen id'ye eşit olsun.
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.age = age
    }
}