import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
