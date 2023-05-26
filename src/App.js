import './App.css';
import Button from './components/button/button';
import { ParagraphStyleProvider } from './contexts/style-context';
import { StyleToggler } from './components/style-toggler/style-toggler';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParagraphStyleProvider>
          <StyleToggler />
        </ParagraphStyleProvider>

        < Button label="Click here to see button's label" />
      </header>
    </div>
  );
}

export default App;
