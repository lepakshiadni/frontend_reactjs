import Avatar from "react-avatar-edit";
import { useState } from "react";

const CropImage = (props) => {
    const [preview, setPreview] = useState(null);


    const onCrop = (view) => {
        setPreview(view);
    };

    const handleUpdate = () => {
        props.handleUpdateProfileImage(preview);
        setPreview(null)
    };
    const handleClosePopUp = () => {
        props.setTrigger(false)
        setPreview(null)
    }

    return (props.trigger) ? (
        <div className="CropImgpopup">

            <div className="CropContainer">
                <div>
                    <span >
                        <svg className=" Popclose  cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 34 34" fill="none" onClick={handleClosePopUp}>
                            <path d="M8.48542 8.48528L16.9707 16.9706M16.9707 16.9706L25.456 25.4558M16.9707 16.9706L8.48542 25.4558M16.9707 16.9706L25.456 8.48528" stroke="#2676C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                </div>
                <div className="flex justify-between  items-start p-5">
                    <div className="ps-5">
                        <Avatar
                            type='file'
                            width={300}
                            height={200}
                            onCrop={onCrop}
                            onChange={(e) => props.handleFileInputChange(e, 'profile')}
                            imageHeight={200}
                            imageWidth={300}
                            borderRadius={0}
                        />
                    </div>
                    <div className="ms-5">
                        <div>
                            <img width='123px' height='123px' className="mb-10 ms-7" src={preview} alt="" />
                        </div>
                        <button style={{ padding: '8px 70px', backgroundColor: '#2676C2', borderRadius: "10px", color: "white", }} onClick={handleUpdate}>Replace</button>
                    </div>

                </div>

            </div>
        </div>
    ) : "";
};

export default CropImage;