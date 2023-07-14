import './App.css';
import {Link} from "react-router-dom";
import myLaptop from './assets/my-laptop.png'

function App() {
  return (
      <main className='challenges'>
          <div className="wrapper">
              <div className='challenge' style={{backgroundImage: `url(${myLaptop})`}}>
                  <Link to='/my-laptop'>
                      <button className='showChallenge'>
                          My Laptop
                      </button>
                  </Link>
              </div>
          </div>
      </main>
  );
}

export default App;
