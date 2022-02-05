import './App.css';
import Sidebar from './components/Sidebar';
import Home from './screens/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CreatePost from './screens/CreatePost';
import Settings from './screens/Settings';
import GetPost from './screens/GetPost';
import Message from './screens/Message';
import Login from './screens/Login';

const user = localStorage.getItem("user")

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={user? <Home /> : <Login /> }/>
          <Route path="/addnews" element={user ?<CreatePost /> : <Login />} />
          <Route path="/allnews" element={user ? <GetPost /> : <Login />} />
          <Route path="/settings" element={user ? <Settings /> : <Login />} />
          <Route path="/messages" element={user ? <Message />: <Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
