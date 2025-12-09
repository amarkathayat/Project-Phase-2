import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">☀️</span>
          <h1>Renewable Nepal</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className={isActive("/") ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/technologies"
                className={isActive("/technologies") ? "active" : ""}
              >
                Technologies
              </Link>
            </li>
            <li>
              <Link
                to="/benefits"
                className={isActive("/benefits") ? "active" : ""}
              >
                Benefits
              </Link>
            </li>
            <li>
              <Link
                to="/challenges"
                className={isActive("/challenges") ? "active" : ""}
              >
                Challenges
              </Link>
            </li>
            <li>
              <Link
                to="/get-involved"
                className={isActive("/get-involved") ? "active" : ""}
              >
                Get Involved
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
