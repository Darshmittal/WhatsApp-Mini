import {useState} from 'react';

import {Box} from '@mui/material';
import Conversations from './Conversations';
//components
import Header from './Header';
import Search from './search';

const Menu=() => {

    const [text,setText]=useState('');

    return(
        
        <Box>

            <Header/>
            <Search setText={setText}/>
            <Conversations text={text}/>
        </Box>
    )
}

export default Menu;