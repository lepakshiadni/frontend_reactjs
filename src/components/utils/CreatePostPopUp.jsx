import React, { useState } from "react";
import image8 from "../assets/image 15.png";
import { Stack } from "@mui/material";
import '../styles/CreatePostPopup.css'
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";

function CreatePostPopup(props) {
    const [pageVisible, setPageVisible] = useState(true);
    const [selectedOption, setSelectedOption] = useState("");
    const [inputText, setInputText] = useState("");
    const { trigger, setTrigger } = props
    const [radio1, setRadio1] = useState(false)
    const [radio2, setRadio2] = useState(false)
    const [value, setValue] = useState('')

    // const handleButtonClick = () => {
    //     if (fileInputRef.current) {
    //         fileInputRef.current.click();
    //     }
    // };

    // const handleFileChange = (e) => {
    //     const selectedFile = e.target.files[0];
    //     console.log('Selected File:', selectedFile);
    // };


    const handleCloseButtonClick = () => {
        setTrigger(false);
    };

    if (!pageVisible) {
        return null;
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            // Handle the selected file, e.g., display its name or perform an action
            console.log("Selected File:", selectedFile.name);
        }
    };

    //radio color change

    const handleRadioChange = (value) => {
        setSelectedOption(value);
    };

    //textfield

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };


    return (
        <>
            <div>
                {
                    props.trigger ? <>
                        {/* <div className="bg-white"
                            style={{
                                padding: "20px",
                                width: "744px",
                                height: "647px",
                                borderRadius: "20px",
                                // border: "1px solid hotpink",
                                margin: "20px",
                                paddingRight: "0px",
                            }}
                        >
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
                                        alt=""
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
                                        accept=".pdf"
                                        onChange={handleFileChange}
                                        style={{ display: "none" }}
                                        id="fileInput"
                                    />
                                    <label htmlFor="fileInput">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                            <path d="M16.7655 1.36747C14.9422 -0.455823 11.9451 -0.455823 10.1218 1.36747L0.131127 11.3331C-0.043709 11.508 -0.043709 11.7827 0.131127 11.9575C0.305963 12.1324 0.580706 12.1324 0.755542 11.9575L10.7462 1.99188C12.2448 0.493288 14.6675 0.493288 16.1411 1.99188C16.8654 2.7162 17.2651 3.66531 17.2651 4.68935C17.2651 5.71339 16.8654 6.6625 16.1411 7.38683L12.8192 10.7087L5.12644 18.4015C4.20231 19.3256 2.72869 19.3256 1.80456 18.4015C1.77958 18.3765 1.75461 18.3515 1.70465 18.2766C0.880425 17.3525 0.930378 15.9538 1.80456 15.0796L9.49735 7.38683L12.7943 4.08992C12.9691 3.91508 13.1689 3.84015 13.3937 3.84015C13.6185 3.84015 13.8433 3.94006 13.9931 4.08992C14.3178 4.41461 14.3178 4.9641 13.9931 5.31377L7.1995 12.1574C7.02466 12.3322 7.02466 12.6069 7.1995 12.7818C7.37434 12.9566 7.64908 12.9566 7.82391 12.7818L14.6425 5.96316C15.3169 5.28879 15.3169 4.16485 14.6425 3.49048C14.3178 3.16578 13.8682 2.99095 13.4187 2.99095C12.9441 2.99095 12.5195 3.16578 12.1948 3.49048L1.20512 14.4802C0.00624418 15.6791 -0.0686857 17.6022 1.03028 18.8511C1.08024 18.926 1.13019 18.976 1.20512 19.0509C1.80456 19.6503 2.62879 20 3.47799 20C4.35217 20 5.15142 19.6753 5.75086 19.0509L6.79988 18.0019L16.7655 8.03622C17.6397 7.16204 18.1392 5.96316 18.1392 4.71433C18.1392 3.44052 17.6397 2.24165 16.7655 1.36747Z" fill="#888888" />
                                        </svg>
                                    </label>
                                    <button
                                        style={{
                                            fontSize: "18px",
                                            fontWeight: 500,
                                            color: "#D5D5D5",
                                            fontFamily: "Poppins",
                                            outline: "none",
                                            border: "none",
                                            background: "none",
                                            color: inputText ? "#2676c2" : "#D5D5D5",
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
                                <label htmlFor="">
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
                                <label htmlFor="">
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
                            <div>
                                <TextField
                                    id="filled-multiline-flexible"
                                    multiline
                                    maxRows={4}
                                    variant="standard"
                                    placeholder="Would you like to share something?"
                                    InputLabelProps={{
                                        style: {
                                            fontFamily: 'Poppins',
                                            display: inputText ? "none" : "block",

                                        },
                                    }}
                                    InputProps={{
                                        sx: {
                                            width: '700px',
                                            color: '#888888',
                                            fontFamily: "Poppins",
                                            fontSize: '19px'

                                        }
                                    }}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div> */}
                        <div className="popup">

                            <div className=" md:w-[600px] md:h-[500px]  bg-white rounded-[20px] mt-[76px] ml-[400px] flex flex-col   " >
                                <div className="flex justify-between ">
                                    <div className="flex items-center">
                                        <div>
                                            <img className="w-[100px] h-[100px] p-[20px] rounded-full" src="https://via.placeholder.com/85x128" alt="alt" />
                                        </div>
                                        <div>
                                            <div className="text-gray-800 text-xl font-medium font-['Poppins']">Kowshik</div>
                                            <div className="text-neutral-500 text-base font-normal font-['Poppins']">UI UX Developer</div>
                                        </div>
                                    </div>
                                    <div className=" flex items-center justify-evenly w-[35%]">
                                        <div className=" flex flex-row-reverse gap-6">

                                        <button className={`${value.length > 0 ? "w-[39px] h-[27px]   text-[#2676c2] text-lg font-normal font-['Poppins'] " : "w-[39px] h-[27px]  text-[#D5D5D5] text-lg font-normal font-['Poppins']"}`}>
                                            Post
                                        </button>
                                        <button className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                                <path d="M16.7655 1.36747C14.9422 -0.455823 11.9451 -0.455823 10.1218 1.36747L0.131127 11.3331C-0.043709 11.508 -0.043709 11.7827 0.131127 11.9575C0.305963 12.1324 0.580706 12.1324 0.755542 11.9575L10.7462 1.99188C12.2448 0.493288 14.6675 0.493288 16.1411 1.99188C16.8654 2.7162 17.2651 3.66531 17.2651 4.68935C17.2651 5.71339 16.8654 6.6625 16.1411 7.38683L12.8192 10.7087L5.12644 18.4015C4.20231 19.3256 2.72869 19.3256 1.80456 18.4015C1.77958 18.3765 1.75461 18.3515 1.70465 18.2766C0.880425 17.3525 0.930378 15.9538 1.80456 15.0796L9.49735 7.38683L12.7943 4.08992C12.9691 3.91508 13.1689 3.84015 13.3937 3.84015C13.6185 3.84015 13.8433 3.94006 13.9931 4.08992C14.3178 4.41461 14.3178 4.9641 13.9931 5.31377L7.1995 12.1574C7.02466 12.3322 7.02466 12.6069 7.1995 12.7818C7.37434 12.9566 7.64908 12.9566 7.82391 12.7818L14.6425 5.96316C15.3169 5.28879 15.3169 4.16485 14.6425 3.49048C14.3178 3.16578 13.8682 2.99095 13.4187 2.99095C12.9441 2.99095 12.5195 3.16578 12.1948 3.49048L1.20512 14.4802C0.00624418 15.6791 -0.0686857 17.6022 1.03028 18.8511C1.08024 18.926 1.13019 18.976 1.20512 19.0509C1.80456 19.6503 2.62879 20 3.47799 20C4.35217 20 5.15142 19.6753 5.75086 19.0509L6.79988 18.0019L16.7655 8.03622C17.6397 7.16204 18.1392 5.96316 18.1392 4.71433C18.1392 3.44052 17.6397 2.24165 16.7655 1.36747Z" fill="#888888" />
                                            </svg>
                                        </button>
                                        </div>
                                        <input
                                            type="file"
                                            style={{ display: 'none' }}
                                            // ref={fileInputRef}
                                            onChange={handleFileChange}
                                        />
                                        <button
                                            onClick={() => { setTrigger(false) }}
                                            className="close font-[400px] text-[20px] "
                                        >
                                            <svg
                                                width="34"
                                                height="34"
                                                viewBox="0 0 34 34"
                                                fill="#2676C2"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="close">
                                                    <path
                                                        id="Vector"
                                                        d="M8.48542 8.48528L16.9707 16.9706M16.9707 16.9706L25.456 25.4558M16.9707 16.9706L8.48542 25.4558M16.9707 16.9706L25.456 8.48528"
                                                        stroke="#2676C2"
                                                        strokeWwidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <hr className="bg-[#eee] w-[570px] ml-[30px]" />
                                <div className="flex flex-col space-y-3 m-[25px] ">
                                    <div className=" flex items-center gap-2">
                                        <input onChange={() => { setRadio1(!radio1); setRadio2(false); }} checked={radio1} className="w-5 h-5" type="radio" id="123" name="abc" value="123" />
                                        <label className={`${radio1 ? " text-[#2676c2] text-base font-normal font-['Poppins']" : " text-zinc-500 text-base font-normal font-['Poppins']"}`} htmlFor="123">Post this for all sissoo member’s</label>
                                    </div>
                                    <div className=" flex items-center gap-2">
                                        <input onChange={() => { setRadio2(!radio2); setRadio1(false); }} checked={radio2} className="w-5 h-5" type="radio" id="321" name="abc" value="321" />
                                        <label className={`${radio2 ? " text-[#2676c2] text-base font-normal font-['Poppins']" : " text-zinc-500 text-base font-normal font-['Poppins']"}`} htmlFor="321">Only post for my connections</label>
                                    </div>
                                    <div className="">
                                        <label htmlFor="abc">
                                        </label>
                                    </div>
                                </div>

                                <hr className="bg-[#eee] w-[570px] ml-[30px]" />
                                <div className=" text-zinc-500 text-lg ml-[30px] mt-[20px] font-normal font-['Poppins']">
                                    <textarea onChange={(e) => { setValue(e.target.value) }} className="resize-none outline-none overflow-y-auto font-normal" value={value} cols={60} rows={6} placeholder="Would you like to share something?" />
                                </div>
                                {/* <div className=" w-full h-[58px] mt-[30px] bg-white rounded-bl-[20px] rounded-br-[20px] shadow" >
                            <div>
                                <div className="flex gap-[40px] flex-row-reverse">
                                    <button className={`${value.length > 0 ? "w-[150px] h-[58px] bg-[#2676c2] rounded-br-[20px] text-white text-lg font-normal font-['Poppins'] " : "w-[150px] h-[58px] bg-neutral-300 rounded-br-[20px] text-white text-lg font-normal font-['Poppins']"}`}>
                                        Post
                                    </button>
                                    <div>
                                        <div>
                                            <button className="h-[58px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                                    <path d="M16.7655 1.36747C14.9422 -0.455823 11.9451 -0.455823 10.1218 1.36747L0.131127 11.3331C-0.043709 11.508 -0.043709 11.7827 0.131127 11.9575C0.305963 12.1324 0.580706 12.1324 0.755542 11.9575L10.7462 1.99188C12.2448 0.493288 14.6675 0.493288 16.1411 1.99188C16.8654 2.7162 17.2651 3.66531 17.2651 4.68935C17.2651 5.71339 16.8654 6.6625 16.1411 7.38683L12.8192 10.7087L5.12644 18.4015C4.20231 19.3256 2.72869 19.3256 1.80456 18.4015C1.77958 18.3765 1.75461 18.3515 1.70465 18.2766C0.880425 17.3525 0.930378 15.9538 1.80456 15.0796L9.49735 7.38683L12.7943 4.08992C12.9691 3.91508 13.1689 3.84015 13.3937 3.84015C13.6185 3.84015 13.8433 3.94006 13.9931 4.08992C14.3178 4.41461 14.3178 4.9641 13.9931 5.31377L7.1995 12.1574C7.02466 12.3322 7.02466 12.6069 7.1995 12.7818C7.37434 12.9566 7.64908 12.9566 7.82391 12.7818L14.6425 5.96316C15.3169 5.28879 15.3169 4.16485 14.6425 3.49048C14.3178 3.16578 13.8682 2.99095 13.4187 2.99095C12.9441 2.99095 12.5195 3.16578 12.1948 3.49048L1.20512 14.4802C0.00624418 15.6791 -0.0686857 17.6022 1.03028 18.8511C1.08024 18.926 1.13019 18.976 1.20512 19.0509C1.80456 19.6503 2.62879 20 3.47799 20C4.35217 20 5.15142 19.6753 5.75086 19.0509L6.79988 18.0019L16.7655 8.03622C17.6397 7.16204 18.1392 5.96316 18.1392 4.71433C18.1392 3.44052 17.6397 2.24165 16.7655 1.36747Z" fill="#888888" />
                                                </svg>
                                            </button>
                                            <input
                                                type="file"
                                                style={{ display: 'none' }}
                                                // ref={fileInputRef}
                                                onChange={handleFileChange}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div> */}
                            </div>

                        </div>
                    </> : null
                }

            </div>
        </>
    );
}

export default CreatePostPopup;
