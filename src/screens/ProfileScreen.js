import { getAuth } from "@firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/counter/userSlice";
import Navbar from "../Navbar";
import "./ProfileScreen.css";
import { useHistory } from "react-router";

const plans = [
  { name: "Premium", description: "4k + HDR", price: "12.99" },
  { name: "Standard", description: "1080p", price: "9.99" },
  { name: "Basic", description: "720p", price: "6.99" },
];

function ProfileScreen() {
  const user = useSelector(selectUser);
  const history = useHistory();

  function signOut() {
    getAuth().signOut();
    history.push("/");
  }

  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              {plans.map((plan) => {
                return (
                  <div className="profileScreen__plan">
                    <div className="profileScreen__description">
                      <h4>{plan.name}</h4>
                      <h5>{plan.description}</h5>
                      {/* <h5>{plan.price}</h5> */}
                    </div>
                    <button>Subscribe</button>
                  </div>
                );
              })}

              <button onClick={signOut} className="profileScreen__signOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
