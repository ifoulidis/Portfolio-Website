import NavigationBar from "../../components/navbar";

export default function SpitfireRecords() {
  return (
    <div>
      <NavigationBar />
      <div className="container">
        <div>
          <div id="content">
            <a
              href="https://github.com/ifoulidis/Spitfire-Records"
              className="inTextLinks"
            >
              <h2 id="projectTitle">Spitfire Records</h2>
            </a>
            <br />
            <h5>Key Points</h5>
            <ul>
              <li>A full PHP back end.</li>
              <li>JQuery use throughout for responsive webpages.</li>
              <li>
                Use of SQL in an adaptable way, so that the owner can add
                products with new genres, etc., and new options will be
                integrated seemlessly.
              </li>
              <li>Integration of payment providers (Stripe and POLi).</li>
              <li>
                Proper security practices (hiding passwords, using prepared
                statements for mySQL, etc.).
              </li>
              <li>
                Responsive design that makes for a desktop- and mobile-friendly
                experience.
              </li>
            </ul>
            <h5>Github Link</h5>
            <p>
              <a
                href="https://github.com/ifoulidis/Spitfire-Records"
                className="inTextLinks"
              >
                https://github.com/ifoulidis/Spitfire-Records
              </a>
            </p>
            <h5>Website</h5>
            <p>
              <i>Coming in late June (owner on overseas trip)</i>
            </p>
            <h5>Summary</h5>
            <p>
              I pitched a full e-commerce website created by yours truely for an
              online record shop as an alternative to Shoppify.
            </p>
            <p>
              I chose PHP for a number of reasons, including the fact that it is
              supported by virtually all hosting providers, and that React.js
              does not cooperate with search engines very well (when last I
              checked).
            </p>
            <p>
              The website will be completed by the end of June. Currently, it is
              a little ugly, as I am waiting on the logo to base the colours and
              style off, and I am finishing off some other features.
            </p>
            <p>
              The website has a large number of functions, so it is best you go
              check out the code! An overview is provided in the list above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
