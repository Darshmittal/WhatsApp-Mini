//middleware.

import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from 'dotenv'

dotenv.config();

const Username=process.env.DB_username;
const Password=process.env.DB_password;

const storage= new GridFsStorage({
    url:`mongodb://${Username}:${Password}@ac-gtsraqj-shard-00-00.c2pj5we.mongodb.net:27017,ac-gtsraqj-shard-00-01.c2pj5we.mongodb.net:27017,ac-gtsraqj-shard-00-02.c2pj5we.mongodb.net:27017/?ssl=true&replicaSet=atlas-2dz4p2-shard-0&authSource=admin&retryWrites=true&w=majoritymongodb://${Username}:${Password}@ac-gtsraqj-shard-00-00.c2pj5we.mongodb.net:27017,ac-gtsraqj-shard-00-01.c2pj5we.mongodb.net:27017,ac-gtsraqj-shard-00-02.c2pj5we.mongodb.net:27017/?ssl=true&replicaSet=atlas-2dz4p2-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options:{ useUnifiedTopology: true,useNewUrlParser:true},
    file:(req,file)=>{

        const match=["image/png","image/jpg"];

        if(match.indexOf(file.mimeType)===-1)
        {
            return `${Date.now()}-file-${file.originalname}`;
        }

        return{
            bucketName:"photos",
            filename:`${Date.now()}-file-${file.originalname}`
        }

        
    }
});

export default multer({storage});