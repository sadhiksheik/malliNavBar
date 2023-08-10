import {AiOutlineCaretDown,AiFillCaretRight} from "react-icons/ai"
import './App.css';

const App = () =>(
  <div className='menu-bar'>
    <img alt="logo" className='logo' src="https://www.hdwallpaper.nu/wp-content/uploads/2015/07/Honda-logo1.jpg" />
    <ul>
    <li><a href='#'>Home</a></li>
      <li>
        <a href='#'>Services <AiOutlineCaretDown size={15} color="white" /></a>

        <div className="dropdown-menu">
          <ul>
            <li><a href="#">Projects</a></li>
            <li>
              <a href="#">CASS <AiFillCaretRight className="icon" size={15} color="white" /> </a>
              <div className="dropdown-cass">
                <ul>
                    <li><a href="#">cass 1</a></li>
                    <li><a href="#">cass 2</a></li>
                    <li><a href="#">cass 3</a></li> 
                  </ul>
              </div>
              
              </li>
            <li><a href="#">S-los <AiFillCaretRight className="icon" size={15} color="white" /> s</a>
            
            <div className="dropdown-sloss">
                <ul>
                    <li><a href="#">loss 1</a></li>
                    <li><a href="#">loss 2</a></li>
                    <li><a href="#">loss 3</a></li> 
                  </ul>
              </div>

            </li>
            <li><a href="#">Organization <AiFillCaretRight className="icon" size={15} color="white" /> </a>
            
            <div className="dropdown-org">
                <ul>
                    <li><a href="#">org 1</a></li>
                    <li><a href="#">org 2</a></li>
                    <li><a href="#">org 3</a></li> 
                  </ul>
              </div>

            </li>
          </ul>
        </div>
      
      
      </li>

      
      <li><a href='#'>Contact</a></li>
    </ul>
  </div>
)

export default App;
