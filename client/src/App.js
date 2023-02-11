import Login from "./components/Login";
import Register from "./components/Register";
import Table from "./components/Table";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<RequireAuth />}>
          <Route path="/table" element={<Table />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
