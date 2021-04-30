import InfoIcon from "../icons/Info";
import Logo from "../icons/Logo";
import RelationsIcon from "../icons/Relations";
import SearchIcon from "../icons/Search";
import TimelineIcon from "../icons/Timeline";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  return (
    <nav
      className={
        "absolute w-full p-3 " +
        (router.pathname !== "/"
          ? " backdrop-filter backdrop-blur-lg border-b-2 border-gray-400 border-opacity-10"
          : " ")
      }
    >
      <div className="flex flex-row justify-between">
        <div className="ml-12">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <ul className="flex flex-row gap-5 mr-4 items-center">
          <li>
            <Link href="/search">
              <a>
                <SearchIcon isStatic={false} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/relations">
              <a>
                <RelationsIcon />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/timeline">
              <a>
                <TimelineIcon />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>
                <InfoIcon />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
