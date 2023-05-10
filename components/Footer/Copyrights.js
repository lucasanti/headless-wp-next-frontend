import Link from "next/link";
function Copyrights() {
  const d = new Date().getFullYear();

  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-center align-items-center ">
        <div className="">
          <Link className="navbar-brand p-0" href="/">
            Logo
          </Link>
        </div>
        <div className="">&copy; {d} - All rights reserved</div>
      </div>
    </div>
  );
}

export default Copyrights;
