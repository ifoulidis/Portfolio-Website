import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import RelaxDentalAfter from "../../public/gallery/relax_dental_fix.png";
import RelaxDentalBefore from "../../public/gallery/relax_dental_o.png";
import NavigationBar from "../../components/navbar";

export default function RelaxDental() {
  return (
    <div>
      <NavigationBar />
      <div className="container">
        <div>
          <div id="content">
            <h2 id="projectTitle" className="noLinkTitle">
              Relax Dental
            </h2>
            <br />
            <h5>Skills Shown</h5>
            <ul>
              <li>Comfort with all a variety of CSS skills.</li>
              <li>The ability to see what was important in a wall of code.</li>
              <li>Dealing with clients.</li>
            </ul>
            <h5>Summary</h5>
            <p>
              I noticed that my dentist&apos;s website was, as you can see
              below, in an appalling state. I offered my services to him, and
              upon arriving home, I could see that he had a WordPress site. I
              knew immediately that he likely had not paid for his themes, or
              that his plugins no longer worked. However, I still quickly tidied
              up the homepage to show him what I could do and offered to modify
              the CSS directly for him. <br />
              <br />
              Apparently, he was quite unaware of the situation, and decided to
              contact whomever developed the initial theme to pay for
              subscriptions and such again. The website has not been fixed yet,
              as far as I can tell, but you can still see how I was quickly able
              to tidy up the appearance below.
            </p>
            <Image
              src={RelaxDentalBefore}
              alt="Relax Dental Website Before Fix."
            />
            <Image
              src={RelaxDentalAfter}
              alt="Relax Dental Website After Fix."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
