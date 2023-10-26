import "./Button.css"
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-background">
      <div className='home-container'>
        <div className='home-heading-container'>
          <h1 className='home-heading'>Welcome to the Best SQL Editor{<br/>}</h1>
          <h2 className='blue'>
            Master SQL: Your Gateway to Data Dominance.
          </h2>
          <Link to="/editor">
            <button  style={{margin:"20px"}} className="custom-btn btn-3"><span>Start Coding Now</span></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
