import React from 'react'
import "../style/home.scss"

const Home = () => {
  return (
    <main className="home">
     <div className="left">
        <textarea name="Job Description" id="jobDescription" placeholder="Enter job description"></textarea>
      </div>
      <div className="right">
        <div className="input-group">
          <label htmlFor="resume">Upload Resume</label>
          <input type="file" name="Resume" id="resume" accept=".pdf,.doc,.docx" />
          
        </div>
        <div className="input-group">
          <label htmlFor="selfDescription">Self Description</label>
          <textarea name="Self Description" id="selfDescription" placeholder="Enter self description"></textarea>
        </div>
        <button className="generate-report">Generate Report</button>
      </div>
    </main>
  )
}

export default Home