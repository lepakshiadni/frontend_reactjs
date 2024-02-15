import React, { useState } from "react";
import image8 from '../assets/image 8 2.svg'
import { Stack } from "@mui/material";
import attch from '../assets/attachment 1.svg'
import '../styles/CreatePostPopup.css'
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import wrw from '../assets/wrw.svg';
import cvc from '../assets/cvc (1).svg'

function CreatePostPopup({ trigger, setTrigger }) {
    const [selectedOption, setSelectedOption] = useState("");
    const [inputImage, setInputImage] = useState(null);
    const [fileSelected, setFileSelected] = useState(false);
    const [text, setText] = useState("");

    const handleCloseButtonClick = () => {
        setTrigger(false);
    };



    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setInputImage(reader.result);
            };
            reader.readAsDataURL(file);
            setFileSelected(true);
        }
    };

    const handleRadioChange = (value) => {
        setSelectedOption(value);
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleAttachmentDelete = () => {
        setInputImage(null);
        setFileSelected(false);
    };

    return (
        trigger ? <>
            <div className="popup">
            <div className=" bg-[#ffff] popupcontainer "
                style={{
                    padding: "20px",
                    width: "600px",
                    height: 'auto',
                    borderRadius: "20px",
                    margin: "20px",
                    paddingRight: "0px",
                    minHeight: '500px'
                }}
            >
                <div className="">

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
                                width={50}
                                height={49}
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
                                accept=".pdf, .jpeg, .png, .svg"
                                onChange={handleFileChange}
                                style={{ display: "none" }}
                                id="fileInput"
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
                                    color: (fileSelected || text || selectedOption) ? "#2676c2" : "#D5D5D5",
                                }}
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
                                onClick={handleCloseButtonClick}
                            />
                        </Stack>
                    </div>{" "}
                    <br />
                    <hr />
                    <Stack>
                        <label className="Radio-labels" htmlFor="">
                            <input
                                type="radio"
                                name="slctone"
                                value="UIUX Training"
                                onChange={() =>
                                    handleRadioChange("Post this for all sissoo member’s")
                                }
                            />
                            <span
                                style={{
                                    color:
                                        selectedOption === "Post this for all sissoo member’s"
                                            ? "#2676c2"
                                            : "inherit",
                                }}
                            >
                                Post this for all sissoo member’s
                            </span>
                        </label>{" "}
                        <br />
                        <label className="Radio-labels" htmlFor="">
                            <input
                                type="radio"
                                name="slctone"
                                value="Only post for my connections"
                                onChange={() => handleRadioChange("Only post for my connections")}
                            />
                            <span
                                style={{
                                    color:
                                        selectedOption === "Only post for my connections"
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
                            value={text}
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
                        /> <div style={{ display: 'flex' }}>
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
                                                accept=".pdf, .jpeg, .png, .svg"
                                                onChange={handleFileChange}
                                                style={{ display: "none" }}
                                                id="replaceFileInput"
                                            />
                                            <label htmlFor="replaceFileInput"> <img alt="" src={wrw} style={{ cursor: 'pointer' }} /></label>
                                        </span>
                                        <img alt="" src={cvc} onClick={handleAttachmentDelete} style={{ cursor: 'pointer' }} width={20} height={20} />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            </div>


        </> : null
    )
}

export default CreatePostPopup;
