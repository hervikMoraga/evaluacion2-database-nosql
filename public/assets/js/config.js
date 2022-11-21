const {MongoClient} = require('mongodb');

async function main(){
    // const username = process.env.USER_NAME_CONNECT
    // const passw = process.env.PASS_CONNECT
    
    const username = "hervikmoraga"
    const passw = "meEuSMvAvzoWNbNC"
    const URI = `mongodb+srv://${username}:${passw}@cluster0.ymuxfkp.mongodb.net/test?retryWrites=true&w=majority`;
    
    const client = new MongoClient(URI);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);