import React, { useState } from 'react';

const CreateEntries = (props) => {
  const [thanks, setThanks] = useState({
    name: '',
    firsThanks: '',
    secondThanks: '',
    thirdThanks: '',
    date: ''
  });

  return (
    <div className='form'>
    <form>
      <label htmlFor='name'>Name:</label>
      <input name='name' type='name' />
      <label htmlFor='1st-thanks'>1st Thanks:</label>
      <input name='1st-thanks' type='1st-Thanks' />
      <label htmlFor='2nd-thanks'>2nd Thanks:</label>
      <input name='2nd-thanks' type='2nd-Thanks' />
      <label htmlFor='3rd-thanks'>3rd Thanks:</label>
      <input name='3rd-thanks' type='3rd-Thanks' />
      <label htmlFor='date'>Date:</label>
      <input name='date' type='date' />
      <button type='Submit'>Send My Thanks</button>
    </form>
  </div>
  );
};

export default CreateEntries;