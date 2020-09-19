import React from "react";
import "./MakeOffer.css";

export default function App() {
  const [payrate, setPayrate] = React.useState("");
  const [projectInfo, setProjectInfo] = React.useState("");
  const [jobDetails, setJobDetails] = React.useState("");

  const handleSubmit = (event) => {
    console.log(`
      Payrate: ${payrate}
      Project Info: ${projectInfo}
      Job Details: ${jobDetails}
    `);

    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Make an offer!</h1>

      <label>
        Pay Rate per hour:
        <input
          name="payrate"
          type="payrate"
          pattern="[0-9]*"
          value={payrate}
          onChange={(e) => setPayrate(e.target.value)}
          required
        />
      </label>

      <label>
        Project Info:
        <input
          name="project-info"
          type="project-info"
          value={projectInfo}
          onChange={(e) => setProjectInfo(e.target.value)}
          required
        />
      </label>

      <label>
        Job Details:
        <input
          name="job-details"
          type="job-details"
          value={jobDetails}
          onChange={(e) => setJobDetails(e.target.value)}
          required
        />
      </label>

      <button>Submit</button>
    </form>
  );
}
