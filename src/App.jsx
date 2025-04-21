import Login from "./pages/login/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Friends from "./pages/friends/Friends";
import "./style.scss"
import { useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import HallOfFame from "./pages/hallOfFame/HallOfFame";
import Groups from "./pages/groups/Groups"
import HatDedication from "./pages/hatDedication/HatDedication";
import Settings from "./pages/settings/Settings";
import Events from "./pages/events/Events";
import OwnProfile from "./pages/ownProfile/OwnProfile";
import Chats from "./pages/chats/Chats";
import Marketplace from "./pages/marketplace/Marketplace";
import Sell from "./pages/marketplace/Sell";
import MoreInfo from "./pages/marketplace/MoreInfo"
import { ChatEngine } from 'react-chat-engine';
import AboutTeam from "./pages/aboutTeam/AboutTeam";
import AlumniMap from "./pages/alumniMap/AlumniMap";
import 'leaflet/dist/leaflet.css';


function App() {

  const currentUser = true;

  const {darkMode} = useContext(DarkModeContext);

  useEffect(() => {
    console.log("Dark Mode:", darkMode); // ✅ Debugging
  }, [darkMode]);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };


  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:(
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
        ),
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/ownProfile/:id",
          element:<OwnProfile/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        },
        {
          path: "/friends", 
          element: <Friends />,
        },
        {
          path: "/groups", 
          element: <Groups />,
        },
        {
          path: "/events", 
          element: <Events />,
        },
        {
          path: "/chats", 
          element: <Chats />,
        },
        {
          path: "/hatDedication", 
          element: <HatDedication />,
        },
        {
          path: "/hallOfFame", 
          element: <HallOfFame />,
        },
        {
          path: "/marketplace", 
          element: <Marketplace />,
        },
        {
          path: "/marketplace/item/:id", 
          element: <MoreInfo />,
        },
        {
          path: "/marketplace/sell", 
          element: <Sell />,
        },
        {
          path: "/settings", 
          element: <Settings />,
        },
        {
          path: "/aboutTeam", 
          element: <AboutTeam />,
        },
        {
          path: "/alumniMap", 
          element: <AlumniMap />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;