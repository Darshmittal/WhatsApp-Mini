
import conversation from "../model/Conversation.js";

export const newConversation=async (req,res)  =>{

        const senderId = req.body.senderId;
        const receiverId= req.body.receiverId;

        const exist= await conversation.findOne({members: {$all:[senderId,receiverId]}});

        if(exist){
            return res.status(200).json('conversation already exist');
        }
        
        const newConversation = new conversation({

            members: [senderId, receiverId]
        })

    try{

       const savedConversation= await newConversation.save();

        return res.status(200).json('conversation saved succesfully',savedConversation);

    }catch(error){

          return res.status(500).json(error.message);
    }

}

export const getConversation = async(req,res) =>{

    try{

        const senderId = req.body.senderId;
        const receiverId= req.body.receiverId;

        let Conversation = await conversation.findOne({members: {$all: [senderId,receiverId]}})
        return res.status(200).json(Conversation);

    }catch(error){

        return res.status(500).json(error.message);

    }
}