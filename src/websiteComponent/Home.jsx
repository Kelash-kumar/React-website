import React from "react";
import './Home.css'
const Home = () => {
  return (
    <section>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
            <h1>work with <strong className="brand-name">techEarn</strong> to learn values</h1>
            <h3 className="my-3">kelash kumar </h3>
            </div>
            <div className="mt-3">
              <a href="#" className="btn-default ">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
