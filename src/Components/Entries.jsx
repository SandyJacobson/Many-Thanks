import React from "react";
import axios from "axios";

const Entries = (props) => {
  // const {
  //   name,
  //   firstThanks,
  //   secondThanks,
  //   thirdThanks,
  //   date,
  // } = props.entry.fields;
  const { fetchEntries, setFetchEntries, entries, setEntries } = props;

  const handleDelete = async (id) => {
    // const id = event.target.id
    console.log(`deleted-id: ${id}`)
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/manythanks/${id}`;
    const deletedEntry = await axios.delete(airtableURL, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      }
    });
    console.log(deletedEntry)
    console.log('deleted')
    setFetchEntries(prevEntries => !prevEntries)
    console.log('sure its deleted')
  };

  const entriesInfo = entries.map((entry, index) => {
    return (
      <div key={index}>
        {console.log(fetchEntries)}
        <h3>Name: {entry.fields.name}</h3>
        <h3>Date: {entry.fields.date}</h3>
        <h3>1st Thanks: {entry.fields.firstThanks}</h3>
        <h3>2nd Thanks: {entry.fields.secondThanks}</h3>
        <h3>3rd Thanks: {entry.fields.thirdThanks}</h3>
        <button id={entry.id} type="Delete" onClick={() => handleDelete(entry.id)}>
          Delete Entry
        </button>
      </div>
    );
  });

  return (
    <div className="entries-list">
      <h2>Entries</h2>
      <div className="entries-info">{entriesInfo}</div>
    </div>
  );
};

export default Entries;
