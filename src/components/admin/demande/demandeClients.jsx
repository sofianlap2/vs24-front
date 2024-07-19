import React, { useState, useEffect } from 'react';
import './DemandeClients.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CloseIcon,Icon } from './clientElement';
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { ToastContainer, toast } from 'react-toastify';
import BackgroundVideo from "../../../videos/Bochra.mp4";

import 'react-toastify/dist/ReactToastify.css';
const DemandeClients = ({ setShowDemandeClients }) => {
  const navigate = useNavigate();
  const [selectedGovernorate, setSelectedGovernorate] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [cities, setCities] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const appUrl = import.meta.env.VITE_REACT_APP_BASE_URL;


  const [reqBody, setReqBody] = useState({
    nomEntreprise:'',
    fullName: '',
    email: '',
    phoneNumber: '',
    phoneNumber2: '',
    gouvernorat:'',
    ville:'',
    messageDemande:'',
    metier:'',
    typeDemande:'CLIENT',
  });

  useEffect(() => {
    const fetchCities = async (gouvernorat) => {
      try {
        const response = await axios.get(`${appUrl}/espacePublic/cities/${gouvernorat}`);
        setCities(response.data);
      } catch (error) {
      }
    };
  
    if (selectedGovernorate) {
      fetchCities(selectedGovernorate);
    }
  }, [selectedGovernorate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${appUrl}/demandes/demandeClient`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody),
      });

      const responseData = await response.json();

      if (response.status === 200 && responseData.status === 'SUCCESS') {
        toast.success("Demande soumise avec succès !");
        // Clear form fields after successful submission
        setReqBody({
          nomEntreprise:'',
          fullName: '',
          email: '',
          phoneNumber: '',
          phoneNumber2: '',
          gouvernorat:'',
          ville:'',
          messageDemande:'',
          metier:'',
          typeDemande:'CLIENT',
        });
        setPhoneNumber("");
        setPhoneNumber2("");
        setSelectedGovernorate('');
        setSelectedCity('');
        const isMobile = window.innerWidth <= 975;
        setTimeout(() => {
          if (isMobile) {
            navigate(`/`);
          } else {
            setShowDemandeClients(false);
          }
        }, 5000);
      } else {
        toast.error(responseData.message );
      }
    } catch (error) {
      toast.error("Une erreur inattendue s'est produite.");
    }
  };

  const handleChangePhoneNumber = (value) => {
    setPhoneNumber(value);
    if (value && !isValidPhoneNumber(value)) {
      toast.error("Veuillez entrer un numéro de téléphone valide.");
      setReqBody({ ...reqBody, phoneNumber: '' }); // Clear phoneNumber in reqBody
    } else {
      setReqBody({ ...reqBody, phoneNumber: value });
    }
  };

  const handleChangePhoneNumber2 = (value2) => {
    setPhoneNumber2(value2);
    if (value2 && !isValidPhoneNumber(value2)) {
      toast.error("Veuillez entrer un numéro de téléphone valide pour Téléphone 2.");
      setReqBody({ ...reqBody, phoneNumber2: '' }); // Clear phoneNumber2 in reqBody
    } else {
      setReqBody({ ...reqBody, phoneNumber2: value2 });
    }
  };

  const handleShowDemandeClients = () => {
    setShowDemandeClients(false);
  };
  const isMobile = window.innerWidth <= 975;

  return (
    <div className='demande-clients' id='demandeClient'>
    {isMobile && (
  <>
    <Icon to="/">
      <img src="../../images/RemoteHub.png" height="55px" alt="RemoteHub Logo" loading="lazy" />
    </Icon>
    <br/>
    <video className="video-background" autoPlay loop muted>
      <source src={BackgroundVideo} type="video/mp4" />
    </video>
  </>
)}

        <ToastContainer /> {/* Container for displaying toasts */}
        {!isMobile && (
          <CloseIcon
            onClick={handleShowDemandeClients}
            style={{ justifyItems: "right" }}
            className="close-icon"
          />
        )}      
      
      
      <form onSubmit={handleSubmit} style={{marginTop:'5vh'}}>
      <h3 style={{fontFamily: 'Constantia', fontWeight: 'bold',color:'#fff'}}>Formulaire de devenir client</h3>

        <div>
          <label htmlFor="nomEntreprise">Nom d'entreprise:</label>
          <input style={{fontFamily: 'Constantia'}}
            type="text"
            placeholder="Nom de l'entreprise"
            required
            value={reqBody.nomEntreprise}
            onChange={(e) => setReqBody({ ...reqBody, nomEntreprise: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="fullName">Nom et Prénom :</label>
          <input style={{fontFamily: 'Constantia'}}
            type="text"
            placeholder="Votre nom et prénom"
            required
            value={reqBody.fullName}
            onChange={(e) => setReqBody({ ...reqBody, fullName: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="metier">Métier :</label>
          <input style={{fontFamily: 'Constantia'}}
            type="text"
            placeholder="Votre métier"
            required
            value={reqBody.metier}
            onChange={(e) => setReqBody({ ...reqBody, metier: e.target.value })}
          /><div>
          <label style={{fontFamily: 'Constantia'}} htmlFor="email">Email :</label>
          <input style={{fontFamily: 'Constantia'}}
            type="email"
            placeholder="Votre Email"
            required
            value={reqBody.email}
            onChange={(e) => setReqBody({ ...reqBody, email: e.target.value })}
          />
        </div>
        </div>
        <div className="form-group">
      <label htmlFor="gouvernorat">Gouvernorat:</label>
      <select
        className="form-select"
        aria-label="Sélectionnez le gouvernorat"
        value={selectedGovernorate}
        onChange={(e) => {
          setSelectedGovernorate(e.target.value);
          setReqBody({ ...reqBody, gouvernorat: e.target.value });
        }}
      >
        <option value="" disabled selected>Sélectionnez le gouvernorat</option>
        <option value="Ariana">Ariana</option>
        <option value="Béja">Béja</option>
        <option value="BenArous">BenArous</option>
        <option value="Bizerte">Bizerte</option>
        <option value="Gabès">Gabès</option>
        <option value="Gafsa">Gafsa</option>
        <option value="Jendouba">Jendouba</option>
        <option value="Kairouan">Kairouan</option>
        <option value="Kasserine">Kasserine</option>
        <option value="Kébili">Kébili</option>
        <option value="LeKef">Le Kef</option>
        <option value="Mahdia">Mahdia</option>
        <option value="LaManouba">La Manouba</option>
        <option value="Médenine">Médenine</option>
        <option value="Monastir">Monastir</option>
        <option value="Nabeul">Nabeul</option>
        <option value="Sfax">Sfax</option>
        <option value="SidiBouzid">Sidi Bouzid</option>
        <option value="Siliana">Siliana</option>
        <option value="Sousse">Sousse</option>
        <option value="Tataouine">Tataouine</option>
        <option value="Tozeur">Tozeur</option>
        <option value="Tunis">Tunis</option>
        <option value="Zaghouan">Zaghouan</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="ville">Ville:</label>
      <select
        className="form-select"
        aria-label="Sélectionnez la ville"
        value={selectedCity}
        onChange={(e) => {
          setSelectedCity(e.target.value);
          setReqBody({ ...reqBody, ville: e.target.value });
        }}
      >
        <option value="" disabled selected>Sélectionnez la ville</option>
        {cities.map(ville => (
          <option key={ville} value={ville}>{ville}</option>
        ))}
      </select>
    </div>
        
        <div>
          <label style={{fontFamily: 'Constantia'}} htmlFor="phoneNumber">Téléphone :</label>
          <PhoneInput
            placeholder="Votre numéro de téléphone"
            required
            defaultCountry="TN"
            value={phoneNumber}
            onChange={handleChangePhoneNumber}
            style={{ marginBottom: "12px" }}
          />
        </div>
        <div>
          <label style={{fontFamily: 'Constantia'}}htmlFor="phoneNumber2">Téléphone 2 (optionnel) :</label>
          <PhoneInput
            placeholder="Votre numéro de téléphone"
            defaultCountry="TN"
            value={phoneNumber2}
            onChange={handleChangePhoneNumber2}
            style={{ marginBottom: "12px" }}
          />
        </div>
        <div>
          <label htmlFor="messageDemande">Message :</label>
          <textarea
            name="messageDemande"
            rows="10"
            cols="50"
            value={reqBody.messageDemande}
            style={{fontFamily: 'Constantia'}}
            onChange={(e) => setReqBody({ ...reqBody, messageDemande: e.target.value })}
          ></textarea>
        </div>
        <button type="submit" className='btn btn-outline-primary font-circular-semibold color-red rounded-pill me-1'style={{fontFamily: 'Constantia', fontWeight: 'bold'}}>Envoyer</button>
      </form>
    </div>
  );
};

export default DemandeClients;
