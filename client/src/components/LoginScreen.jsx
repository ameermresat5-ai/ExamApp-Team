import { useState } from "react";

function LoginScreen({ onLogin }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("teacher");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    onLogin({ name, role });
  }

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow">
              <div className="card-body p-4">
                <h1 className="text-center mb-3">ExamApp Login</h1>
                <p className="text-muted text-center">
                  Choose your role and enter your name to continue.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      className="form-control"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Role</label>
                    <select
                      className="form-select"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="teacher">Teacher</option>
                      <option value="student">Student</option>
                    </select>
                  </div>

                  <button className="btn btn-primary w-100">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
