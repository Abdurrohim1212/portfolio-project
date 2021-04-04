import React from "react";
import Coure_detail from "../assets/images/Course_detail.PNG";
import Movee from "../assets/images/mov-e homepage.png";
import Grocery_bud from "../assets/images/edit_list.PNG";

function MyPortfolio() {
  return (
    <div className="container justify-content-center" id="portfolio">
      <div className="row text-center ">
        <div className="col mb-5">
          <h2>My Projects</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-sm kartu">
          <div className="card">
            <a href="https://github.com/Abdurrohim1212/lektur-project">
              <img src={Coure_detail} class="card-img-top" alt="Coure_detail" />
            </a>
            <div className="card-body">
              <p className="card-text">
                Glints Academy Final Project.This project basically the last
                project that we need to complete before graduation from the
                bootcamp which is Glinta Academy Bootcamp batch 10, here we
                build an app named LEKTUR which lektur is a online platform for
                learning management system where users are welcome to teach and
                learn courses here users can register as student or teacher
                where for student can pick the lesson that they desire to learn
                and can track the progress of their study , take an assessment
                once completed their study and get the certificate as well. And
                for teachers there can create material , class , and assessment
                also can invite students for their material through email
                invitation.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm kartu ">
          <div className="card">
            <a href="https://github.com/Abdurrohim1212/mov-e-project">
              <img src={Movee} className="card-img-top" alt="Coure_detail" />
            </a>
            <div className="card-body">
              <p className="card-text">
                This mini-project is a mandatory agenda held by Binar academy
                and Glints for students at Glints Academy as well as for us in
                batch #10. At its initiation, we were divided into 6 groups,
                each consisting of front-end, back-end and React Native students
                which later is expected to produce a work that can be exhibited
                as a portfolio. This Movieapp is the result of the work of the E
                team where we collaborated for 1 week to finish as much as we
                could.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm kartu ">
          <div className="card">
            <a href="https://github.com/Abdurrohim1212/grocery-bud">
              <img
                src={Grocery_bud}
                className="card-img-top"
                alt="Coure_detail"
              />
            </a>
            <div className="card-body">
              <p className="card-text">
                This is really simple project called "Grocery bud" project build
                with React js This project basically to assit you organize
                everything you need for your groceries need, u can list down all
                u need to buy, remove or edit the list as u need .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio;
