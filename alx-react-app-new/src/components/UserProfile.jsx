const UserProfile = (props) => {
  return (
    <div>
      <h2
        style={{
          color: "lightblue",
          fontFamily: "poppins",
          textDecoration: "underline",
        }}
      >
        {props.name}
      </h2>
      <p
        style={{
          fontFamily: "poppins",
          border: "1px solid lightblue",
          padding: "5px",
          color: "lightblue",
          fontSize: "20px",
        }}
      >
        Age: {props.age}
      </p>
      <p
        style={{
          color: "lightblue",
          fontFamily: "poppins",
          letterSpacing: "2px",
          fontWeight: "bold",
        }}
      >
        Bio: {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;
