import React from 'react';
import './ComonPage.css';
import { NavLink } from 'react-router-dom';


const CommonPage=(props)=> {
  console.log();
  console.log(props.title);
  console.log(props.img);

  return (
    <section>
    <div className="container-fluid nav-bg ">
      <div className="row">
        <div className="row">
        <div className="col-10 mx-auto maindiv">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
          <h1>{props.disc} <strong className="brand-name ">{props.head}</strong>{props.conDisc} </h1>
          <h3 className="my-3">{props.title}  </h3>
          <div className="mt-3">
            <NavLink to={props.to} className="btn-get-started btn btn-info">
              Get Started
            </NavLink>
          </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 header-img imgdiv" >
            <img src={props.img} className="img-fluid animated   " alt="home img" />

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CommonPage