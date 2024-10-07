import React from 'react';
import avatar from '../assets/avatar.jpg';
import coin from '../assets/coin.png';

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100">
        <div className="container-fluid">
          <a className="navbar-brand">QuestHub</a>
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
                <span className="text-light me-4">{props.userData.points + " "}<img src={coin} style={{ width: '20px', verticalAlign: 'middle' }}/></span> {/* Added Points here */}
                {/* Display Level */}
                <span className="text-light me-2">Lvl {Math.trunc(props.userData.xp / 100)}</span>
                {/* Progress Bar */}
                <div className="progress" style={{ width: '100px', height: '20px', marginRight: '10px' }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${(props.userData.xp % 1000) / 1000 * 100}%` }}
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
