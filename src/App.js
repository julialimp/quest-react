import './App.css';
import Button from './components/button/button';
import Paragraph from './components/paragraph/paragraph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < Paragraph >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quisquam incidunt inventore. Ipsum commodi explicabo ipsa eos odit aliquam, sapiente ducimus? Ab nihil ipsam id earum, fugit in eligendi et.
        </Paragraph>

        < Button label="Click here to see button's label" />
      </header>
    </div>
  );
}

export default App;
