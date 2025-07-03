import { useAuth } from "../hook/useAuth";


export default function Profile() {
  const { user } = useAuth();

  if (!user) return <p>Vous devez être connecté.</p>;

  return <h2>Profil de {user}</h2>;
}