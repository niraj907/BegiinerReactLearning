    const card = {
    padding: "10px",
    width: "300px",
    margin: "2rem",
    borderRadius: "10px",
    boxShadow: "0px 2px 2px 2px rgb(222,220,220)",
    textAlign: "center"
  };
export default function Gallary(pops) {
  return (
    <div className='card' style={card}>
      <img style={{width:"100%"}} src={pops.img} alt="" />
      <h3 style={{padding:"5px", fontSize:"20px"}}>Nature {pops.title}  Image</h3>
      <p>{pops.text}</p>
    </div>
  )
}
