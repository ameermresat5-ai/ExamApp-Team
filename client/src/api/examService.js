import { exams, studentScores } from "./mock";

export async function getDashboardData() {
  return {
    exams,
    studentScores,
  };
}

export async function getExamById(id) {
  return exams.find(
    (exam) => exam.id.toLowerCase() === id.toLowerCase()
  );
}
