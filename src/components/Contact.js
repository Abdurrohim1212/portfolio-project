import React from "react";

function Contact() {
  return (
    <div>
      <div className="container" id="contact">
        <div className="row text-center mb-3">
          <div className="col">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-md-8">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Full Name
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="name"
                  aria-describedby="name"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="email"
                />
              </div>
              <div class="mb-3">
                <label for="pesan" class="form-label">
                  Pesan
                </label>
                <textarea class="form-control" id="pesan" rows="3"></textarea>
              </div>

              <button type="submit" class="btn btn-dark">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#343a40"
          fill-opacity="1"
          d="M0,192L30,202.7C60,213,120,235,180,245.3C240,256,300,256,360,234.7C420,213,480,171,540,149.3C600,128,660,128,720,154.7C780,181,840,235,900,213.3C960,192,1020,96,1080,74.7C1140,53,1200,107,1260,144C1320,181,1380,203,1410,213.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Contact;
