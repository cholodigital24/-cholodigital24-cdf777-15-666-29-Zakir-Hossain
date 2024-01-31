import {
  FaCheckCircle,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function MoreInfo() {
  return (
    <div className="grid gap-5 grid-cols-3">
      <div className="md:col-span-1 col-span-3 font-bold">
        <h2 className="text-highlight flex items-center gap-2">
          <FaCheckCircle className="text-primary" /> My Achievements
        </h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          
          <li>
              Word Secretary Word No 8
          </li>
          <li>
              Save life blood donor association
          </li>
          <li>
              Konabari adorsho sheva songo
          </li>
          <li>
              Covid 19 1st line suverviser
          </li>
        </ul>
      </div>
      <div className="md:col-span-1 col-span-3 font-bold">
        <h2 className="text-highlight flex items-center gap-2">
          <FaCheckCircle className="text-primary" /> Education 
        </h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>
            <b>B.B.A</b>: Honurs in marketing 2013{" "}
          </li>
          <li>
            <b>H.S.C:</b>
              in Business Studies 2007
          </li>
          <li>
            <b>S.S.C:</b>
              in Business Studies 2005
          </li>
          
          <li><b>Fireservice:  </b>Fireservice community volunteer   </li>
        </ul>
      </div>
      <div className="md:col-span-1 col-span-3 font-bold">
        <h2 className="text-highlight flex items-center gap-2">
          <FaCheckCircle className="text-primary" /> Let's Connect
        </h2>
        <ul className="flex flex-col gap-4 text-sm font-normal ">
          <li>
            <span className="flex items-center gap-1">
              <FaPhone className="text-primary" /> +88 01748-974869
            </span>
          </li>
          <li>
            <Link to={"https://www.facebook.com/hmzakir007"} className="flex items-center gap-1">
              <FaFacebook className="text-primary" /> /hmzakir007
            </Link>
            
          </li>
          {/* <li>
            <span className="flex items-center gap-1">
              <FaGithub className="text-primary" /> GitHub:
            </span>
            github.com/yourusername
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default MoreInfo;
