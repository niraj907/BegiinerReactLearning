import PropTypes from 'prop-types';

function Student(props) { // props is a js object

    // inline css styles
  const inline = {
    fontFamily: 'Arial, Tahoma, sans-serif',
    fontSize: '1.3em',
    padding: '10px',
    border: '1px solid hsla(0, 0%, 50%, 0.8)',
    maxWidth: '200px',
    margin: '2rem'
  };

  return (
    <div style={inline}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
};

export default Student;
