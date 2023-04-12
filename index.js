const yargs = require('yargs')
const contacts = require("./contacts");

//menambahkan kontak baru
yargs.command({
    command: 'add',
    describe: 'Menambahkan kontak baru',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Alamat email',
            demandOption: false,
            type: 'string',
        },
        nomor: {
            describe: 'Nomor telepon',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        const contact = {
            nama: argv.nama,
            email: argv.email,
            nomor: argv.nomor,
        }
        contacts.saveContact(argv.nama, argv.email, argv.nomor);
    }
}).demandCommand();

//menampilkan daftar nama dan nomor kontak
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama dan nomor pada kontak',
    handler() {
        contacts.listContact();
    }
})

//menampilkan detail pada kontak berdasarkan nama
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail kontak berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contacts.detailContact(argv.nama);
    }
})

//menghapus kontak berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus kontak berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contacts.deleteContact(argv.nama);
    }
})

//mengupdate kontak
yargs.command({
    command: 'update',
    describe: 'Mengupdate kontak baru',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Alamat email',
            demandOption: false,
            type: 'string',
        },
        nomor: {
            describe: 'Nomor telepon',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        const contact = {
            nama: argv.nama,
            email: argv.email,
            nomor: argv.nomor,
        }
        contacts.editContact(argv.nama, argv.email, argv.nomor);
    }
})

yargs.parse();

