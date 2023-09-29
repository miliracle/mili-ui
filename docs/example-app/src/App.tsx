import {Button, ButtonType, Icons} from 'mili-ui';
import "mili-ui/style.css"
import "./App.css"

function App() {
  return (
    <div className='mili app'>
      <Button buttonType={ButtonType.PRIMARY}>
        Button text
      </Button>
      <Button buttonType={ButtonType.SECONDARY} leftIcon={<Icons.Accept />}>
        Button text
      </Button>
      <Button buttonType={ButtonType.TERTIARY} rightIcon={<Icons.Accept />}>
        Button text
      </Button>
      <Button leftIcon={<Icons.Accept />}/>
      <Button buttonType={ButtonType.TEXT} leftIcon={<Icons.Accept />}>
        Button text
      </Button>
    </div>
  );
}

export default App;
