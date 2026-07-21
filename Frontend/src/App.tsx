import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JobApplication, { type JobType } from "./application";
import FormApplication from "./form";
import Login from "./components/Login";
import AdminPage from "./components/admin";


type View = "login" | "apply" | "form" | "admin";

function App() {
  const [activeJob, setActiveJob] = useState<JobType | null>(null);
  const [view, setView] = useState<View>("apply");
  const [LoginActive, setLoginActive] = useState<boolean>(true);

  const handleLoginSuccess = () => {
    setLoginActive(false);
    setView("admin");
  };

  const handleSelectJob = (jobType: JobType) => {
    setActiveJob(jobType);
    setView("form");
  };

  const handleHeaderLoginClick = () => {
    setActiveJob(null);
    setLoginActive(true);
    setView("login");
  };

  return (
    <div className="min-h-screen">
      <Header onLoginClick={handleHeaderLoginClick} LoginActive={LoginActive} />

      <main className="w-full min-h-[52vh] max-h-fit px-[22px] py-[28px] sm:px-[22px]">
        {view === "login" ? (
          <Login onLoginSuccess={handleLoginSuccess} />
        ) :
        view === "admin"?
        (
          <AdminPage />
        ):
         view === "form" ? (
          <FormApplication jobType={activeJob as JobType} />
        ) : (
          <JobApplication onApply={handleSelectJob} />
        )}
      </main>


      {view !== "login" && <Footer />}
    </div>
  );
}

export default App;







