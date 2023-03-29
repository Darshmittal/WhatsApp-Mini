import { useContext, useState, useEffect } from 'react';

import { Box } from '@mui/material';

import { AccountContext } from '../../../context/accountprovider';
import { getConversation } from '../../../service/api';

//components
import ChatHeader from './ChatHeader';
import Messages from './Messages';
// import { UserContext } from '../../../context/UserProvider';

const ChatBox = () => {
   
    // const { person } = useContext(UserContext);
    const { account,person } = useContext(AccountContext);

    const [conversation, setConversation] = useState({});
    
    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
            // console.log(data);
            setConversation(data);
        }
        getConversationDetails();
    }, [person.sub]);

    return (
        <Box style={{height: '75%'}}>
            <ChatHeader person={person} />
            <Messages person={person} conversation={conversation} />
        </Box>
    )
}

export default ChatBox;