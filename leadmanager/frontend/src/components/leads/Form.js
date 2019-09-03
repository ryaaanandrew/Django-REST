import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name, email, message)
  };

  return(
    <div className="card card-body mt-4 mb-4">
      <h2>Add Lead</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input 
            className="form-control"
            type="text" 
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
        </div>
        <div className="form-group">
        <label>Email</label>
          <input 
            className="form-control"
            type="text" 
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
        </div>
        <div className="form-group">
        <label>Message</label>
          <input 
            className="form-control"
            type="text" 
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
