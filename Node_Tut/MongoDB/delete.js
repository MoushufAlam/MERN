const dbConnect = require('./mongodb')

const deleteData = async ()=> {
    let data = await dbConnect();
    let result = data.deleteOne(
        {
            name:"U 21",
        }
    )
}

deleteData();