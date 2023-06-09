import React, { useState } from "react";

function HealthForm2() {
  const [healthStatus, setHealthStatus] = useState("");
  const [dietHistory, setDietHistory] = useState("");
  const [comments, setComments] = useState("");

  const handleHealthChange = (event) => {
    setHealthStatus(event.target.value);
  };

  const handleDietChange = (event) => {
    setDietHistory(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit form data to backend API
    // and handle any errors or success messages
  };

  return (
    <div>
      <h1>Health Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>General Health:</label>
          <br />
          <input
            type="radio"
            value="good"
            checked={healthStatus === "good"}
            onChange={handleHealthChange}
          />
          <label>Good</label>
          <br />
          <input
            type="radio"
            value="poor"
            checked={healthStatus === "poor"}
            onChange={handleHealthChange}
          />
          <label>Poor</label>
        </div>
        <div>
          <label>Are you currently taking any drugs?:</label>
          <br />
          <input
            type="radio"
            value="yes"
            checked={dietHistory === "yes"}
            onChange={handleDietChange}
          />
          <label>Yes</label>
          <br />
          <input
            type="radio"
            value="no"
            checked={dietHistory === "no"}
            onChange={handleDietChange}
          />
          <label>No</label>
        </div>
        <div>
          <label>Comments:</label>
          <br />
          <textarea
            value={comments}
            onChange={handleCommentsChange}
            rows="4"
            cols="50"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HealthForm2;
