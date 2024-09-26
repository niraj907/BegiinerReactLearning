import Img from './assets/images/pizza.jpg'

export default function Image() {
  return (
    <div style={{marginLeft:"2rem" }}  >
      <h1>First Way of Image </h1>
      <img style={{width:"40%" }} src="https://assets.goal.com/images/v3/blte9bf3e1450927e9c/GOAL_-_Blank_WEB_-_Facebook_-_2023-10-23T123757.662.jpg?auto=webp&format=pjpg&width=3840&quality=6" alt="cr7" />
     
      <h1>Second Way of Image </h1>
   <img style={{width:"30%"}} src={Img} alt="pizza" />


    </div>
  )
}
