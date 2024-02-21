import React, { useState } from "react";
import image8 from '../assets/image 8 2.svg'
import { Stack } from "@mui/material";
import attch from '../assets/attachment 1.svg'
import '../styles/CreatePostPopup.css'
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import wrw from '../assets/wrw.svg';
import cvc from '../assets/cvc (1).svg'
import { useDispatch, useSelector } from 'react-redux'
import { trainerCreatePost } from '../../redux/action/trainercreatepost.action'

function CreatePostPopup(props) {

    const [postForAllSissoMember, setPostForAllSissoMember] = useState(false)
    const [onlyPostMyConnenctions, setOnlyPostMyConnenctions] = useState(false)
    const [inputImage, setInputImage] = useState(null);
    // const [fileSelected, setFileSelected] = useState(false);
    const [postDescription, setPostDescription] = useState("");
    const [postImg, setPostImg] = useState('')
    const dispatch = useDispatch()
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setInputImage(reader.result);
            };
            reader.readAsDataURL(file);
            // setFileSelected(true);
            setPostImg(file)
        }
    };

    // console.log(postForAllSissoMember, onlyPostMyConnenctions)

    // const handleRadioChange = (value) => {
    //     setSelectedOption(value);
    // };

    const handleTextChange = (event) => {
        setPostDescription(event.target.value);
    };

    const handleAttachmentDelete = () => {
        setInputImage(null);
        // setFileSelected(false);
    };

    const handlePostButtonClick = async () => {

        const formData = new FormData()
        formData.append('postForAllSissoMember',postForAllSissoMember)
        formData.append('onlyPostMyConnenctions',onlyPostMyConnenctions)
        formData.append('postDescription', postDescription)
        formData.append('postImg', postImg)
        dispatch(trainerCreatePost(formData))
        await props.setTrigger(false)

    };

    return (
        props.trigger ? <div className="createPopUp">
            <div className="createPopUpContainer">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div className="name">
                        <img
                            src={image8}
                            alt="xyz"
                            width={43.53}
                            height={50.94}
                            style={{ border: "none", outline: "none", borderRadius: "50%" }}
                        />
                        <div className="name-details">
                            <p
                                style={{
                                    color: "#263238",
                                    fontSize: "20px",
                                    fontWeight: "500px",
                                    margin: "0px",
                                }}
                            >
                                Kowshik
                            </p>
                            <p
                                style={{
                                    fontSize: "16px",
                                    fontWeight: "400px",
                                    color: "#6A6A6A",
                                    margin: "0px",
                                }}
                            >
                                UI UX Developer
                            </p>
                        </div>
                    </div>
                    <Stack direction={"row"} spacing={6} sx={{ paddingRight: "25px" }}>
                        <input
                            type="file"
                            accept=".pdf, .jpeg, .png, .svg ,.jpg"
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                            id="fileInput"
                            required
                            name="postImg"
                        />
                        <label htmlFor="fileInput">
                            <img
                                src={attch}
                                alt=""
                                height={20}
                                width={20}
                                style={{ cursor: "pointer" }}
                            />
                        </label>
                        <button
                            className="buttton"
                            style={{
                                color: (postDescription) ? "#2676c2" : "#D5D5D5",
                            }}
                            onClick={handlePostButtonClick} // Added onClick handler
                            disabled={!postDescription}
                        >
                            Post
                        </button>
                        <CloseIcon
                            sx={{
                                fontSize: "xx-large",
                                color: "#2676c2",
                                cursor: "pointer",
                            }}
                            className="cancel"
                            onClick={() => props.setTrigger(false)}
                        />
                    </Stack>
                </div>{" "}
                <br />
                <hr />
                <Stack>
                    <label className={`Radio-labels ${postForAllSissoMember?" accent-[#2676c2]":" accent-[#8888]"}`} htmlFor="">
                        <input
                            type="radio"
                            name="selectedOption"
                            value="UIUX Training"
                            // onChange={() =>
                            //     handleRadioChange("Post this for all sissoo member's")
                            // }
                            onChange={() => { setPostForAllSissoMember(true); setOnlyPostMyConnenctions(false) }}
                        />
                        <span
                            style={{
                                color:
                                    postForAllSissoMember === true
                                        ? "#2676c2"
                                        : "inherit",
                            }}
                        >
                            Post this for all sissoo member's
                        </span>
                    </label>{" "}
                    <br />
                    <label className={`Radio-labels ${onlyPostMyConnenctions?" accent-[#2676c2]":" accent-[#8888]"}`} htmlFor="">
                        <input
                            type="radio"
                            name="selectedOption"
                            value="Only post for my connections"
                            // onChange={() => handleRadioChange("Only post for my connections")}
                            onChange={() => { setOnlyPostMyConnenctions(true); setPostForAllSissoMember(false) }}
                        />
                        <span
                            style={{
                                color:
                                    onlyPostMyConnenctions === true
                                        ? "#2676c2"
                                        : "inherit",
                            }}
                        >
                            Only post for my connections
                        </span>
                    </label>
                </Stack>{" "}
                <br />
                <hr />
                <div style={{ position: "relative", display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <TextField
                        id="filled-multiline-flexible"
                        multiline
                        maxRows={50}
                        variant="standard"
                        placeholder="Would you like to share something?"
                        value={postDescription}
                        name="postDescription"
                        onChange={handleTextChange}
                        InputLabelProps={{
                            style: {
                                fontFamily: "Poppins",
                                display: inputImage ? "none" : "block",
                            },
                        }}
                        InputProps={{
                            sx: {
                                width: "400px",
                                color: "#888888",
                                fontFamily: "Poppins",
                                fontSize: "19px",
                            },
                        }}
                    />
                    <div style={{ display: 'flex' }}>
                        {inputImage && (
                            <>
                                {/* Display image or PDF */}
                                {inputImage.endsWith(".pdf") ? (
                                    <embed src={inputImage} width="200px" height="200px" />
                                ) : (
                                    <img
                                        src={inputImage}
                                        alt="Selected Attachment"
                                        style={{ width: "200px", height: "200px", objectFit: "cover" }}
                                    />
                                )}
                                <div style={{ display: 'flex', flexDirection: "column", gap: '20px', padding: "10px" }}>
                                    <span >
                                        <input
                                            type="file"
                                            name="postImg"
                                            accept=".pdf, .jpeg, .png, .svg"
                                            onChange={handleFileChange}
                                            style={{ display: "none" }}
                                            id="replaceFileInput"
                                            required
                                        />
                                        <label htmlFor="replaceFileInput"> <img src={wrw} style={{ cursor: 'pointer' }} alt="" /></label>
                                    </span>
                                    <img src={cvc} onClick={handleAttachmentDelete} style={{ cursor: 'pointer' }} width={20} height={20} alt="" />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            {props.children}
        </div> : null
    );
}

export default CreatePostPopup;


