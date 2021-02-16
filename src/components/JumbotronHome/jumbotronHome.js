import React from "react";

function JumbotronHome({ children }) {
  return (
    <div className="jumbotron jumbotron-fluid">
     <div className="container welcome-container">
         <div className="row">
             {children}
         </div>
     </div>
    </div>
  );
}

export default JumbotronHome;
