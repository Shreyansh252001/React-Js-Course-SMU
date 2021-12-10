//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail.js';


//Create a react component
const App = () => {
    
   /*  function getTime()
    {
        //let date = new Date(Date.UTC());
        return new Date().toLocaleString()
    } */

//    const buttonText={joe:"hi"};

     return(
         <div className="ui container comments">
            <CommentDetail name="e" timeAgo={"28/2 6:00 PM"} comment="a" image={faker.image.avatar()}/>
            <CommentDetail name="d" timeAgo={"28/2 6:00 PM"} comment="b" image={faker.image.avatar()}/>
            <CommentDetail name="c" timeAgo={"28/2 6:00 PM"} comment="c" image={faker.image.avatar()}/>
            <CommentDetail name="b" timeAgo={"28/2 6:00 PM"} comment="d" image={faker.image.avatar()}/>
            <CommentDetail name="a" timeAgo={"28/2 6:00 PM"} comment="e" image={faker.image.avatar()}/>
            {/*  <div className="comment">
                 <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                 </a>

                 <div className="content">
                     <a href="/" className="author">
                        Sam
                     </a>
                 
                 <div className="metadata">
                     <span className="date">
                         Today at 6:00PM
                     </span>
                 </div>
                 </div>
                 <div className="text">Nice blog post! </div>
             </div> */}
             {/* <label className="label" htmlFor="name">Enter Name:</label>
             <input id="name" type="text"/>
             <button style={{ backgroundColor:'blue',color:'white' }}>{getTime()}</button> */}
             
        </div>
     )
}
//Take the react component and show it on the browser

ReactDOM.render(<App/>,document.querySelector('#root'));