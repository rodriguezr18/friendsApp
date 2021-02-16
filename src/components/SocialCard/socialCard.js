import React from "react";

function SocialCard(props) {
  return (  
    <div class="col-md-3 card socialCard">
      {/* start here */}
        <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.quote}</p>
            <button class="btn btn-primary" value={props.id} onClick={e => props.addFriend(e)}>Add Friend</button>
        </div>
    </div>
  );
}

export default SocialCard;