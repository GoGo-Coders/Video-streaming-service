import { useEffect, useState } from 'react'



export default function Nav() {
    const [show,handleShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100)
            {
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
       
        },[]);
  return (
    <div className={`nav ${show && "black"}`}>
        {console.log(show)}
       <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" />
      <div> <ul className="list">
         
               <li className="item">
                <a className={`a ${show && "acolor"}`}href="/"><b>Home</b> </a>
               </li>
              <li className='item'>
               <a  className={`a ${show && "acolor"}`}  href="/business">TV Shows</a>
               </li>
                <li className="item">
                  <a  className={`a ${show && "acolor"}`} href="/entertainment">Movies</a>
                </li >
                <li className='item'>
                    <a  className={`a ${show && "acolor"}`}  href="/business">New & Popular</a>
                    </li>
                    <li className='item'>
                    <a  className={`a ${show && "acolor"}`}  href="/business">My List</a>
                    </li>
             
           </ul>
           </div>
      <img className='nav_avatar' src="https://i.pinimg.com/1200x/c3/53/7f/c3537f7ba5a6d09a4621a77046ca926d.jpg" alt="avatar" />
    </div>
  )
}