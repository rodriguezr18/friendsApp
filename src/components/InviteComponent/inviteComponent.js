import React from "react";
// import SocialCard from "../SocialCard/socialCard"


function InviteComponent(props) {
  // const users = {
  //   user1: {
  //       name: 'Dylan',
  //       quote: 'I like coding a lot!'
  //   },
  //   user2: {
  //       name: 'Bob',
  //       quote: 'I have a hot tub you know.'
  //   },
  //   user3: {
  //       name: 'Hide',
  //       quote: 'I like pizza, car, and rock and roll'
  //   },
  //   user4: {
  //       name: 'Eric',
  //       quote: 'Luke Skywalker is my hero'
  //   }
  // }
  return (
    <div className="col-md-10 inviteComponent">
      <h4 className="componentHeader">Invites</h4>
      <button className="closeInvite" onClick={props.closeComponent}>X</button>
      <div>
          {/* need to figure out how to make this a grid */}
        <div class="row row-cols-1 row-cols-md-2 g-4">
           {/* {users.map(user => {
               <SocialCard
               name = {user.name}
               quote = {user.quote}
               />
           })} */}
        </div>
      </div>
    </div>
  );
}

export default InviteComponent;