import { useState } from "react";
import LoginScreen from "./components/LoginScreen";
import TeacherDashboard from "./components/TeacherDashboard";
import StudentPortal from "./components/StudentPortal";

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <LoginScreen onLogin={setUser} />;
  }

  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">ExamApp-Team</span>

          <div className="d-flex align-items-center gap-3">
            <span className="text-white">
              {user.name} — {user.role}
            </span>

            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => setUser(null)}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="container">
        <div className="text-center mb-5">
          <h1>Exam Management System</h1>
          <p className="text-muted">
            Teacher dashboard and student exam portal
          </p>
        </div>

        {user.role === "teacher" ? <TeacherDashboard /> : <StudentPortal />}
      </main>
    </div>
  );
}

export default App;
