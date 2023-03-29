import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/messenger";
import AccountProvider from "./context/accountprovider";

function App() {

  const clientId='268594238166-6bigpb0obk89e1g6kl9dhhnk29blsfun.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>

      <AccountProvider>

         <Messenger/>
         
      </AccountProvider>

    </GoogleOAuthProvider>
  );
}

export default App;
