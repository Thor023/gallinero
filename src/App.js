import { UserAuth } from './context/AuthContext.jsx'
import logo from './logo.svg';
import NonUserRoutes from './routes/NonUserRoutes.jsx'
import UserRoutes from './routes/UserRoutes.jsx'


function App() {
  const { isLoggedOut } = UserAuth();

  return <div> {isLoggedOut ? <NonUserRoutes /> : <UserRoutes />} </div>;
  
}

export default App;
