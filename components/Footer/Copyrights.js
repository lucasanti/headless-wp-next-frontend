function Copyrights() {
  const d = new Date().getFullYear();

  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-center align-items-center ">
        <div className="">
          <a className="navbar-brand p-0" href="/">
            Logo
          </a>
        </div>
        <div className="">&copy; {d} - All rights reserved</div>
      </div>
    </div>
  );
}

export default Copyrights;
