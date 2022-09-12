import NavigationBar from "../components/navbar";
import OrganicsImage from "../public/gallery/organics_ham.png";
import RelaxDentalAfter from "../public/gallery/relax_dental_fix.png";
import RelaxDentalBefore from "../public/gallery/relax_dental_o.png";
import Image from "next/image";

export default function Gallery() {
  return (
    <div>
      <NavigationBar page="gallery" />
      <div className="container">
        <div className="grid-container">
          <Image src={OrganicsImage} alt="Organics Website." />
          <Image src={RelaxDentalAfter} alt="Relax Dental Website After Fix." />
          <Image
            src={RelaxDentalBefore}
            alt="Relax Dental Website Before Fix."
          />
        </div>
      </div>
    </div>
  );
}
