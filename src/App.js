import React from "react";
import { Anagram } from "./components/Anagram";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const LazyStory=React.lazy(()=>import ("./components/Story"))
const LazyStoryDetails=React.lazy(()=>import("./components/StoryDetails"))
function App() {
  return (
    <div>
      <Anagram />
      <br />
      <BrowserRouter>
      <React.Suspense fallback="Loading">
      <Routes>
     
        <Route path="/" element={<LazyStory/>}/>
      <Route path="/story" element={<LazyStoryDetails/>}/>
      
      </Routes>
      </React.Suspense>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
