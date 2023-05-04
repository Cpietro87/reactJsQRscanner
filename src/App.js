import { Route, Routes } from "react-router-dom";
import Login from './componet/login';
import Dashboard from './Dashboard';
import QrGenerate from './componet/qrgenerate';
import QrScanner from "./componet/qrscanner";
import Evento from "./componet/evento"
import FormEvento from "./componet/formevento";
import Asistencia from "./componet/asistencia";
import UserForm from "./componet/user";

const App = () => {
  return (
  <div>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create" element={<QrGenerate/>} />
      <Route path="/scanner" element={<QrScanner/>} />
      <Route path="/evento" element={<Evento/>} />
      <Route path="/evento/create" element={<FormEvento/>} />
      <Route path="/asistencia" element={<Asistencia/>} />
      <Route path="/usuario" element={<UserForm/>} />
    </Routes>

  </div>
  );
};

export default App;

