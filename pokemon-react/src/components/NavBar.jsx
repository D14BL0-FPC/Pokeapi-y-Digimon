import { NavLink, Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        PokeApi
      </Link>

      <div className="navbar-links">
        <NavLink to="/" end className="nav-link">
          Inicio
        </NavLink>
        <NavLink to="/gen1" className="nav-link">
          Gen1
        </NavLink>
        <NavLink to="/gen2" className="nav-link">
          Gen2
        </NavLink>
        <NavLink to="/gen3" className="nav-link">
          Gen3
        </NavLink>
        <NavLink to="/digimon" className="nav-link">
          Digimon
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
