import User from "../src/User"
import Guest from "../src/Guest"
export default function UserRegister({consumers}) {
    console.log('Consumer prop:', consumers);
//  const iSRegistered = consumers;
//  if (iSRegistered) {
//      return <User/>
//  }else{
//      return <Guest/>
//  }

    // Check if consumers is true, assuming it's a boolean
    const isRegistered = Boolean(consumers); 

    // Use ternary operator to render User or Guest component
    return isRegistered ? <User /> : <Guest />;

}
