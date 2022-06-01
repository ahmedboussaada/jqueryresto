
import './App.css';
import Body from './body/body';
import Header from './header/header';
import Right from './rightside/right';
import Left from './leftside/left';
import Footer from './footer/footer';
function App() {
  return (
    <div className="container">
     <div className="item1"><Header/></div>
     <div className="item2"><Body/></div>
     <div className="item3"><Right/></div>
     <div className="item4"><Left/></div>
     <div className="item5"><Footer/></div>

    </div>
  );
}

export default App;
