import { useEffect, useState } from "react";
import { getDashboardData } from "../api/examService";

function TeacherDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const result = await getDashboardData();
      setData(result);
    }

    loadData();
  }, []);

  if (!data) {
    return <div className="alert alert-info">Loading dashboard...</div>;
  }

  const openExams = data.exams.filter((exam) => exam.status === "Open");
  const averageScore =
    data.studentScores.reduce((sum, item) => sum + item.score, 0) /
    data.studentScores.length;

  return (
    <section className="mb-5">
      <h2 className="mb-3">Teacher Dashboard</h2>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Total Exams</h5>
              <p className="display-6">{data.exams.length}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Open Exams</h5>
              <p className="display-6">{openExams.length}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Average Score</h5>
              <p className="display-6">{averageScore.toFixed(1)}</p>
            </div>
          </div>
        </div>
      </div>

      <h4>Exam List</h4>

      <div className="row g-3">
        {data.exams.map((exam) => (
          <div className="col-md-4" key={exam.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5>{exam.title}</h5>
                <p className="mb-1"><strong>ID:</strong> {exam.id}</p>
                <p className="mb-1"><strong>Subject:</strong> {exam.subject}</p>
                <p className="mb-1"><strong>Date:</strong> {exam.date}</p>
                <p className="mb-1"><strong>Class:</strong> {exam.className}</p>
                <p className="mb-1"><strong>Duration:</strong> {exam.duration} minutes</p>
                <span className="badge bg-primary">{exam.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeacherDashboard;
