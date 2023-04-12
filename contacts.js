const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')

const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

const filePath = './data/contacts.json'
if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, '[]', 'utf-8')
}

const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json','utf-8');
    const contacts = JSON.parse(file);
    return contacts;
}

const saveContact = (nama, email, nomor) => {
    const contact = {
        nama,
        nomor,
        email
    };

    const contacts = loadContact();

    //cek duplikasi
    const isDuplicate = contacts.find((contact) => contact.nama === nama);
    if(isDuplicate){
        console.log(chalk.red.inverse.bold('Kontak sudah terdaftar, gunakan nama lain'));
        return false;
    }

    //cek email
    if(email){
        if(!validator.isEmail(email)){
            console.log(chalk.red.inverse.bold('Email tidak valid'));
            return false;
        }
    }
    
    contacts.push(contact);
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log(chalk.green.inverse.bold(`${nama} dengan nomor ${nomor} berhasil ditambahkan ke kontak`))
}

const editContact = (nama, email, nomor) => {
    const updateContact = [{
        nama,
        nomor,
        email,
    }]

    const contacts = loadContact();


    //cek email baru
    if(email){
        if(!validator.isEmail(email)){
            console.log(chalk.red.inverse.bold('Email tidak valid'));
            return false;
        }
    }

    //cek nama
    const isExist = contacts.find((contact) => contact.nama === nama);
    if(!isExist){
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
        return false;
        
    }
        contacts.push(updateContact);
        fs.writeFileSync('data/contacts.json', JSON.stringify(updateContact));
        console.log(chalk.green.inverse.bold(`${nama} dengan nomor ${nomor} berhasil diupdate pada kontak`))
    
}

const listContact = () => {
    const contacts = loadContact();
    console.log(chalk.cyan.inverse.bold('Daftar Kontak'))
    contacts.forEach((contact, i) => {
        console.log(`${i+1}. ${contact.nama} - ${contact.nomor}`)
    })
}

const detailContact = (nama) => {
    const contacts = loadContact();
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())
    
    if(!contact){
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
        return false;
    }
    console.log(chalk.cyan.inverse.bold('Daftar Kontak'))
    if(contact.email){
        console.log(contact.email);
    }
    console.log(contact.nama);
    console.log(contact.nomor);

}

const deleteContact = (nama) => {
    const contacts = loadContact();
    const newContacts = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase())

    if(contacts.length === newContacts.length){
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan`));
        return false;
    }
    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));
    console.log(chalk.green.inverse.bold(`Data kontak ${nama} berhasil dihapus dari kontak`))
}

module.exports = {saveContact, listContact, detailContact, deleteContact, editContact}