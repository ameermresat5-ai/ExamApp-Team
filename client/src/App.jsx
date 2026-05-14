import TeacherDashboard from "./components/TeacherDashboard";
import StudentPortal from "./components/StudentPortal";

function App() {
  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">ExamApp-Team</span>
        </div>
      </nav>

      <main className="container">
        <div className="text-center mb-5">
          <h1>Exam Management System</h1>
          <p className="text-muted">
            Teacher dashboard and student exam portal
          </p>
        </div>

        <TeacherDashboard />
        <StudentPortal />
      </main>
    </div>
  );
}

export default App;
