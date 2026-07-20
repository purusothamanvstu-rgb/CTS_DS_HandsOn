import React from 'react';
// Import the CSS Module stylesheet
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  // Extracting details using the EXACT names from your Cohort.js file
  const { cohortCode, technology, startDate, currentStatus, coachName, trainerName } = cohort;

  // Safety check: using currentStatus instead of status
  const safeStatus = currentStatus || "";

  // Determine font color dynamically based on safeStatus matching 'ongoing'
  const headerStyle = {
    color: safeStatus.toLowerCase() === 'ongoing' ? 'green' : 'blue'
  };

  return (
    // Apply the box class from our imported module styles object
    <div className={styles.box}>
      <h3 style={headerStyle}>{cohortCode} - {technology}</h3>
      
      <dl>
        <dt>Started On</dt>
        <dd>{startDate}</dd>
        
        <dt>Current Status</dt>
        <dd>{safeStatus}</dd>
        
        <dt>Coach</dt>
        <dd>{coachName}</dd>
        
        <dt>Trainer</dt>
        <dd>{trainerName}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;