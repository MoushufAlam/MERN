const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertOne(
        {
            name:"U 20",
            Brand: "Oppo",
            Price : 15000,
            Category : "Mobile",
        }
    );
    if(result.acknowledged){
        console.log("Data Inserted");
    }
}

insert();