import React from "react";
import axios from "axios";

const Entries = (props) => {
  const { fetchEntries, setFetchEntries, entries, setEntries } = props;

  const handleDelete = async (id) => {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/manythanks/${id}`;
    const deletedEntry = await axios.delete(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    });
    setFetchEntries((prevEntries) => !prevEntries);
  };

  const entriesInfo = entries.map((entry, index) => {
    return (
      <div key={index} className='entries-data'>
        <h3>Name: {entry.fields.name}</h3>
        <h3>Date: {entry.fields.date}</h3>
        <h3>1st Thanks: {entry.fields.firstThanks}</h3>
        <h3>2nd Thanks: {entry.fields.secondThanks}</h3>
        <h3>3rd Thanks: {entry.fields.thirdThanks}</h3>
        <button
          id={entry.id}
          type="Delete"
          onClick={() => handleDelete(entry.id)}
        >
          Delete Entry
        </button>
      </div>
    );
  });

  return (
    <div className="entries-list">
      <h2>Journal Entries</h2>
      <div className="entries-info">{entriesInfo}</div>
    </div>
  );
};

export default Entries;
