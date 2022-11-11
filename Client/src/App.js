import LandingPadeFunction from "./landingPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InstaClonePageFunction from "./instaClonePage";
import AddPost from "./addPost";

function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPadeFunction />}></Route>
                <Route path="/instaClone" element={<InstaClonePageFunction />} />
                <Route path="/addPost" element={<AddPost />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
