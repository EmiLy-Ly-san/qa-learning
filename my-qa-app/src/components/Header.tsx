import { Link } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header style={{ background: "#ddd", padding: "1rem" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Accueil</Link>
        <Link to="/profile">Profil</Link>
        {user ? (
          <>
            <span>Bonjour, {user}</span>
            <button onClick={logout}>Déconnexion</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}