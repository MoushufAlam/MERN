const dbConnect = require('./mongodb');

const updateData = async ()=>{
    let data = await dbConnect()
    let result = data.updateOne(
        {name:"U 20"},
        {
            $set:{name : "U 21"}
        }
    )
}
updateData();