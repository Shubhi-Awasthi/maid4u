import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import MaidCard from './MaidCard';
import background from '../Assets/background.jpg';
import maid1 from '../Assets/maid.png';
import maid2 from '../Assets/maid.png';
import maid3 from '../Assets/maid.png';
import maid4 from '../Assets/maid.png';
import maid5 from '../Assets/maid.png';
import maid6 from '../Assets/maid.png';
import checkmarkImg from '../Assets/checkmark.jpg';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [maids, setMaids] = useState([
    { name: 'maid1', age: 30, location: 'Greater Noida',gender: 'female', experience: 5, image: maid1 },
    { name: 'maid2', age: 25, location: 'Delhi', gender: 'female', experience: 3, image: maid2 },
    { name: 'maid3', age: 28, location: 'Etawah',gender: 'female', experience: 4, image: maid3 },
    { name: 'maid4', age: 32, location: 'Noida',gender: 'female', experience: 6, image: maid4 },
    { name: 'maid5', age: 29, location: 'Faridabad',gender: 'male', experience: 7, image: maid5 },
    { name: 'maid6', age: 27, location: 'Ghaziabad',gender: 'male', experience: 2, image: maid6 },
  ]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedMaid, setSelectedMaid] = useState(null);
  const [showSlotSelection, setShowSlotSelection] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTimeSlots = async () => {
      const fetchedTimeSlots = ['09:00 AM - 11:00 AM', '11:00 AM - 01:00 PM', '01:00 PM - 03:00 PM', '03:00 PM - 05:00 PM', '05:00 PM - 07:00 PM'];
      setTimeSlots(fetchedTimeSlots);
    };
    fetchTimeSlots();
  }, []);

  useEffect(() => {
    let timeout;
    if (showPopup) {
      timeout = setTimeout(() => {
        setShowPopup(false);
      }, 5000); // 5 seconds timeout
    }
    return () => clearTimeout(timeout);
  }, [showPopup]);

  const filteredMaids = maids.filter(maid =>
    maid.location.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedGender === '' || maid.gender === selectedGender)
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const loadMoreMaids = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  const handleViewDetails = (maid) => {
    setSelectedMaid(maid);
  };

  const handleBookNow = () => {
    setShowSlotSelection(true);
  };

  const handleSlotSelection = () => {
    if (selectedTimeSlot && selectedDate) {
      setShowSlotSelection(false);
      setShowPopup(true);
    } else {
      alert('Please select a time slot and a date.');
    }
  };

  const closeDetails = () => {
    setSelectedMaid(null);
    setSelectedTimeSlot('');
    setSelectedDate('');
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <Layout>
      <div style={styles.container}>
        {/* <button onClick={() => navigate(-1)} style={styles.backButton}>Back</button> */}
        <div style={styles.filters}>
        <input
          type="text"
          placeholder="Search for your location"
          value={searchTerm}
          onChange={handleSearch}
          style={styles.searchInput}
        />
        <select
          value={selectedGender}
          onChange={handleGenderChange}
          style={styles.genderSelect}
        >
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
        <div style={styles.grid}>
          {filteredMaids.slice(0, visibleCount).map((maid, index) => (
            <MaidCard
              key={index}
              maid={maid}
              onViewDetails={handleViewDetails}
              onBookNow={handleBookNow}
            />
          ))}
        </div>
        {filteredMaids.length > visibleCount && (
          <button onClick={loadMoreMaids} style={styles.loadMoreButton}>
            See More
          </button>
        )}
        {selectedMaid && (
          <div style={styles.detailsOverlay}>
            <div style={styles.detailsContainer}>
              <button onClick={closeDetails} style={styles.closeButton}>×</button>
              <img src={selectedMaid.image} alt={selectedMaid.name} style={styles.detailsImage} />
              <h2>{selectedMaid.name}</h2>
              <p>Age: {selectedMaid.age}</p>
              <p>Location: {selectedMaid.location}</p>
              <p>Experience: {selectedMaid.experience} years</p>
              <button onClick={handleBookNow} style={styles.bookNowButton}>Book Now</button>
            </div>
          </div>
        )}
        {showSlotSelection && (
          <div style={styles.slotSelectionOverlay}>
            <div style={styles.slotSelectionContainer}>
              <button onClick={() => setShowSlotSelection(false)} style={styles.closeButton}>×</button>
              <h2>Select Time Slot</h2>
              <select
                value={selectedTimeSlot}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
                style={styles.slotSelect}
              >
                <option value="">Select a time slot</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                style={styles.dateInput}
              />
              <button onClick={handleSlotSelection} style={styles.doneButton}>Done</button>
            </div>
          </div>
        )}
        {showPopup && (
          <div style={styles.popupOverlay}>
            <div style={styles.popupContainer}>
              {/* <button onClick={closePopup} style={styles.closeButton}>×</button> */}
              <div style={styles.checkmarkContainer}>
                <img src={checkmarkImg} alt="Checkmark" style={styles.checkmark} />
              </div>
              <div style={styles.popupMessage}>Your booking has been confirmed! We will Contact You Soon</div>
              <button onClick={closePopup} style={styles.popupCloseButton}>Close</button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '20px',
    // backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  filters: {
    display: 'flex',
    justifyContent: 'center', // Center items horizontally
    alignItems: 'center',
    marginBottom: '20px',
    gap: '20px', // Space between filters
  },
  searchInput: {
    padding: '10px',
    width: '400px', // Set a fixed width for better alignment
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
  },
  genderSelect: {
    padding: '10px',
    width: '200px', // Set a fixed width for consistency
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px', // Space between grid items
  },
  loadMoreButton: {
    display: 'block',
    margin: '20px auto',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
  detailsOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  detailsContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    maxWidth: '500px',
    position: 'relative',
  },
  detailsImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '30px',
    height: '30px',
    border: 'none',
    backgroundColor: 'black',
    color: 'white',
    cursor: 'pointer',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookNowButton: {
    marginTop: '10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#28a745',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
  slotSelectionOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  slotSelectionContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
  },
  slotSelect: {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  dateInput: {
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  doneButton: {
    marginTop: '10px',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  popupContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
  },
  checkmarkContainer: {
    marginBottom: '10px',
  },
  checkmark: {
    width: '50px',
    height: '50px',
  },
  popupMessage: {
    fontSize: '16px',
    margin: '10px 0',
  },
  popupCloseButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
};



export default HomePage;
