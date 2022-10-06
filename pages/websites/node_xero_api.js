import NavigationBar from "../../components/navbar";

export default function NodeXeroAPI() {
  return (
    <div>
      <NavigationBar page="projects" />
      <div className="container">
        <div>
          <div id="content">
            <a href="https://www.glacier.nz/" className="inTextLinks">
              <h2 id="projectTitle">Node Xero API</h2>
            </a>
            <br />
            <h5>Skills Shown</h5>
            <ul>
              <li>Use of the latest version of Node.js.</li>
              <li>Use of TypeScript.</li>
              <li>The ability to learn directly from documentation.</li>
            </ul>
            <h5>Github Link</h5>
            <p>
              <a
                href="https://github.com/ifoulidis/GlacierInternational"
                className="inTextLinks"
              >
                https://github.com/ifoulidis/GlacierInternational
              </a>
            </p>
            <h5>Website</h5>
            <p>
              <a href="https://www.glacier.nz/" className="inTextLinks">
                https://www.glacier.nz/
              </a>
            </p>
            <h5>Summary</h5>
            <p>
              I was given the opportunity to work on the API for a car sales
              company&#39;s website, as a friend of mine created the website.
              The owner wanted to integrate Xero (accounting software) with the
              sales made on the website. After reading Xero&#39;s Node
              documentation and looking at a couple of their example
              applications, I was able to discern what I had to do without much
              trouble. You can test the API yourself by simply buying a
              vehicle... Or you could take a look at my contributions on my
              GitHub page.
            </p>
            <p>
              The API emails the customer a copy of her/her invoice, updates the
              owner&#39;s Xero database, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
