import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <h2>Cohorts Details</h2>
      <CohortDetails
        name="INTADMIP10F - .NET FSD"
        startedOn="22-Feb-2022"
        currentStatus="Ongoing"
        coach="John Peter"
        trainer="Priya Jose"
      />
      <CohortDetails
        name="ADMJZJ10F4 - Java FSD"
        startedOn="30-Sep-2021"
        currentStatus="Completed"
        coach="Anu George"
        trainer="Reshma"
      />
      <CohortDetails
        name="CDBJFI20F5 - Java FSD"
        startedOn="26-Jun-2021"
        currentStatus="Completed"
        coach="Latha Mani"
        trainer="John Doe"
      />
    </div>
  );
}

export default App;
