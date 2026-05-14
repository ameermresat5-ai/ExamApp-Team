export const exams = [
  {
    id: "EX-MATH-101",
    title: "Math Midterm Exam",
    subject: "Mathematics",
    date: "2026-05-20",
    duration: 60,
    status: "Open",
    className: "10A",
    questionsCount: 12,
  },
  {
    id: "EX-CS-201",
    title: "React Basics Quiz",
    subject: "Computer Science",
    date: "2026-05-22",
    duration: 45,
    status: "Draft",
    className: "11B",
    questionsCount: 10,
  },
  {
    id: "EX-ENG-301",
    title: "English Grammar Test",
    subject: "English",
    date: "2026-05-25",
    duration: 50,
    status: "Closed",
    className: "9C",
    questionsCount: 15,
  },
];

export const studentScores = [
  { studentName: "Ameer", examId: "EX-MATH-101", score: 92 },
  { studentName: "Lina", examId: "EX-MATH-101", score: 84 },
  { studentName: "Omar", examId: "EX-CS-201", score: 88 },
];
