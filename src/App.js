import pictureUrl from "../public/picture.png";

const App = () => {
  return (
    <div id="App">
      <span id="hello-world">Hello World</span>
      <img id="pixel-alien" src={pictureUrl} />
    </div>
  );
};

export default App;
