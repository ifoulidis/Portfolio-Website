import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavigationBar from "../../components/navbar";
import GameImage1 from "../../public/border_security_1.png";
import GameImage2 from "../../public/border_security_2.png";

export default function PythonClose() {
  return (
    <div>
      <NavigationBar page="projects" />
      <div className="container">
        <div id="content">
          <div>
            <h3 id="projectTitle" className="noLinkTitle">
              Pulling Data from Close with Python for Power BI
            </h3>
            <br />
            <br />
            <h5>Skills Shown</h5>
            <ul>
              <li>Pagination of data in API calls.</li>
              <li>Adapting to a new system.</li>
              <li>Secure handling of data.</li>
              <li>Data-type transforms.</li>
              <li>Use of Fast API in Python.</li>
            </ul>
          </div>
          <h5>View Code</h5>
          <p>
            The finished, complete project is not available, but for the
            pre-deployment Python code,
            <a href="/close-python.pdf" className="inTextLinks">
              {" "}
              click here!
            </a>
          </p>
          <h5>Summary</h5>
          <p>
            A client wanted certain summary metrics by day, week, and month from
            Close (a customer relationship management service). He wanted them
            provided in Power BI (similar to Excel, but more powerful).
          </p>
          <p>
            This was first accomplished by finding the Close API&apos;s
            endpoints and testing the Close Python wrapper. The wrapper suited
            most of our purposes but not all. Therefore, I had to abandon use of
            the wrapper. Then, I had to deal with pagination in two different
            ways, as some of the data were far more numerous and likely to
            exceed Close&apos;s API&apos;s limits than others. The end result
            was delivered on March 6th.
          </p>
        </div>
      </div>
    </div>
  );
}
