import Link from "next/link";
import styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <div>
      <div className={"h-12"}>
        <div className={"flex flex-row h-12 justify-center"}>
          <div
            className={
              "flex flex-row h-12 items-center w-1/3 justify-around font-medium font-sanspro text-gray-800"
            }
          >
            <Link href="/">
              <a className={"border-b-2 border-solid border-black"}>Home</a>
            </Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
