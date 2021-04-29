import InfoIcon from "./Info";
import Logo from "./Logo";
import RelationsIcon from "./relations";
import TimelineIcon from "./Timeline";

function Navbar() {
  return (
    <nav>
      <div>
        <Logo />
      </div>
      <ul>
        <li>
          <a href="/relations">
            <RelationsIcon />
          </a>
        </li>
        <li>
          <a href="/timeline">
            <TimelineIcon />
          </a>
        </li>
        <li>
          <a href="/about">
            <InfoIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
