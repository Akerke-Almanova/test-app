import './App.css';
import Profile from './Profile';
import girl from "./girl.jpg"
import Silvia from "./Silvia.jpg"

function App() {
  return (
    
    <div>
      <Profile img={girl} name = "Hi! I am Silvia." age = "I am 35 years old." hobby = "I love cooking meals from fish" />
      <Profile img={Silvia} name = "Hi! I am Veronica. " age = "I am 40 years old." hobby = "I am in love with travelling and doing yoga!" />
    </div>
  );
}
export default App;

// function App(){
//   return(
//     <div>
// <Profile img="https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2FkZ2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" name ="Headphones" price="$100"/>
// <Profile img="https://images.unsplash.com/photo-1613727798351-6873d1836998?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdhZGdldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" name ="Iphone" price="$1000"/>
//     </div>
//   );
// }
// export default App;

