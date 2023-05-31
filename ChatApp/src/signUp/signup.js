import React, { useState } from "react";
import LoginDetailsPage from "./Page/LoginPage/LoginDetailsPage";
import BasicInfoPage from "./Page/BasicInfoPage";
import ContactInfoPage from "./Page/ContactInfoPage";
import GenderPage from "./Page/GenderPage/GenderPage";
import './signup.css';
import ProfilePic from "./profilePic/ProfilePic";
import ProgressBar from "./ProgressBar/ProgressBar";
import { useNavigate } from 'react-router-dom';
import Users from "../users/Users";


function SignupForm({setActiveUser}) {
    const navigate = useNavigate();
    const [usersList, setUsersList] = useState(Users);
    const [userData, setUserData] = useState({});
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});

    
    const [currentPage, setCurrentPage] = useState(0);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [img, setimg] = useState(null);
    const [pic5, setpic5] = useState(null);
    const addUse = (name1, userName1, password1, pic1, gender1, phoneNumber1, emailAdress1) => {
        // Update the Contacts array directly
        const newUser = {name1:name1, userName:userName1,password:password1, pic:pic1, gender:gender1,phoneNumber:phoneNumber1, emailAdress:emailAdress1};
        usersList.push(newUser);
    };

    const steps = [
        {
            component: BasicInfoPage,
            onNext: (data) => {
                setFormData((prevData) => ({ ...prevData, ...data }));
                setCurrentStep((prevStep) => prevStep + 1);
                setName(data.name);
                setUsername(data.username);
            },
        },
        {
            component: ContactInfoPage,
            onNext: (data) => {
                setFormData((prevData) => ({ ...prevData, ...data }));
                setCurrentStep((prevStep) => prevStep + 1);
                setEmail(data.email);
                setPhone(data.phoneNumber);
            },
            onPrev: () => setCurrentStep((prevStep) => prevStep - 1),
        },
        {
            component: GenderPage,
            onNext: (data) => {
                setFormData((prevData) => ({ ...prevData, ...data }));
                setCurrentStep((prevStep) => prevStep + 1);
                setGender(data.gender);
            },
            onPrev: () => setCurrentStep((prevStep) => prevStep - 1),
        },
        {
            component: LoginDetailsPage,
            onNext: (data) => {
                setFormData((prevData) => ({ ...prevData, ...data }));
                // submit form data to server
            },
            onPrev: () => setCurrentStep((prevStep) => prevStep - 1),
        },
    ];

    const setImg = (pic) => {
        setimg(pic);
        setpic5(pic);
    };

    const { component: CurrentPage, onNext, onPrev} = steps[currentStep];

        const handleNext = (data) => {
        setUserData((prevData) => ({ ...prevData, ...data }));
        setCurrentStep((prevStep) => prevStep + 1);
      };
    
    return (
        <div>
        <div className="signupPage">
        <div className="signupContainer">
            <div>
                <ProfilePic setImage1={setImg}/>
                <header>Sign-up</header>
                <div className="signup-form">
                    <ProgressBar currentStep={currentStep} totalSteps={steps.length} />
                    <CurrentPage onNext={onNext} onPrev={onPrev} 
                    addUser30={addUse} 
                    userName1={username}
                    name1={name}
                    email1={email}
                    phone1={phone}
                    gender1={gender}
                    pic1={pic5}
                    setActiveUser={setActiveUser} />
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default SignupForm;