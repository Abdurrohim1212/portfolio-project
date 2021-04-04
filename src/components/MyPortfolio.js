import React from "react";
import Coure_detail from "../assets/images/Course_detail.PNG";
import Movee from "../assets/images/mov-e homepage.png";
import Grocery_bud from "../assets/images/edit_list.PNG";

function MyPortfolio() {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col mb-5">
          <h2>My Projects</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div class="card">
            <img src={Coure_detail} class="card-img-top" alt="Coure_detail" />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div class="card">
            <img src={Movee} class="card-img-top" alt="Coure_detail" />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div class="card">
            <img src={Grocery_bud} class="card-img-top" alt="Coure_detail" />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio;
