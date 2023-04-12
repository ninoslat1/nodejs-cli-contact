# Description
Contact App using CLI made by NodeJS using Validator and Yargs

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing
```
git clone https://github.com/ninoslat1/nodejs-cli-contact.git
```
After the clone process success, now you need to install some package manager
#### Yargs
[Yargs](https://www.npmjs.com/package/yargs) is used for made some command in CLI
```
npm i yargs
```
#### Validator
[ValidatorJS](https://www.npmjs.com/package/validator) is used for validate email or number in contact app's data
```
npm install validator
```
#### Chalk
[Chalk](https://www.npmjs.com/package/chalk) is used for prettier the Node JS CLI
```
npm install chalk
```

## Run The Test
Run node index for help and command list section will appear
```
index add     Add new contact
index list    Show all name and phone number in contact
index detail  Show detail of contact based on name
index delete  Delete contact based on name
index update  Update the existing contact
```

#### Add
```
node index add --nama="John Doe" --email="johndoe@gmail.com" --nomor="08145678345"
```

The mandatory parameter is nama and nomor (the email parameter is optional) for execute the create command

#### List
```
node index list
```

#### Detail and Delete
```
node index detail --nama="John"
node index delete --nama="Doe"
```

For delete and show detail contact, just use nama parameter for execute read and delete the command

#### Update
```
node index update
```

Same with add command, the mandatory parameter is nama and nomor (the email parameter is optional) for execute the update command

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
