import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {

  const student = localStorage.getItem("student");

  if (!student) {
    return <Navigate to="/login" />;
  }

  return children;
}