import './App.css';
import Image from './Components/Image';


function App(): React.ReactNode{
  return (
    <div className="App">
      <Image/>
    </div>
  );
}

export default App;



// function Heading(): React.ReactNode{
//   return <h1>my website heading</h1>
// }

// is equal to

// const OtherHeading:React.FC =()=> <h1>my website heading</h1>