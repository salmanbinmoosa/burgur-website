import logo from './logo.svg';
import './App.css';

function App() {
  return (
<>
<header className="flex">
    <div className="logo">
      <img src="burgur-assets/Group (2).png" alt="" />
    </div>
    <nav className="flex">
      <ul className="flex">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Burgurs</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
      <button>Order now</button>
    </nav>
  </header>
  {/* header end */}

  {/* sec 1 */}
  <section className="flex hero">
    <div className="left">
      <p className="para-b">Label goes here</p>
      <h1 className="heading">Best burger in town</h1>
      <p className="para" >
        Welcome to Burger Bliss, where we take your cravings to a whole new
        level! Our mouthwatering burgers are made from 100% beef and are served
        on freshly baked buns.
      </p>
      <button className="btn">Explore</button>
    </div>
    <div className="right">
      <img src="burgur-assets/Placeholder image (1).png" alt="" />
    </div>
  </section>

    {/* sec 1 */}

  {/* sec 2 */}
  <section className="flex sec-2">
    <div className="headinggg">
      <h2 className="heading">Best burger in town</h2>
    </div>
    <div className="wrap flex">
      <div className="left">
        <p className="para-b">Best burger in town</p>
        <p className="para">
          Welcome to Burger Bliss, where we take your cravings to a whole new
          level! Our mouthwatering burgers are made from 100% beef and are
          served on freshly baked buns.
        </p>
        <button className="btn">Do Something</button>
      </div>
      <div className="right">
      <img src="burgur-assets/Placeholder image (1).png" alt="" />
      </div>
    </div>
    <div className="wrap flex">
      <div className="left">
        <p className="para-b">Best burger in town</p>
        <p className="para">
          Welcome to Burger Bliss, where we take your cravings to a whole new
          level! Our mouthwatering burgers are made from 100% beef and are
          served on freshly baked buns.
        </p>
        <button className="btn">Do Something</button>
      </div>
      <div className="right">
      <img src="burgur-assets/Placeholder image (1).png" alt="" />
      </div>
    </div>
  </section>
  {/* sec three */}
  <section className='sec-4'>
    <div className="headinggg">
      <h2 className="heading">We took the burger to the next level</h2>
    </div>
    <article>
      <p>
        Welcome to Burger Bliss, where we take your cravings to a whole new
        level! Our mouthwatering burgers are made from 100% beef and are served
        on freshly baked buns. Our{" "}
      </p>
      <p>
        Welcome to Burger Bliss, where we take your cravings to a whole new
        level! Our mouthwatering burgers are made from 100% beef and are served
        on freshly baked buns. Our{" "}
      </p>
    </article>
    <div className="sec-img">
      <img src="burgur-assets/Placeholder image.png" alt="" />
    </div>
  </section>


</>    
  );
}

export default App;
