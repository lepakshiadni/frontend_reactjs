import React, { useEffect, useRef, useState } from "react";
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import Box from "@mui/material/Box";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import '../../styles/Requirements.css'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
// import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux'
import { postTrainingRequirementAction, getPostTrainingRequirementAction, postJobRequirementAction } from "../../../redux/action/postRequirement.action";
const Requirements = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [activeOption, setActiveOption] = useState("postTraining");
    const [trainingType, setTrainingType] = useState("");
    const [participantCount, setParticipantCount] = useState(0);
    const [trainingMode, setTrainingMode] = useState("");
    const [durationType, setDurationType] = useState("");
    const [durationCount, setDurationCount] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState("IND");
    const [currencySymbol, setCurrencySymbol] = useState("");
    const [minBudget, setMinBudget] = useState("");
    const [maxBudget, setMaxBudget] = useState("");
    const [availability, setAvailability] = useState("");
    const [content, setContent] = useState("");
    const [contentt, setContentt] = useState("")
    const [contenttt, setContenttt] = useState("")
    const [experience, setExperience] = React.useState(0);
    const [experience2, setExperience2] = React.useState(0);
    const [isDragging, setIsDragging] = React.useState(false);
    const [isDraggingg, setIsDraggingg] = React.useState(false);
    
    const postRequiement = useSelector(({ postRequirement }) => {
        return postRequirement;
    })
    console.log("postRequiement", postRequiement)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostTrainingRequirementAction())
    }, [dispatch])

    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
    };
    const handleExperienceChangee = (event) => {
        setExperience2(event.target.value);
    };
    const startDatePickerRef = useRef(null);
    const endDatePickerRef = useRef(null);

    const handleCalendarIconClick = (ref) => {
        // Open the calendar for the specified DatePicker when the icon is clicked
        if (ref.current) {
            ref.current.setOpen(true);
        }
    };

    const handleDragStart = () => {
        setIsDragging(true);
    };
    const handleDragStartt = () => {
        setIsDraggingg(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };
    const handleDragEndd = () => {
        setIsDraggingg(false);
    };
    const showValueLabel = isDragging || (experience > 0 && !isDragging);
    const showValueLabell = isDraggingg || (experience2 > 0 && !isDraggingg);

    const trackBackground = {
        background: `linear-gradient(to right, #2676C2 0%, #2676C2 ${(experience / 50) * 100}%, #d3d3d3 ${(experience / 50) * 100}%, #d3d3d3 100%)`,
    };
    const trackBackgroundd = {
        background: `linear-gradient(to right, #2676C2 0%, #2676C2 ${(experience2 / 50) * 100}%, #d3d3d3 ${(experience2 / 50) * 100}%, #d3d3d3 100%)`,
    };

    const handleOptionClick = (option) => {
        setActiveOption(option);
    };
    useEffect(() => {
        adjustHeight();
    }, [content, contentt, contenttt]);

    const handleChange = (event) => {
        setContent(event.target.value);
    };
    const handleChangee = (event) => {
        setContentt(event.target.value);
    };
    const handleChangeee = (event) => {
        setContenttt(event.target.value);
    };
    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };
    const [urgentlyNeedTrainer, setUrgentlyNeedTrainer] = useState(false);

    const handleCheckboxChange = (event) => {
        setUrgentlyNeedTrainer(event.target.checked);
    };
    const maxCount = 9999;

    const adjustHeight = () => {
        if (description.current) {
            description.current.style.height = "2.4rem";
            description.current.style.height = `${description.current.scrollHeight}px`;
        }
        if (description2.current) {
            description2.current.style.height = "46px";
            description2.current.style.height = `${description2.current.scrollHeight}px`;
        }
        if (description3.current) {
            description3.current.style.height = "46px";
            description3.current.style.height = `${description3.current.scrollHeight}px`;
        }
    };

    const handleAvailabilityChange = (event) => {
        setAvailability(event.target.value);
    };

    const handleTrainingTypeChange = (type) => {
        setTrainingType(type);
        setParticipantCount(0);
        setDurationCount(0);
    };

    const getCurrencySymbol = (countryCode) => {
        switch (countryCode) {
            case 'IND':
                return '₹';
            case 'USA':
                return '$';
            // Add more cases as needed
            default:
                return '₹'; // Default to Indian Rupee symbol
        }
    };
    const handleCountryChange = (e) => {
        const selectedOption = e.target.value;
        setSelectedCountry(selectedOption);

        // Update currency symbol based on the selected country
        const symbol = getCurrencySymbol(selectedOption);
        setCurrencySymbol(symbol);

        // Clear min and max budgets when changing the country (or you can keep existing values if needed)
        setMinBudget('');
        setMaxBudget('');
    };
    const formatCurrencyValue = (amount) => {
        if (amount === '') {
            return '';
        }
        const amountWithoutSymbol = amount.replace(currencySymbol, '').trim();
        return `${currencySymbol} ${amountWithoutSymbol}`;
    };


    const topTopics = [
        { value: 'python', label: 'Python' },
        { value: 'java', label: 'Java' },
        { value: 'c', label: 'c' },
        { value: 'c++', label: 'C++' },
        { value: 'react', label: 'React' },
        { value: 'html', label: 'HTML' },
        { value: 'css', label: 'CSS' },
        { value: 'django', label: 'Django' },
        { value: 'express', label: 'Express' }
    ]
    const qualTopics = [
        { value: 'pg', label: 'Post Graduation PG' },
        { value: 'ug', label: 'Under Graduation UG' },
        { value: 'diplomo', label: 'Diplomo' },
        { value: 'puc', label: 'Pre University College PUC' },
    ]
    const skillsTopics = [
        { value: 'python', label: 'Python' },
        { value: 'java', label: 'Java' },
        { value: 'c', label: 'c' },
        { value: 'c++', label: 'C++' },
        { value: 'react', label: 'React' },
        { value: 'html', label: 'HTML' },
        { value: 'css', label: 'CSS' },
        { value: 'django', label: 'Django' },
        { value: 'express', label: 'Express' }
    ]


    const handleTrainingModeChange = (mode) => {
        setTrainingMode(mode);
    };


    const handleDurationTypeChange = (type) => {
        setDurationType(type);
        setDurationCount(0);
    };

    const trainingName = useRef()
    const description = useRef()
    const topics = useRef()
    const location = useRef()
    const tocFile = useRef()

    // console.log('toc', tocFile)
    const [tocContent, setTocContent] = useState(null)




    const handlePostTrainingSubmit = async () => {
        try {
            let formData = new FormData();

            // Append fields to FormData
            formData.append("trainingName", trainingName.current.value);
            formData.append("description", description.current.value);
            formData.append("topics", JSON.stringify(selectedTopics.map(topic => topic.value)));
            formData.append("typeOfTraining", trainingType);
            formData.append("participantCount", participantCount);
            formData.append("modeOfTraining", trainingMode);
            formData.append("location", location.current ? location.current.value : null);
            formData.append("minBudget", minBudget);
            formData.append("maxBudget", maxBudget);
            formData.append("experience", experience);
            formData.append("durationType", durationType);
            formData.append("durationCount", durationCount);
            formData.append("selectedCountry", selectedCountry);
            formData.append("availability", availability);
            formData.append("startDate", startDate);
            formData.append("endDate", endDate);
            formData.append("urgentlyNeedTrainer", urgentlyNeedTrainer);
            // Append file to FormData
            if (tocFile.current && tocFile.current.files.length > 0) {
                // console.log("tocFile",tocFile.current.files[0])
                formData.append("tocFile", tocFile.current.files[0], tocFile.current?.files[0]?.name);
            }
            dispatch(postTrainingRequirementAction(formData));
        } catch (error) {
            console.log(error);
        }
    }


    const handleResetPostTraining = () => {
        trainingName.current.value = ''
        description.current.value = ''
        setSelectedTopics([])
        setTrainingType('')
        setTrainingMode('')
        setMaxBudget('')
        setMaxBudget('')
        setExperience(0)
        setDurationType('')
        setAvailability('')
        setStartDate('')
        setEndDate('')
        setUrgentlyNeedTrainer(false)
    }
    const [selectedTopics, setSelectedTopics] = useState([]);
    const handleTopicChange = (selectedOptions) => {
        setSelectedTopics(selectedOptions);
    };

    const [skilval, setSkillVal] = useState([]);
    const handleTopicChange2 = (options) => {
        setSkillVal(options);
    };
    const [qulificationVal, setQulificationVal] = useState([]);
    const handleTopicChange3 = (options) => {
        setQulificationVal(options);
    };

    const description2 = useRef()
    const description3 = useRef()
    const jobTitle = useRef()
    const topics2 = useRef()
    const qualificationRef = useRef()
    const location2 = useRef()
    const salary = useRef()
    const benifit = useRef()

    const handlePostJobReset = () => {

        jobTitle.current.value = '';
        setContentt('')
        setContenttt('')
        salary.current.value = '';
        benifit.current.value = '';
        location2.current.value = '';
        setQulificationVal([]);
        setSkillVal([]);
        setExperience2(0);
    }

    const handlePostJobSubmit = async () => {

        try {
            const formdata2 = {
                jobTitle: jobTitle.current.value,
                description2: description2.current.value,
                description3: description3.current.value,
                salary: salary.current.value,
                benifit: benifit.current.value,
                location2: location2.current.value,
                experience2: experience2,
                qualificationRef: qulificationVal.label,
                topics2: skilval.map((topic) => topic.value)
            }

            await dispatch(postJobRequirementAction(formdata2));
            handlePostJobReset()

        } catch (error) {
            console.log('Error:', error);
        }
    };


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault()

            if (event.target === trainingName.current) {
                description.current.focus();
            }
        }
    }

    return (
        <div className="Requirements">
            <div className="Post_Buttons pt-[14px] pb-[15px]">
                <button
                    onClick={() => handleOptionClick('postTraining')}
                    className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${activeOption === 'postTraining' ? 'active' : ''
                        }`}
                >
                    Post Training
                </button>
                <button onClick={() => handleOptionClick("postJob")}
                    className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${activeOption === 'postJob' ? 'active' : ''
                        }`}>
                    Post Job
                </button>
            </div>
            <div class="Content_Wrapper">
                <div className="Buttons_Content">
                    {activeOption === "postTraining" && (
                        <div className="Post_Training_content">
                            <div div className="Company">
                                <div className="Training_Name">Training Name</div>
                                <input
                                    type="text" style={{ padding: '0 10px', color: '#333333', }}
                                    placeholder="Training Name"
                                    ref={trainingName}
                                    name="trainingName"
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                            <div className="Training_Description">
                                <label for="description" className="text-[#333333] font-['Poppins'] mb-[10px]">Description</label>
                                <textarea
                                    ref={description}
                                    name="description"
                                    className="h-auto"
                                    onChange={handleChange}
                                    id="description"
                                    placeholder="Enter your description here..."
                                    style={{ borderRadius: '0.4rem', minHeight: "2.4rem" }}
                                />
                            </div>

                            <div className="Content_Title" style={{ width: '41.3rem', marginBottom: '10px' }}>
                                <p>Technology (Training Topics)</p>
                                <div className="mt-[10px] mb-[20px]">
                                    <Select
                                        defaultValue={[]}
                                        isMulti
                                        name="colors"
                                        options={topTopics}
                                        className="Multiselector"
                                        placeholder="select Training Topics"
                                        styles={{
                                            placeholder: (provided) => ({
                                                ...provided,
                                                color: '#888',
                                            }),
                                        }}
                                        ref={topics}
                                        value={selectedTopics}
                                        onChange={handleTopicChange}
                                    /></div>
                            </div>
                            <div className="Type_Of_Training ">
                                <div className="text-[#333333] font-['Poppins']">Type Of Training</div>
                                <div className="RadioTOT">
                                    <label className={`LLLabel ${trainingType === "Corporate Training" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            name="trainingType"
                                            value="Corporate Training"
                                            checked={trainingType === "Corporate Training"}
                                            onChange={() => handleTrainingTypeChange("Corporate Training")}
                                        />
                                        <h2>Corporate Training</h2>
                                    </label>
                                    <label className={`LLLabel ${trainingType === "College Training" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            name="trainingType"
                                            value="College Training"
                                            checked={trainingType === "College Training"}
                                            onChange={() => handleTrainingTypeChange("College Training")}
                                        />
                                        <h2>College Training</h2>
                                    </label>
                                    <label className={`LLLabel ${trainingType === "Individual" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            name="trainingType"
                                            value="Individual"
                                            checked={trainingType === "Individual"}
                                            onChange={() => handleTrainingTypeChange("Individual")}
                                        />
                                        <h2>Individual</h2>
                                    </label>
                                </div>
                                {trainingType === "Corporate Training" && (
                                    <div className="ParticipantCount">
                                        <h5 className="mt-[5px] mb-[0px] text-[#535353] font-['Poppins']">Select No Of Participents</h5>
                                        <div className="RadioTOT_Count">
                                            <button
                                                onClick={() => setParticipantCount(Math.max(participantCount - 1, 0))}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="TOT_Input"
                                                value={participantCount}
                                                onChange={(e) => setParticipantCount(Math.max(parseInt(e.target.value) || 0, 0))}
                                                style={{ width: `${Math.min((participantCount.toString().length * 8), maxCount)}px` }}

                                            />

                                            <button
                                                onClick={() => setParticipantCount(participantCount + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {trainingType === "College Training" && (
                                    <div className="ParticipantCount">
                                        <h5 className="mt-[5px] mb-[0px] text-[#535353] font-['Poppins']">Select No Of Participents</h5>
                                        <div className="RadioTOT_Count">
                                            <button
                                                onClick={() => setParticipantCount(Math.max(participantCount - 1, 0))}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="TOT_Input"
                                                value={participantCount}
                                                onChange={(e) => setParticipantCount(Math.max(parseInt(e.target.value) || 0, 0))}
                                                style={{ width: `${Math.min((participantCount.toString().length * 8), maxCount)}px` }}

                                            />
                                            <button
                                                onClick={() => setParticipantCount(Math.min(participantCount + 1,))}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {trainingType === "Individual" && (
                                    <div className="ParticipantCount">
                                        <h5 className="mt-[5px] mb-[0px]">Select No Of Participents</h5>
                                        <div className="RadioTOT_Count">
                                            <button
                                                onClick={() => setParticipantCount(Math.max(participantCount - 1, 0))}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="TOT_Input"
                                                value={participantCount}
                                                onChange={(e) => setParticipantCount(Math.max(parseInt(e.target.value) || 0, 0))}
                                                style={{ width: `${Math.min((participantCount.toString().length * 8), maxCount)}px` }}

                                            />
                                            <button
                                                onClick={() => setParticipantCount(participantCount + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="Mode_Of_Training">
                                <div className="text-[#333333] font-['Poppins']">Mode of Training</div>
                                <div className="Radio_MOT">
                                    <label className={`LLLabel font-['Poppins'] ${trainingMode === "online" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            name="trainingMode"
                                            value="online"
                                            checked={trainingMode === "online"}
                                            onChange={() => handleTrainingModeChange("online")}
                                        />
                                        Online
                                    </label>
                                    <label className={`LLLabel font-['Poppins'] ${trainingMode === "offline" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            name="trainingMode"
                                            value="offline"
                                            checked={trainingMode === "offline"}
                                            onChange={() => handleTrainingModeChange("offline")}
                                        />
                                        Offline
                                    </label>
                                </div>
                                {trainingMode === "offline" && (
                                    <div className="SelectLocation">
                                        <label className="LLLabel">
                                            <h5 className="mt-[10px] mb-[10px] text-[#535353] font-['Poppins']">Your Location</h5>
                                        </label>
                                        <select
                                            ref={location}
                                        >
                                            <option value="">Location</option>
                                            <option value="usa">United States</option>
                                            <option value="canada">Canada</option>
                                            <option value="uk">United Kingdom</option>
                                            <option value="australia">Australia</option>
                                        </select>
                                    </div>
                                )}
                            </div>
                            <div className="Select_Experience">
                                <p className="mt-[5px] mb-[5px]">Select Experience</p>
                                <h5 className="mt-[5px] mb-[5px]">Slide To Set Your Experience</h5>
                                <div
                                    style={{
                                        width: '40rem',
                                        marginTop: '10px',
                                        position: 'relative',
                                        marginBottom: '15px',
                                    }}
                                >
                                    <input
                                        type="range"
                                        value={experience}
                                        onChange={handleExperienceChange}
                                        onMouseDown={handleDragStart}
                                        onMouseUp={handleDragEnd}
                                        onTouchStart={handleDragStart}
                                        onTouchEnd={handleDragEnd}
                                        min={0}
                                        max={50}
                                        aria-label="Experience Range (Post Training)"
                                        step={1}
                                        style={{
                                            width: '100%',
                                            height: '5px',
                                            cursor: 'pointer',
                                            appearance: 'none',
                                            outline: 'none',
                                            borderRadius: '5px',
                                            zIndex: 1,
                                            ...trackBackground,
                                        }}
                                    />
                                    {showValueLabel && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '20px',
                                                left: `calc(${(experience / 50) * 100}%)`,
                                                transform: 'translateX(-50%)',
                                                textAlign: 'center',
                                                color: '#2676C2',
                                                fontFamily: 'Poppins',
                                                fontSize: '0.855rem',
                                                fontStyle: 'normal',
                                                fontWeight: 'bold',
                                                paddingLeft: '3.1rem',
                                                paddingTop: '0.5rem',
                                            }}
                                        >
                                            {experience} years
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="Duration_Of_Time">
                                <div className=" font-['Poppins']">Duration Of Training</div>
                                <div className="Radio_Duration">
                                    <label className={`LLLabel font-['Poppins'] ${durationType === "hour" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            name="durationType"
                                            value="hour"
                                            checked={durationType === "hour"}
                                            onChange={() => handleDurationTypeChange("hour")}
                                        />
                                        Hourly
                                    </label>
                                    <label className={`LLLabel font-['Poppins'] ${durationType === "day" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            name="durationType"
                                            value="day"
                                            checked={durationType === "day"}
                                            onChange={() => handleDurationTypeChange("day")}
                                        />
                                        Day
                                    </label>
                                    <label className={`LLLabel font-['Poppins'] ${durationType === "month" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            name="durationType"
                                            value="month"
                                            checked={durationType === "month"}
                                            onChange={() => handleDurationTypeChange("month")}
                                        />
                                        Month
                                    </label>
                                </div>
                                {durationType === "hour" && (
                                    <div className="DurationCount">
                                        <h5 className="mt-[10px] mb-[10px] text-[#535353] font-['Poppins']">Select No Of Hours</h5>
                                        <div className="Radio_Duration_Count">
                                            <button
                                                onClick={() => setDurationCount(Math.max(durationCount - 1, 0))}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="Duration_Input"
                                                value={durationCount}
                                                onChange={(e) => setDurationCount(Math.max(parseInt(e.target.value) || 0, 0))}
                                                style={{ width: `${Math.min((durationCount.toString().length * 8), maxCount)}px` }}
                                            />
                                            <button
                                                onClick={() => setDurationCount(durationCount + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {durationType === "day" && (
                                    <div className="DurationCount">
                                        <h5 className="mt-[10px] mb-[10px] text-[#535353] font-['Poppins']">Select No Of Days</h5>
                                        <div className="Radio_Duration_Count">
                                            <button
                                                onClick={() => setDurationCount(Math.max(durationCount - 1, 0))}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="Duration_Input"
                                                value={durationCount}
                                                onChange={(e) => setDurationCount(Math.max(parseInt(e.target.value) || 0, 0))}
                                                style={{ width: `${Math.min((durationCount.toString().length * 8), maxCount)}px` }}
                                            />

                                            <button
                                                onClick={() => setDurationCount(durationCount + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {durationType === "month" && (
                                    <div className="DurationCount">
                                        <h5 className="mt-[10px] mb-[10px] text-[#535353] font-['Poppins']">Select No Of Months</h5>
                                        <div className="Radio_Duration_Count">
                                            <button
                                                onClick={() => setDurationCount(Math.max(durationCount - 1, 0))}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="Duration_Input"
                                                value={durationCount}
                                                onChange={(e) => setDurationCount(Math.max(parseInt(e.target.value) || 0, 0))}
                                                style={{ width: `${Math.min((durationCount.toString().length * 8), maxCount)}px` }}
                                            />

                                            <button
                                                onClick={() => setDurationCount(durationCount + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="Budgets">
                                <p className="text-lg font-[500] font-['Poppins']">Budgets</p>
                                <span className="Budget_MM">
                                    <select
                                        className=""
                                        style={{
                                            borderRadius: '0.5rem',
                                            paddingLeft: '0.3rem',
                                            color: '#2676C2',
                                            fontFamily: 'Poppins',
                                            fontSize: '0.875rem',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: 'normal'
                                        }}
                                        onChange={handleCountryChange}
                                        value={selectedCountry}
                                        placeholder="select country"
                                    >
                                        <option value="IND" >IND</option>
                                        <option value="USA">USA</option>

                                    </select>
                                    <span>
                                        <input
                                            className=""
                                            style={{
                                                border: ' 1.5px #DADADA solid ',
                                                borderRadius: '0.5rem 0 0 0.5rem',
                                                width: '6rem',
                                                borderRight: '0.7px #DADADA solid',
                                            }}
                                            type="text"
                                            placeholder={`Ex: 1000`}
                                            maxLength={10000}
                                            value={formatCurrencyValue(minBudget)}
                                            onChange={(e) => setMinBudget(e.target.value)}
                                        />
                                        <input
                                            className=""
                                            style={{
                                                border: ' 1.5px #DADADA solid',
                                                borderRadius: '0 0.5rem 0.5rem 0 ',
                                                width: '6rem',
                                                borderLeft: '0.7px #DADADA solid',
                                            }}
                                            type="text"
                                            placeholder={`Ex: 10000`}
                                            maxLength={10000}
                                            value={formatCurrencyValue(maxBudget)}
                                            onChange={(e) => setMaxBudget(e.target.value)}
                                        />
                                    </span>
                                </span>
                            </div>
                            <div className="TOC">
                                <p >TOC (Table of content)</p>

                                <div className="TOC_Radio">
                                    <label className={`font-['Poppins'] ${availability === "available" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            value="available"
                                            checked={availability === "available"}
                                            onChange={handleAvailabilityChange}
                                            style={{ borderRadius: '0' }}
                                        />
                                        Available
                                    </label>

                                    <label className={`font-['Poppins'] ${availability === "unavailable" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            value="unavailable"
                                            checked={availability === "unavailable"}
                                            onChange={handleAvailabilityChange}
                                        />
                                        Unavailable
                                    </label>
                                </div>
                                {availability === "available" && (
                                    <div className="UPLOADFILE">
                                        <span className="For_Align_Upload">
                                            <h4 >Select File</h4>
                                            <FileUploadOutlinedIcon
                                                sx={{ color: "#2676C2", fontSize: "1.3rem" }}
                                            />
                                        </span>
                                        <input type="file" ref={tocFile} onChange={(e) => {
                                            if (e.target.files[0] !== undefined) {
                                                let file = e.target.files[0];
                                                // setTocFileName(file.name);
                                                // const reader = new FileReader();
                                                // reader.onloadend = () => {
                                                //     setTocContent(reader.result);
                                                // }
                                                // reader.readAsDataURL(file);
                                                setTocContent(file)

                                            }
                                        }} />
                                    </div>
                                )}
                            </div>
                            <div className="Training_Dates">
                                <p className=" font-['Poppins']">Training Dates</p>
                            </div>
                            <div className="Training_Dates" style={{ display: 'flex', gap: '1rem' }}>
                                <div className="date-picker">
                                    <p>Start Date</p>
                                    <div style={{ width: '16rem', display: 'flex', }}>
                                        <DatePicker
                                            className="end"
                                            selected={startDate}
                                            onChange={handleStartDateChange}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            isClearable={true}
                                            style={{ border: '1px Solid #333 ' }}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText="DD/MM/YYYY"
                                            ref={startDatePickerRef}

                                        />
                                        <div className="CalenderIcon" onClick={() => handleCalendarIconClick(startDatePickerRef)}>
                                            <CalendarMonthOutlinedIcon color="#333" sx={{ cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                                < div className="date-picker">
                                    <p>End Date</p>
                                    <div style={{ width: '16rem', display: 'flex' }}>
                                        <DatePicker
                                            className="end"
                                            selected={endDate}
                                            onChange={handleEndDateChange}
                                            selectsEnd
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={startDate}
                                            isClearable={true}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText="DD/MM/YYYY"
                                            ref={endDatePickerRef}

                                        />
                                        <div className="CalenderIcon" onClick={() => handleCalendarIconClick(endDatePickerRef)}>
                                            <CalendarMonthOutlinedIcon color="#333" sx={{ cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Box sx={{ mt: '10px', mb: '10px' }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={urgentlyNeedTrainer}
                                                onChange={handleCheckboxChange}
                                                name="urgentlyNeedTrainer"
                                                color="primary" // You can customize the color
                                            />
                                        }
                                        label="If you urgently need a trainer"
                                        className="custom-label"
                                    />

                                </Box>
                            </div>
                            {activeOption === "postTraining" && (
                                <div className="Post_Button mb-[20px]">
                                    <button
                                        style={{ borderRadius: "5px" }}
                                        className="Reset_Btn flex justify-center items-center"
                                    >
                                        <span onClick={handleResetPostTraining}>Reset</span>
                                    </button>
                                    <button
                                        style={{ borderRadius: "5px" }} onClick={handlePostTrainingSubmit} className="Submit_Btn flex justify-center items-center">
                                        <span>SUBMIT</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {activeOption === "postJob" && (
                        <div className="Post_Job_Content">
                            <div className="Content_Title">
                                <p className="mb-[10px]">Job Title</p>
                                <input type="text" ref={jobTitle} placeholder="Enter Job title" />
                            </div>
                            <div className="Training_Description1">
                                <label for="description1">Job Description</label>
                                <textarea
                                    ref={description2}
                                    className="h-auto"
                                    value={contentt}
                                    onChange={handleChangee}
                                    // onKeyDown={handleKeyDown}
                                    id="description1"
                                    // value={description}
                                    placeholder="Enter Job Description"
                                    style={{ borderRadius: '0.4rem', minHeight: "2.4rem", marginTop: '10px' }}
                                />
                            </div>
                            <div className="Content_Title" style={{ width: '41.3rem' }}>
                                <p className="mb-[10px]">Qualifications</p>
                            </div>
                            {/* <div className="w-[41.3rem] pl-[1px] c-[#c7c7c7]"> */}
                            <Select
                                defaultValue={[]}
                                name="Qualifications"
                                options={qualTopics}
                                className="Multiselector"
                                placeholder="Select Qualification"
                                styles={{
                                    placeholder: (provided) => ({
                                        ...provided,
                                        color: '#888',
                                    }),
                                }}
                                ref={qualificationRef}
                                value={qulificationVal}
                                onChange={handleTopicChange3}
                            />
                            {/* </div> */}
                            <div className="Content_Title">
                                <p className="mb-[10px]">Skills</p>
                            </div>
                            <Select
                                placeholder="Enter What Kind OF Skills You Want"
                                defaultValue={[]}
                                isMulti
                                name="Qualifications"
                                options={skillsTopics}
                                className="Multiselector"
                                styles={{
                                    placeholder: (provided) => ({
                                        ...provided,
                                        color: '#888',
                                    }),
                                }}
                                ref={topics2}
                                value={skilval}
                                onChange={handleTopicChange2}
                            />
                            <div className="Select_Experience">
                                <p className="mt-[5px] mb-[5px]">Select Experience</p>
                                <h5 className="mt-[5px] mb-[5px]">Slide To Set Your Experience</h5>
                                <div
                                    style={{
                                        width: '40rem',
                                        marginTop: '10px',
                                        position: 'relative',
                                        marginBottom: '15px',
                                    }}
                                >
                                    <input
                                        type="range"
                                        value={experience2}
                                        onChange={handleExperienceChangee}
                                        onMouseDown={handleDragStartt}
                                        onMouseUp={handleDragEndd}
                                        onTouchStart={handleDragStartt}
                                        onTouchEnd={handleDragEndd}
                                        min={0}
                                        max={50}
                                        aria-label="experience2 Range (Post Job)"
                                        step={1}
                                        style={{
                                            width: '100%',
                                            height: '5px',
                                            cursor: 'pointer',
                                            appearance: 'none',
                                            outline: 'none',
                                            borderRadius: '5px',
                                            zIndex: 1,
                                            ...trackBackgroundd,
                                        }}
                                    />
                                    {showValueLabell && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '20px',
                                                left: `calc(${(experience2 / 50) * 100}%)`,
                                                transform: 'translateX(-50%)',
                                                textAlign: 'center',
                                                color: '#2676C2',
                                                fontFamily: 'Poppins',
                                                fontSize: '0.855rem',
                                                fontStyle: 'normal',
                                                fontWeight: 'bold',
                                                paddingLeft: '3.1rem',
                                                paddingTop: '0.5rem',
                                            }}
                                        >
                                            {experience2} years
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="Content_Title">
                                <p>Loaction</p>
                                <input type="text" ref={location2} className="mt-[10px]" placeholder="Enter Your Location" />
                            </div>
                            <div className="Content_Title">
                                <p>Salary</p>
                                <input
                                    type="text" className="mt-[10px]"
                                    placeholder="Enter Salary Details"
                                    style={{ width: "41.3rem" }}
                                    ref={salary}
                                />
                                <div className="Content_Title" >
                                    <p>Benefits</p>
                                    <input
                                        type="text" className="mt-[10px]"
                                        placeholder="Enter Benefits"
                                        style={{ width: "41.3rem" }}
                                        ref={benifit}
                                    />
                                </div>
                            </div>
                            <div className="Training_Description2">
                                <label for="description2">Company Overview</label>
                                <textarea
                                    ref={description3}
                                    className="h-auto"
                                    value={contenttt}
                                    onChange={handleChangeee}
                                    // onKeyDown={handleKeyDown}
                                    id="description2"
                                    // value={description}
                                    placeholder="Company Overview Here......"
                                    style={{ borderRadius: '0.4rem', minHeight: "2.4rem", marginTop: '10px' }}
                                />
                            </div>

                            {activeOption === "postJob" && (

                                <div className="Post_Button mt-[20px] mb-[20px]">
                                    <button
                                        style={{ borderRadius: "5px" }}
                                        className="Reset_Btn flex justify-center items-center"
                                    >
                                        <span onClick={handlePostJobReset}>RESET</span>
                                    </button>
                                    <button onClick={handlePostJobSubmit} style={{ borderRadius: "5px" }} className="Submit_Btn flex justify-center items-center">
                                        <span>SUBMIT</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div >
        </div >
    );
}
export default Requirements;