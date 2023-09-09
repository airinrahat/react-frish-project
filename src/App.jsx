
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
  // const [count, setCount] = useState(0)

  function handle(){
    alert('clicked')
  }
const addToFive = (num) => {
  alert(num+5);
}

  return (
    <>
      
      <h3 > React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handle}>click me</button>
      <button onClick={() => {alert('oi click kor')}}>clike me 2</button>
      <button onClick={() => addToFive(6)}>five</button>
    
    
    </>
  )
}

export default App
