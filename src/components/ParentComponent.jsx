// ParentComponent.js
import React, { useState } from 'react';
import Login from '../pages/Login/Login';
import Navbar from '../components/navbar/navbar';

const ParentComponent = () => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <Login setEmail={setEmail} />
      <Navbar email={email} />
    </div>
  );
};

export default ParentComponent;
