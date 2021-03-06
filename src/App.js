import { BrowserRouter, Route, Switch } from "react-router-dom";
import GamePage from "./screens/GamePage";
import GalleryPage from "./screens/GalleryPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={GalleryPage} />
        <Route path="/games/:id" component={GamePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
