import { useContext } from "react";
import { Dialog,Box,Typography,List,ListItem,styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import {GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { AccountContext } from "../../context/accountprovider";
import { addUser } from "../../service/api";
const Component =styled(Box)`
  
   display:flex;
`;

const Container=styled(Box)`
 
   padding:56px 0 56px 56px;

`
const QRcode=styled('img')({

    height:264,
    width: 264,
    mqrgin:'50px 0 0 50px'
})

const Tittle=styled(Typography)`
   
     font-size:26px;
     color:#525252;
     font-weight:300;
     font-family: inherit;
     margin-botttom:25;

`

const StyledList =styled(List)`
 
  &>li{

     padding:0;
     margin-top:15px;
     font-size : 18px;
     line-height: 28px;
     color:#4a4a4a;
  }
`

const dialogStyle={

    height:'96%',
    marginTop:'12%',
    width:'60%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden'
}

const LoginDialog = () => {

    const {setAccount}=useContext(AccountContext);

    const onLoginSuccess= async(res) =>{

        const decode=jwt_decode(res.credential);
        setAccount(decode);
        await addUser(decode);

    }

    const onLoginError=(res) =>{

        console.log("Login Failed!!" ,res)
    }

    return (

        <Dialog 
        open={true}
        PaperProps={{sx: dialogStyle}}
        hideBackdrop={true}
        >
            <Component>
                <Container>
                    <Tittle>To use the WhatsApp Minni on your Computer</Tittle>
                    <StyledList>
                        <ListItem>1. Open WhatsApp Minni on your phone</ListItem>
                        <ListItem>2. Tap Menu settings and select WhatsApp Minni</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code </ListItem>
                    </StyledList>
                </Container>


                <Box  style={{position:'relative'}}>

                    <QRcode src={qrCodeImage} alt="qr code"/>
                    <Box style={{position:'absolute',top:'50%',transform:'translatex(25%'}}>
                        <GoogleLogin
                            
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />
                    </Box>

                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;
