import NavigationBar from "../../components/navbar";

export default function WhiteDovePainting() {
  return (
    <div>
      <NavigationBar page="projects" />
      <div className="container">
        <div>
          <div id="content">
            <a href="/white_dove/index.html" className="inTextLinks">
              <h2 id="projectTitle">White Dove Painting</h2>
            </a>
            <br />
            <h5>Skills Shown</h5>
            <ul>
              <li>
                Use of a convenient CSS library for basic websites (W3.CSS).
              </li>
              <li>Rapidity.</li>
            </ul>
            <h5>Website</h5>
            <p>
              <a href="/white_dove/index.html" className="inTextLinks">
                Click here!
              </a>
            </p>
            <h5>Summary</h5>
            <p>
              This is a very simple website I was able to short together in no
              time for my Dad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
