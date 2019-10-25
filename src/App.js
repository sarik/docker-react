import React, { useContext,useState } from "react";
import "./App.css";

const PostContext = React.createContext();

const Parent = props => {
  const posts = [
    { id: 1, name: "Post1" },
    { id: 2, name: "Post2" },
    { id: 3, name: "Post3" },
    { id: 4, name: "Post4" },
    { id: 5, name: "Post5" },
    { id: 6, name: "Post6" },
    { id: 7, name: "Post7" },
    { id: 8, name: "Post8" },
    { id: 9, name: "Post9" },
    { id: 10, name: "Post10" },
    { id: 11, name: "Post11" },
    { id: 12, name: "Post12" },
    { id: 13, name: "Post13" },
    { id: 14, name: "Post14" },
    { id: 15, name: "Post15" }
  ];
  const limit = 4;

  const returnPaginatedResult = i => {
    let postToReturn = posts.slice(
      parseInt(i) * limit,
      parseInt(i) * limit + limit
    );
    postHandler(postToReturn);
  };

  const [postToRender, postHandler] = useState(posts.slice(0,4));
  const noOfPages = Math.ceil(posts.length / limit);
  return (
    <div>
      {
          <div>
        <PostContext.Provider value={postToRender}>
        {props.children}
      </PostContext.Provider>
      

        <ul style = {{top:'200px',position:'absolute'}}>
          {Array.from(Array(noOfPages), (e, i) => {
            return (
              <li key={i} style = {{display:'inline-block',margin:'10px'}} onClick={e => returnPaginatedResult(i)}>
                {i + 1}
              </li>
            );
          })}
        </ul>
        </div>
      }
     
    </div>
  );
};

const Child = () => {
  const postToRender = useContext(PostContext);

  return (
    <div>
      {postToRender.map(val => {
        return (
          <div>
            {val.id} :: {val.name}
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Parent>
        <Child></Child>
      </Parent>
    </div>
  );
};
export default App;
