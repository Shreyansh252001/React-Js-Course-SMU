import React from "react";


const ApprovalCard = props => {
 // console.log(props);
   
  return (
    <div className="ui card">
      {props.children}
      {/* <div className="content">Are you Sure ?
      
  </div>*/}
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic red button">
            Approve
            </div> 
              <div className="ui basic green button">
              Reject
              </div>
        </div>
      </div> 
    </div>
  );
};

export default ApprovalCard;
