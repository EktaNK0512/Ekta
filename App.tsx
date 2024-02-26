import './App.css';
import NavBar from './NavBar';
import SignIn from './SignIn';
import SignUp from './SignUp';
// import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SignIn />
      <SignUp />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
