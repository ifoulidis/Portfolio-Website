import Head from "next/head";
import Link from "next/link";
import NavigationBar from "../../components/navbar";

export default function NatureBootstrapBlog() {
  return (
    <div>
      <NavigationBar page="projects" />
      <div className="container">
        <div>
          <div id="content">
            <Link href="http://isaiah-bootstrap-blog.great-site.net/?i=1">
              <a className="inTextLinks">
                <h2 id="projectTitle">Bootstrap Blog</h2>
              </a>
            </Link>
            <br />
            <h5>Skills Shown</h5>
            <ul>
              <li>Use of Bootstrap grid</li>
              <li>Use of JS components with .createElement.</li>
              <li>Use of custom fonts.</li>
            </ul>
            <h5>Summary</h5>
            <p>
              <br />
              This is a simple blog that relies almost entirely on Bootstrap. I
              just built it for Bootstrap experience following a tutorial, and
              messed around with it afterward. Click{" "}
              <Link href="http://isaiah-bootstrap-blog.great-site.net/?i=1">
                <a className="inTextLinks">here</a>
              </Link>{" "}
              to see it, or go to
              http://isaiah-bootstrap-blog.great-site.net/?i=1.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
