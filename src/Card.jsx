import profilePic from './assets/images/image1.jpeg'; // profile image

function Card() {

    // Internal styling we have to write the style name in a camelCase eg borderRadius,boxShadow

  const cardStyle = {
    padding: "10px",
    border: "2px solid black",
    width: "200px",
    margin: "2rem",
    borderRadius: "10px",
    boxShadow: "5px 5px 5px hsla(0%, 0%, 0%, 0.1)",
    textAlign: "center"
  };

  const cardImageStyle = {
    maxWidth: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "1rem"
  };

  const cardTitleStyle = {
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "gray"
  };

  const cardDescStyle = {
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "grey"
  };



  return (
    <div style={cardStyle}>
      <img style={cardImageStyle} src={profilePic} alt="profile picture" />
      <h2 style={cardTitleStyle}>BIT</h2>
      <p style={cardDescStyle}>I am a student of Herald College Kathmandu.</p>
         {/* inline css */}
         <p style={{color:"grey"}}>I am a student of Herald </p>
    </div>
  );
}

export default Card;
