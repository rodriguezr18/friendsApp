import React from "react";

function UserCard(props) {
  return (
    <div class="card profileCard">
        <img src="https://i.pinimg.com/originals/38/5f/1c/385f1c3ea38988072022417bf0f5eb82.jpg" id="profilePic" class="card-img-top mx-auto" alt="Cal Naughton Jr"></img>
    <div class="card-body">
        <h5 class="card-title">{props.user_name}</h5>
        <p class="card-text">{props.quote}</p>
    </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Location: Charlotte NC</li>
            <li class="list-group-item">Job: Fun Haver</li>
        </ul>
    </div>
  );
}

export default UserCard;