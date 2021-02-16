import React from "react";

function ProfileOptions(props) {
  return (
    <div className="col-md-6">
      <div className="optionsMenu">
        <h4 className="componentHeader">Options</h4>
        <div className="row">
          {/* start here */}
          <div className="col-md-12">
            <button
              className="btn optionButton submitBtn"
              onClick={event => props.friendComponentRender(event)}
            >
               My Friends
            </button>
            <br />
            <button
              className="btn optionButton submitBtn"
              onClick={event => props.socialCardRender(event)}
            >
              Socialize
            </button>
            <br />
            <a href="/">
              <button className="btn btn-danger" onClick={props.storageClear}>
                Sign Out
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileOptions;