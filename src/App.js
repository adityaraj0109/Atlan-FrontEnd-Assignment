import React, { Suspense, lazy} from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Loader from "./components/loader/Loader";
import { WorkDesk } from './pages/Workdesk'

const Home = lazy(() => import("./pages/home/Home"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));

function App() {
  return (
    <div className='App'>
      <Suspense
        fallback={
          <Loader />
        }
      >
        <Router>
            <Navbar/>
            <Route path='/' exact component={Home} />
            <Route path='/editor' exact component={WorkDesk} />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
