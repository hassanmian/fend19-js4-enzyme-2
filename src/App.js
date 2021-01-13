import React, {useContext} from 'react'
import { UserContext } from './contexts/UserContextProvider';

function App() {
  const { 
    isLoggedIn, setIsLoggedIn, userData, setUserData,
    logInUser, logOutUser
  } = useContext(UserContext)

  function renderLoggedIn() {
    return (
      <div>
        Welcome {userData.username}
        <button onClick={logOutUser}>Log out</button>
      </div>
    )
  }

  function renderLoggedOut() {
    return <button onClick={logInUser}>Please log in</button>
  }
  return (
    <div>
      {isLoggedIn 
      ? 
        renderLoggedIn()
      :
        renderLoggedOut()
      }
    </div>
  );
}

export default App;
