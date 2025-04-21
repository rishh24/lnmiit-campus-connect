import React, { useState, useRef, useEffect } from "react";
import "./hatDedication.scss";
import { FaInfoCircle, FaUserGraduate, FaHatCowboy } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import ProfPic from "../../assets/images/img1.jpg";
import Profile from "../../assets/images/profile.png";
import GoldHat from "../../assets/images/goldHat.png";

const alumniList = ["Ekamjot Singh", "Aman Verma", "Priya Sharma", "Rahul Mehta"];

const fakeDedications = [
  {
    id: 1,
    giver: { name: "Rishika Manocha", profilePic: ProfPic },
    receiver: { name: "Ekamjot Singh", profilePic: Profile },
    message: "Thank you for your constant support, guidance, and encouragement throughout this journey. Your willingness to share knowledge, your patience in answering our questions, and your inspiring work ethic have truly made a lasting impact. We’re grateful for all the time and effort you invested in helping us grow — your mentorship has meant more than words can express. Wishing you continued success ahead!",
    hatImage: GoldHat,
    timestamp: "March 26, 2025",
  },
];

const HatDedication = () => {
  const [dedications, setDedications] = useState(fakeDedications);
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const inputRef = useRef(null);
  const suggestionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(e.target) &&
        !inputRef.current.contains(e.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setReceiver(value);

    if (value.trim() === "") {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = alumniList.filter((name) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (name) => {
    setReceiver(name);
    setShowSuggestions(false);
    setFilteredSuggestions([]);
  };

  const handleDedication = () => {
    const match = alumniList.find(
      (alum) => alum.toLowerCase() === receiver.trim().toLowerCase()
    );

    if (!receiver || !message) {
      setError("Please fill in all fields.");
      return;
    }

    if (!match) {
      setError("You can only dedicate hats to alumni.");
      return;
    }

    const newDedication = {
      id: dedications.length + 1,
      giver: { name: "Rishika Manocha", profilePic: ProfPic },
      receiver: { name: match, profilePic: Profile },
      message,
      hatImage: GoldHat,
      timestamp: "Just now",
    };

    setDedications([newDedication, ...dedications]);
    setReceiver("");
    setMessage("");
    setError("");
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="hatDedication">
      {/* Header */}
      <div className="header">
        <img src={ProfPic} alt="Profile" className="profilePic" />
        <h2>Rishika Manocha</h2>
        <p>Hats Dedicated: {dedications.filter((d) => d.giver.name === "Rishika Manocha").length}</p>
      </div>

      {/* Info Section */}
      <div className="infoSection">
        <FaInfoCircle className="infoIcon" />
        <h3>What is Hat Dedication?</h3>
        <p><FaUserGraduate className="icon" /> Dedicate hats to alumni who have helped you.</p>
        <p><FaHatCowboy className="icon" /> Hats symbolize appreciation with a personal message.</p>
      </div>

      {/* Form */}
      <div className="dedicationForm">
        <h3>Dedicate a Hat</h3>
        {error && <p className="error"><MdErrorOutline className="errorIcon" /> {error}</p>}
        
        <div className="inputWrapper" ref={suggestionRef}>
          <input
            type="text"
            placeholder="Enter recipient's name (Alumni Only)"
            value={receiver}
            onChange={handleInputChange}
            ref={inputRef}
            autoComplete="off"
          />
          {showSuggestions && filteredSuggestions.length > 0 && (
            <ul className="suggestionsList">
              {filteredSuggestions.map((name, idx) => (
                <li key={idx} onClick={() => handleSuggestionClick(name)}>
                  {name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <textarea
          placeholder="Write a dedication message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={handleDedication}>Dedicate</button>
      </div>

      {/* Dedications */}
      <div className="dedicationsList">
        <h3>Dedications</h3>
        {dedications.length > 0 ? (
          dedications.map((dedication) => (
            <div className="dedicationItem" key={dedication.id}>
              <div className="dedicationHeader">
                <div className="dedicationInfo">
                  <img src={dedication.receiver.profilePic} alt="receiver" className="profileImage" />
                  <p className="dedicationText">
                    Dedicated to <strong>{dedication.receiver.name}</strong><br />
                    <span className="timestamp">{dedication.timestamp}</span>
                  </p>
                </div>
                <img src={dedication.hatImage} alt="Hat" className="hatImage" />
              </div>
              <p className="dedicationMessage">❝ {dedication.message} ❞</p>
            </div>
          ))
        ) : (
          <p>No dedications yet.</p>
        )}
      </div>
    </div>
  );
};

export default HatDedication;
