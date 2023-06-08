import React from "react";
import NavigationBar from "../../components/navbar";

function AmazonClone() {
  return (
    <div>
      <NavigationBar />
      <div className="container">
        <div>
          <div id="content">
            <a href="https://clone-abc9c.web.app/" className="inTextLinks">
              <h2 id="projectTitle">Amazon Clone</h2>
            </a>
            <br />
            <h5>Skills Shown</h5>
            <ul>
              <li>
                Use of a variety of hooks (including useContext, useEffect, and
                useState).
              </li>
              <li>Authentication with Firebase 9.</li>
              <li>Crisp design with CSS.</li>
              <li>Deployment, debugging, and testing.</li>
            </ul>
            <h5>Github Link</h5>
            <p>
              <a
                href="https://github.com/ifoulidis/Amazon_clone"
                className="inTextLinks"
              >
                https://github.com/ifoulidis/Amazon_clone
              </a>
            </p>
            <h5>Live Site</h5>
            <p>
              <a href="https://clone-abc9c.web.app/" className="inTextLinks">
                https://clone-abc9c.web.app/
              </a>
            </p>
            <h5>Summary</h5>
            <p>
              This is an Amazon clone with a variety of features! More are to be
              added soon (payment processing, etc.).
            </p>
            <p>
              Items can be added to the cart. The checkout page displays these
              items and their total prices. Items can be deleted from the cart.
            </p>
            <p>
              If you sign up, you will see that you can then sign in, be
              welcomed on the home page accordingly, and have your email be
              presented on the checkout page above the cart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmazonClone;
