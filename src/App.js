import AlertButton from './components/alertButton/index';
import { ParagraphStyleProvider } from './contexts/style-context';
import { StyleToggler } from './components/style-toggler/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParagraphStyleProvider>
          <StyleToggler />
        </ParagraphStyleProvider>

        < AlertButton label="Click here to see button's label" />
      </header>
    </div>
  );
}

export default App;
