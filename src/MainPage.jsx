import Gallary from '../src/Gallary'
import Image1 from './assets/images/image1.jpeg'
import Image2 from './assets/images/image2.jpeg'
import Image3 from './assets/images/image3.jpeg'
import Image4 from './assets/images/image4.jpg'
import Image5 from './assets/images/image5.jpg'
import Image6 from './assets/images/image6.webp'

const cardComp = {
  display : "flex",
  justifyContent : "center",
  flexWrap : "wrap",

  };

export default function MainPage() {
  return (
    <div>
      <h1 className='headling-title' style={{textAlign:"center", margin:"2rem"}}>Card Gallery</h1>

    <div className='cardComp' style={cardComp}>
    <Gallary img={Image1} title="1" text="Discover the wonders of nature with breathtaking landscapes and scenic views. Explore the beauty that surrounds us in every corner of the world." />
    <Gallary img={Image2} title="2" text="Dive into the world of art and creativity, where every stroke and color tells a story. Find inspiration in paintings, sculptures, and more." />
    <Gallary img={Image3} title="3" text="Learn about the rich history and cultural heritage that has shaped our world today. From ancient ruins to modern marvels, history lives around us." />
    <Gallary img={Image4} title="4" text="Explore the latest in technology and innovation that is transforming our lives. Stay updated with cutting-edge gadgets, AI, and more." />
    <Gallary img={Image5} title="5" text="Explore the latest in technology and innovation that is transforming our lives. Stay updated with cutting-edge gadgets, AI, and more." />
    <Gallary img={Image6} title="6" text="Learn about the rich history and cultural heritage that has shaped our world today. From ancient ruins to modern marvels, history lives around us." />
    </div>

    </div>
  )
}
