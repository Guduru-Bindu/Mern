import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

function ProfileComponent() {
  const { user, updatePassword } = useContext(UserContext);
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    updatePassword(newPassword);
    setNewPassword('');
  };

  if (!user) return <div>Please log in</div>;

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
}

export default ProfileComponent;
