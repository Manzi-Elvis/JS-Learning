class Contact{
    constructor(id, name, phoneNbr, email){
        this.id = id
        this.name = name
        this.phoneNbr = phoneNbr
        this.email = email
    }
}
const ContactBook = {
    contacts : [],
    index: 0,
    addContact(name, phoneNbr, email){
        const newContact = new Contact(++this.index, name, phoneNbr, email)
        return this.contacts.push(newContact)
    },
    viewAllContacts(){
        if(this.contacts.length === 0){
            console.log("There are no contacts")
        }
        for(let i = 0; i < this.contacts.length; i++){
            console.log(`ID: ${this.contacts[i].id} \n Name: ${this.contacts[i].name} \n Phone Number: ${this.contacts[i].phoneNbr} \n Email: ${this.contacts[i].email}`)
        }
    },
    deleteContact(id){
        this.contacts = this.contacts.filter(contact => contact.id !== id )
        console.log(this.contacts)
    },
}
console.log(ContactBook.addContact("Elvis", "0791955", "melvis@..."))
console.log(ContactBook.addContact("MRE", "0791955", "mrelvis@..."))
console.log(ContactBook.addContact("Manzi", "0788855", "manzi@..."))
console.log(ContactBook.addContact("Elvis", "078365", "elvis@..."))

ContactBook.viewAllContacts()
ContactBook.deleteContact(3)