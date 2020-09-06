import React from "react";

const Entries = (props) => {
  console.log(props);
  const entriesInfo = props.entries.map((entry, index) => {
    console.log(entry);
    return (
      <div key={index}>
        <h3>{entry.fields.name}</h3>
        <h3>{entry.fields.date}</h3>
        <h3>{entry.fields.firstThanks}</h3>
        <h3>{entry.fields.secondThanks}</h3>
        <h3>{entry.fields.thirdThanks}</h3>
      </div>
    );
  });

  return (
    <div className="entries-list">
      <h4>Entries</h4>
      <div className='entries-info'>
        {entriesInfo}
      </div>
    </div>
  );
};

export default Entries;
