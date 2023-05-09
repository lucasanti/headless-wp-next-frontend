function Copyrights() {
  const d = new Date().getFullYear();

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <a className="navbar-brand p-0" href="/">
            Logo
          </a>
        </div>
        <div className="col">&copy; {d} - All rights reserved</div>
      </div>
    </div>
  );
}

export default Copyrights;
