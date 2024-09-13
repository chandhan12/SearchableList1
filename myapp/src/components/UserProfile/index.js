import './index.css';

const UserProfile = (props) => {
  const { userDetails, deleteUser } = props;
  const { name, role, imageUrl, uniqueNo } = userDetails;

  const onDeleteUser = () => {
    deleteUser(uniqueNo);
  };

  return (
    <li className="list-item">
      <img className="profilePic" src={imageUrl} alt="profilePic" />
      <div className="user-container">
        <h1 className="heading">{name}</h1>
        <p className="para">{role}</p>
        <button className="delete-button" onClick={onDeleteUser}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default UserProfile;
