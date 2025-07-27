import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = (props) => {
  const { name, startedOn, currentStatus, coach, trainer } = props;
  const titleColor = currentStatus === 'Ongoing' ? 'green' : 'blue';

  return (
    <div className={styles.box}>
      <h3 style={{ color: titleColor }}>{name}</h3>
      <dl>
        <dt>Started On:</dt>
        <dd>{startedOn}</dd>
        <dt>Current Status:</dt>
        <dd>{currentStatus}</dd>
        <dt>Coach Assigned:</dt>
        <dd>{coach}</dd>
        <dt>Trainer Assigned:</dt>
        <dd>{trainer}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
