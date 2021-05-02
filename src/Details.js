import React, { useState, useEffect, useContext } from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

const Details = ({ id }) => {
  const [theme, setTheme] = useContext(ThemeContext);

  const [details, setDetails] = useState({ loading: true, showModal: false });
  const toggleModal = () => setDetails({ showModal: !details.showModal });
  const adopt = () => navigate(details.url);

  const getDetails = () => {
    pet.animal(id).then(({ animal }) => {
      setDetails({
        url: animal.url,
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos.length
          ? animal.photos[0].medium
          : "http://placecorgi.com/600/600",
        breed: animal.breeds.primary,
        loading: false,
      });
    });
  };

  useEffect(() => {
    getDetails();
  }, []);

  return details.loading ? (
    <div className="details">
      <h1>Loading Pet ...</h1>
    </div>
  ) : (
    <div className="details">
      <div className="carousel">
        <img src={details.media} alt="photo" />
      </div>
      <div>
        <h1>{details.name}</h1>
        <h2>{`${details.animal} — ${details.breed}`}</h2>
        <h3>{details.description}</h3>
        <button
          style={{ backgroundColor: theme.bg, color: theme.txt }}
          onClick={toggleModal}
        >
          Adopt {details.name} !!!
        </button>
      </div>
      {details.showModal ? (
        <Modal>
          <div>
            <h1>Would you like to adopt {name}?</h1>
            <div className="buttons">
              <button onClick={adopt}>Yes</button>
              <button
                onClick={() => {
                  toggleModal();
                  getDetails();
                }}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Details;
