class Product {
    constructor(id, name, price, quantity){
        this.id = id,
        this.name = name,
        this.price = price,
        this.quantity = quantity
    }
}
const product = {
    products : [],
    index : 0,
    addProduct(name, price, quantity){
        const newProduct = new Product(++this.index, name, price, quantity)
        return this.products.push(newProduct)
    },
    viewAllProducts(){
         if(this.products.length === 0){
            console.log("There are no products")
        }
        for(let i = 0; i < this.products.length; i++){
            console.log(`ID: ${this.products[i].id} \n Name: ${this.products[i].name} \n Phone Number: ${this.products[i].price} \n Quantity: ${this.products[i].quantity}`)
        }
    },
    updateQuantity(id, newQuantity){
       quantity = console.log(`Product at ID: ${this.products.id} now has the quantity of: ${this.products.newQuantity} `)
    },
    removeProduct(id){
        this.products = this.products.filter(product => product.id !== id )
        console.log(this.products)
    }
}
product.addProduct("water" , "1000" , "5L");
product.addProduct("juice" , "4000" , "2L");
product.addProduct("milk shake" , "7000" , "1L");
product.addProduct("protein shake" , "5000" , "3L");
product.viewAllProducts();
product.updateQuantity(1, "20L")
