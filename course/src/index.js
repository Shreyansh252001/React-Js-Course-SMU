//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail.js';
import ApprovalCard from './ApprovalCard.js';

//Create a react component
const left = () => {
    
   /*  function getTime()
    {
        //let date = new Date(Date.UTC());
        return new Date().toLocaleString()
    } */

//    const buttonText={joe:"hi"};

    
    window.navigator.geolocation.getCurrentPosition(
        (position)=>console.log(position),
        (err)=>console.log(err)
    )
     return(

         <div className="ui container comments">
             
             <ApprovalCard>
              <div>
                  <h4>
                      Here we go!
                  </h4>
               </div>  
             </ApprovalCard>

            <ApprovalCard>
            <CommentDetail name="e" timeAgo={"28/2 6:00 PM"} comment="a" image={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail name="d" timeAgo={"29/2 6:00 PM"} comment="b" image={faker.image.avatar()}/>
            </ApprovalCard>
            
            <ApprovalCard>
            <CommentDetail name="c" timeAgo={"1/3 7:00 PM"} comment="c" image={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail name="b" timeAgo={"4/3 9:00 PM"} comment="d" image={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail name="a" timeAgo={"28/2 6:00 PM"} comment="e" image={faker.image.avatar()}/>
            </ApprovalCard>
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
};

class App extends React.Component{
    render(){

        constructor(props){
            super(props);
        };
        
        window.navigator.geolocation.getCurrentPosition(
            (position)=>console.log(position),
            (err)=>console.log(err));

        return <div>Latitude: </div>;
    }
}
//Take the react component and show it on the browser
export default left;
ReactDOM.render(<App/>,document.querySelector('#root'));