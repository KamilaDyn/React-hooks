import React, { useEffect, useState} from 'react';


const LifeCycleMethod =()=>{
  useEffect(()=>{
    console.log('render me');
    return console.log('unmount me now ')
  })
  return 'life cycle with useEffect.'
}

const App = () => {

  const [random, setRandom] = useState(Math.random());
  const [mounted, setMounted] = useState(true);
  
  const reRender =()=>setRandom(Math.random());
  const toggleMount = ()=> setMounted(!mounted)
  return (
    <div>
     <button onClick={reRender}>Re-render</button>
     <button onClick={toggleMount}>Show and Hide lifeCycle with use Effect</button>
     {mounted && <LifeCycleMethod />}
    </div>
  );

}

export default App;