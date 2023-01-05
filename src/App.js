import './App.css';
import MissileCard from './Component/Card';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <nav className='nav'>
            <img className='img' src='dedsekwars.png' alt='0' />

            <div>
              <button className='btn'>HOME</button>
              <button className='btn'>ABOUT</button>
              <button className='btn'>GALLERY</button>
              <button className='btn'>NEWS</button>
              <button className='btn'>CONTACT</button>
            </div>
            <input type="text" placeholder="Search here" />
          </nav>
        </header>
        <br></br> <br></br> <br></br> <br></br><br></br>
        <div className='warning'>
          <h1 className='h1'>Warning!</h1>
          <p className='p'>DedSeK corporation is not responsible for any damage resulted from the misuse of our missiles.</p>
        </div>
        <br></br> <br></br> <br></br> <br></br><br></br>
        <div className='p_list'>
          <MissileCard model="Agni-V" description="Intercontinental B. missile" missile="missile1.png" />
          <MissileCard model="Prithvi I" description="Short-Range Ballistic Missile" missile="missile2.png" />
          <MissileCard model="Dhanush" description="Long-Range Nuclear Missile" missile="missile3.png" />
        </div>
        <br></br> <br></br> <br></br> <br></br><br></br>
        <table className='table'>
          <tr className='firstline'>
            <th className='th_text'>Image</th>
            <th className='th_text'>Model Name</th>
            <th className='th_text'>Description</th>
            <th className='th_text'>Status</th>
          </tr>
          <tr className='hh2'>
            <td>Image placeholder</td>
            <td>Model name placeholder</td>
            <td>Description placeholder</td>
            <td>Bought</td>
          </tr>
        </table>

      </div>
      <footer className='footer'>
        <p className='f_text'>All rights are NOT reserved to DedSeK Corp. 2023</p>
      </footer>
    </>
  );
}

export default App;
