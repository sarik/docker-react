import React, { useContext, useState, useReducer ,useEffect} from "react";

import "./App.css";

const ColorContext = React.createContext();

const ColorReducer = (state,action) =>{

  switch(action.type){
    case 'CLEAR':{
      console.log('inside clear');
      return {...state, color:action.payload};

    }

    case 'DARK':{
      console.log('inside dark');
      return {...state, color:action.payload};
    }

    default: return state;
  }

}

const Parent = props => {
  const [color,setColor] = useState('black');

  useEffect(() => {
    // Update the document title using the browser API
    document.getElementById('ch').value = `Current color ${state.color}`;
    console.log('inside dispatch')
  },[]);

  const [state,dispatch] = useReducer(ColorReducer,{color:'yellow'});
 
  console.log(state)
  return (
  <div>
    <input type = "text" id = "ch"/>
    <ColorContext.Provider value={[color,setColor]}>

    {state.color}
   
      {props.children}

      <input type = 'text' onChange = {e => setColor(e.target.value) } value = {color}/>
      <button onClick = {e => {e.preventDefault(); dispatch({type:'CLEAR',payload:color})}}>Dispatcher</button>
      <button onClick = {e => {e.preventDefault(); dispatch({type:'DARK',payload:'GREEN'})}}>Dark</button>
      <button onClick = {e => {e.preventDefault(); setColor()}}>State changer</button>
    </ColorContext.Provider>
  </div>
)};

const Child = props => {
  const [color,setColor]= useContext(ColorContext);
  

  return (
    <div> Coming from Parent::  {color} 
    {/* <ColorContext.Consumer>
      {([color,setColor]) => (
        <button
          onClick={setColor}>
         
          {color}
        </button>
      )}
    </ColorContext.Consumer> */}
    </div>
    )

   
}

const App = props => {
 return (<div><Parent><Child></Child></Parent></div>)
};

export default App;
