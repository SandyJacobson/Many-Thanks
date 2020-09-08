import React, { useState } from "react";
import axios from "axios";

const CreateEntries = (props) => {
  const [name, setName] = useState("");
  const [firstThanks, setFirstThanks] = useState("");
  const [secondThanks, setSecondThanks] = useState("");
  const [thirdThanks, setThirdThanks] = useState("");
  const [date, setDate] = useState("");
  const { fetchEntries } = props

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = {
      name,
      firstThanks,
      secondThanks,
      thirdThanks,
      date,
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/manythanks`;
    await axios.post(
      airtableURL,
      { fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    props.setFetchEntries(prevEntries => !prevEntries);
    setName("");
    setFirstThanks("");
    setSecondThanks("");
    setThirdThanks("");
    setDate("");
  };



  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="1st-thanks">1st Thanks:</label>
        <input
          name="1st-thanks"
          type="1st-Thanks"
          value={firstThanks}
          onChange={(event) => setFirstThanks(event.target.value)}
        />
        <label htmlFor="2nd-thanks">2nd Thanks:</label>
        <input
          name="2nd-thanks"
          type="2nd-Thanks"
          value={secondThanks}
          onChange={(event) => setSecondThanks(event.target.value)}
        />
        <label htmlFor="3rd-thanks">3rd Thanks:</label>
        <input
          name="3rd-thanks"
          type="3rd-Thanks"
          value={thirdThanks}
          onChange={(event) => setThirdThanks(event.target.value)}
        />
        <label htmlFor="date">Date:</label>
        <input
          name="date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <button type="Submit">Send My Thanks</button>
      </form>
    </div>
  );
};

export default CreateEntries;
