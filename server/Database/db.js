import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const Username = process.env.DB_username;
const Password=process.env.DB_paswword;

const URL=`mongodb://${Username}:${Password}@ac-gtsraqj-shard-00-00.c2pj5we.mongodb.net:27017,ac-gtsraqj-shard-00-01.c2pj5we.mongodb.net:27017,ac-gtsraqj-shard-00-02.c2pj5we.mongodb.net:27017/?ssl=true&replicaSet=atlas-2dz4p2-shard-0&authSource=admin&retryWrites=true&w=majoritymongodb://${Username}:${Password}@ac-gtsraqj-shard-00-00.c2pj5we.mongodb.net:27017,ac-gtsraqj-shard-00-01.c2pj5we.mongodb.net:27017,ac-gtsraqj-shard-00-02.c2pj5we.mongodb.net:27017/?ssl=true&replicaSet=atlas-2dz4p2-shard-0&authSource=admin&retryWrites=true&w=majority`
const Connection = async () => {

    try{

        await mongoose.connect(URL,{ useUnifiedTopology: true})
        console.log('Database Connected Succesfully');

    }catch(error){

        console.log('Error while connecting the database',error.message);

    }
}

export default Connection;