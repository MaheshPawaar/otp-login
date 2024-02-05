import { RecoilRoot } from 'recoil';
import './App.css';
import { LoginComponent } from './components/LoginComponent';

function App() {
  return (
    <div>
      <RecoilRoot>
        <LoginComponent/>
      </RecoilRoot>
    </div>
  );
}



export default App;
