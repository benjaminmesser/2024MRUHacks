import React from 'react';
import avatar from '../assets/avatar.jpg';

var levelNum = 0;
var userXP = 0;
var points = -1;

function GetLevelNum(){
    return levelNum;
}

export function SetXPNum(number){
    userXP = number;
    var prevLevel = GetLevelNum();
    levelNum = Math.trunc(userXP / 100);
    if (prevLevel != levelNum){
        SetPoints(GetPoints() + 50);
    }
}

export function GetXPNum(){
    return userXP;
}

export function GetPoints(){
    return points;
}

export function SetPoints(number){
    points = number;
}

const Navbar = (props) => {
    if (points == -1){
        points = props.userData.points;
    }
    if (userXP == 0){
        userXP = props.userData.xp;
        levelNum = Math.trunc(props.userData.xp / 100);
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">QuestHub</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center">
                {/* Display Points */}
                <span className="text-light me-4">Points: {props.userData.points}</span> {/* Added Points here */}
                {/* Display Level */}
                <span className="text-light me-2">Lvl {levelNum}</span>
                {/* Progress Bar */}
                <div className="progress" style={{ width: '100px', height: '20px', marginRight: '10px' }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${(userXP % 1000) / 1000 * 100}%` }}
                  ></div>
                </div>

                {/* Avatar Dropdown */}
                <div className="dropdown">
                  <img
                    src={avatar}
                    className="rounded-circle dropdown-toggle"
                    style={{ width: '30px', height: '30px', marginTop: '10px' }}
                    id="avatarDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    alt="User Avatar"
                  />
                  <ul
                    className="dropdown-menu dropdown-menu-end bg-dark text-light"
                    aria-labelledby="avatarDropdown"
                    style={{ marginTop: '10px' }}
                  >
                    <li><a className="dropdown-item text-light custom-dropdown-item" href="#">Profile</a></li>
                    <li><a className="dropdown-item text-light custom-dropdown-item" href="#">Settings</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item text-light custom-dropdown-item" href="#">Logout</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
