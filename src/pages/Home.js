import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(https://images.pexels.com/photos/1093880/pexels-photo-1093880.jpeg?cs=srgb&dl=chicago-il-skyline-sunset-1093880.jpg&fm=jpg)` }}>
        <div className="headerContainer">
          <h1>Chicago INN</h1>
          <p>Chicago , USA</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
