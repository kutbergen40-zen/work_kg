import { Routes, Route } from "react-router-dom";

import MyJobs from "./pages/MyJobs/MyJobs";
import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import JobDetails from "./pages/JobDetails/JobDetails";
import AddJob from "./pages/AddJob/AddJob";
import MyResponses from "./pages/MyResponses/MyResponses";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import Favorites from "./pages/Favorites/Favorites";
import Applications from "./pages/AppLications/AppLications";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PrivateRoute from "./components/common/PrivateRoute/PrivateRoute";

function AppRoutes() {
  return (

      <Routes>
        <Route path="/"
         element={<Home />} />

        <Route path="/jobs"
         element={<Jobs />} />

        <Route path="/my-jobs"
         element={
         <PrivateRoute>
         <MyJobs />
         </PrivateRoute>
         } />         

        <Route
          path="/job-details/:id"
          element={<JobDetails />}
        />

        <Route
          path="/add-job"
          element={
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        }/>

        <Route
          path="/profile"
          element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }/>

        <Route
          path="/edit-profile"
          element={
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        }/>

        <Route
          path="/favorites"
          element={<Favorites />}
        />

        <Route
          path="/my-responses"
          element={
          <PrivateRoute>
            <MyResponses />
          </PrivateRoute>
        }/>

        <Route
          path="/applications"
          element={
          <PrivateRoute>
            <Applications />
          </PrivateRoute>
        }/>

        <Route path="/login"
         element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
  );
}

export default AppRoutes;