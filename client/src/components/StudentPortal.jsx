import { useState } from "react";
import { getExamById } from "../api/examService";

function StudentPortal() {
  const [examId, setExamId] = useState("");
  const [exam, setExam] = useState(null);
  const [error, setError] = useState("");

  async function handleSearch(event) {
    event.preventDefault();

    const result = await getExamById(examId);

    if (!result) {
      setExam(null);
      setError("Exam not found. Try: EX-MATH-101");
      return;
    }

    setError("");
    setExam(result);
  }

  return (
    <section className="mb-5">
      <h2 className="mb-3">Student Portal</h2>

      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={handleSearch} className="d-flex gap-2">
            <input
              className="form-control"
              placeholder="Enter Exam ID"
              value={examId}
              onChange={(e) => setExamId(e.target.value)}
            />
            <button className="btn btn-success">Find Exam</button>
          </form>

          {error && <div className="alert alert-danger mt-3">{error}</div>}

          {exam && (
            <div className="alert alert-success mt-3">
              <h4>{exam.title}</h4>
              <p><strong>Subject:</strong> {exam.subject}</p>
              <p><strong>Date:</strong> {exam.date}</p>
              <p><strong>Duration:</strong> {exam.duration} minutes</p>
              <p><strong>Questions:</strong> {exam.questionsCount}</p>
              <button className="btn btn-primary">Start Exam</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default StudentPortal;
