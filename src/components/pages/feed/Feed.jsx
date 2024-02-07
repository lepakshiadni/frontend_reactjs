import '../../styles/Feed.css';
import { useEffect, useState } from 'react';
import PopUp from './PopUp';
import { useRef } from 'react';
import TrainerApplyPopup from '../../utils/TrainerApplyPopUp';



const Feed = () => {

    const [isSelected, setIsSelected] = useState(false);
    const [isSelected2, setIsSelected2] = useState(false);

    const [PopUpButton, setPopUpButton] = useState(false)
    const [trainerApplyPopup,setTrainerApplyPopup]=useState(false)

    const [open, setOpen] = useState(false)

    const [open2, setOpen2] = useState(false)

    const [open3, setOpen3] = useState(false)

    const [showMore, setShowMore] = useState(false);
    const [showMore2, setShowMore2] = useState(false);

    const [showAllComments, setShowAllComments] = useState(false);
    const [numCommentsToShow, setNumCommentsToShow] = useState(1);
    const [messageShowMoreBasedOnProfile, SetMessageShowMoreBasedOnProfile] = useState(false)
    const [resetComments, setResetComments] = useState(false);
    const [selectedRequirement,setSelectedRequirement]=useState(null)
    let menuRef = useRef()
    let menuRef2 = useRef()
    let menuRef3 = useRef()
    let commentRef = useRef()
    let showmoreRef = useRef()
    let showmoreRef2 = useRef()

    useEffect(() => {
        let handler = (e) => {

            // console.log('Clicked element:', e.target);
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
            if (menuRef2.current && !menuRef2.current.contains(e.target)) {
                setOpen2(false);
            }
            if (menuRef3.current && !menuRef3.current.contains(e.target)) {
                setOpen3(false);
            }
            if (commentRef.current && !commentRef.current.contains(e.target)) {
                setShowAllComments(false);
            }
            if (commentRef.current && !commentRef.current.contains(e.target) && !showAllComments) {
                setNumCommentsToShow((prevNum) => Math.min(prevNum + 4, data.length));
            }
            if (showmoreRef.current && !showmoreRef.current.contains(e.target)) {
                setShowMore(false);
            }
            if (showmoreRef2.current && !showmoreRef2.current.contains(e.target)) {
                setShowMore2(false);
            }
            if (resetComments) {
                setShowAllComments(false);
                setNumCommentsToShow(1);
                setResetComments(false);
            }

        };
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    });
    const data = Array.from({ length: 20 }, (_, index) => ({
        user: 'Eleesa',
        company: 'Wipro',
        imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
        text: 'hi welcome',
    }));
    const togleHandleMessageMore = (section) => {
        if (section === 'basedOnProfile') {
            SetMessageShowMoreBasedOnProfile(!messageShowMoreBasedOnProfile);
            setResetComments(true);
        }
    }

    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        console.log('Selected File:', selectedFile);
    };


    const handleIconClick = () => {
        setIsSelected(!isSelected);
    };
    const handleIconClick2 = () => {
        setIsSelected2(!isSelected2);
    };



    return (
        <div>

            <PopUp trigger={PopUpButton} setTrigger={setPopUpButton}>

            </PopUp>
            <TrainerApplyPopup trigger={trainerApplyPopup} setTrigger={setTrainerApplyPopup} postRequirementData={selectedRequirement} />

            <div className="feed" >

                <section className="centered-section">
                    <div className="centered-content">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <h3 style={{ marginTop: '15px', fontSize: '20px', color: '#263238' }}>Kowshik</h3>
                        <p style={{ fontSize: '14px', marginTop: '0px', color: '#6A6A6A' }}>UI UX Developer</p>
                        <p style={{ fontSize: '12px', marginTop: '10px', color: '#6A6A6A' }}>Figma | Illustrator | Photoshop | Adobe XD | <br />
                            Coreldram | Balsamiq | Wifrframe | Prototyping
                        </p>
                    </div>
                    <div>
                        <section >
                            <h3 style={{ color: '#888888', fontSize: '16px', marginTop: '10px', textAlign: "start" }}>Bookmarked post</h3>
                            <section className='scroll' style={{ border: '1px solid #EEEEEE', padding: '10px', height: '300px', marginTop: '10px' }}>
                                <div ref={showmoreRef}>

                                    <div className='bookmark data' style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex' }}>
                                            <div style={{ marginRight: '10px' }}>
                                                <img className='img2' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                            </div>
                                            <div style={{ textAlign: 'start' }}>
                                                <h5 style={{ fontSize: '18px', margin: '0px', color: "#333333" }}>Eleesa</h5>
                                                <p style={{ fontSize: '14px', margin: '0px', color: '#535353' }}>Wipro</p>
                                            </div>
                                        </div>

                                        <div style={{ position: 'static', display: 'inline-block' }}>
                                            <div
                                                ref={menuRef}
                                                onClick={() => { setOpen(!open) }}

                                                style={{ cursor: 'pointer', fontSize: '25px', fontWeight: 'bolder', color: 'gray' }}>⋮</div>
                                            {open && (
                                                <div style={{ position: 'absolute', left: 270, background: 'white', border: '1px solid #ccc', borderRadius: '5px', zIndex: 1, width: '100px' }}>
                                                    <div className='option' style={{ padding: '5px', cursor: 'pointer', fontSize: '12px' }}>Connect</div>
                                                    <div className='option' style={{ padding: '5px', cursor: 'pointer', fontSize: '12px' }}>Not Connect</div>
                                                </div>
                                            )}
                                        </div>

                                    </div>

                                    <hr style={{ margin: '10px 0px' }} />
                                    <p
                                        className={showMore ? "show-more" : "show-less"} style={{ fontSize: '14px', color: '#888888', marginTop: "10px" }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae natus animi illo nobis obcaecati ad consectetur, autem nam hic ipsum, dolorem nulla soluta aspernatur explicabo voluptatibus voluptas culpa consequatur voluptatum! Voluptatum asperiores, vero animi, quibusdam laboriosam nemo nobis iusto nulla eaque expedita sed quasi autem voluptas rerum sequi eius nihil harum dolorem id? Iure enim vero ad possimus atque quam reiciendis. Perspiciatis, dolorum quos explicabo ab provident quo sunt, corporis cupiditate mollitia aperiam ipsam velit veritatis quod quis molestias omnis expedita dolores alias? Consequuntur minima vero unde praesentium ab magnam eius ut culpa corrupti perspiciatis, esse harum, quas similique laudantium?
                                        <div className='skilldata' >
                                            <h5 style={{ color: '#888888' }}>Wanted skills</h5>
                                            <p>Phython</p>
                                            <p>Bootsrap</p>
                                            <p>Jsquery</p>
                                            <p>Java script</p>
                                            <p>Angular</p>
                                        </div>
                                        <div className='skilldata2'>
                                            <h5><span className='skillchild'>Type of training -</span> <span className='skillchild2'>Corporate training</span></h5>
                                            <h5><span className='skillchild' >Experience - </span><span className='skillchild2'>5 years</span></h5>
                                            <h5><span className='skillchild' >Duration of training -</span> <span className='skillchild2'>2 days</span></h5>
                                            <h5><span className='skillchild' >Budget -</span> <span className='skillchild2'>₹ 1000 - ₹ 5000</span> </h5>
                                            <h5 style={{ display: 'flex', alignItems: 'center', marginTop: '0px' }}><span className='skillchild' >Table of content - <span style={{ color: 'rgb(180, 161, 161)' }}> For Developer.pdf</span></span>
                                                <span className='downlod'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                                                        <path d="M1.33301 14.6673H10.2219M5.77745 1.33398V11.7044M5.77745 11.7044L9.48116 8.00065M5.77745 11.7044L2.07375 8.00065" stroke="#2676C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </h5>
                                            <div style={{ display: 'flex' }}>
                                                <h5 style={{ margin: '0px' }}><span className='skillchild' style={{ marginBottom: '15px' }}>Start Date</span> <br /> <span className='skillchild2'>20-12-2023</span> </h5>

                                                <h5 style={{ margin: '0px' }}><span className='skillchild' >End Date</span> <br /> <span className='skillchild2'>22-12-2023</span> </h5>

                                            </div>
                                            <h5><span className='skillchild' >Mode of Training -</span> <span className='skillchild2'>offline</span> </h5>
                                            <button style={{
                                                backgroundColor: '#2676C2',
                                                border: '0px',
                                                color: 'white',
                                                padding: '10px 140px',
                                                borderRadius: '10px',
                                                marginTop: '10px',
                                                display: 'block' // Make it a block-level element
                                            }}
                                            onClick={()=>{setTrainerApplyPopup(true)}}
                                            >Apply</button>                            </div>
                                    </p>
                                    <button onClick={() => setShowMore(true)} style={{ background: 'none', border: 'none', color: '#2676C2', cursor: 'pointer', padding: "0px", margin: '0px' }}>
                                        {showMore ? '' : 'more'}
                                    </button>
                                    <hr style={{ margin: '10px 0px' }} />
                                    {!showMore && (
                                        <div style={{ marginTop: '10px' }} className='skillFooter'>
                                            <p style={{ color: '#2676C2', fontWeight: '400px', margin: '0px' }}>₹ 1000 - ₹ 5000</p>
                                            <p style={{ margin: '0px' }}> <span style={{ color: 'gray' }}>Mode of Training</span> <span style={{ color: '#2676C2', fontWeight: '400px' }}>- offline</span> </p>
                                        </div>
                                    )}

                                </div>

                            </section>
                        </section>
                    </div>
                </section>

                <div className="w-[70%]" >
                    {/* <h3 style={{ color: '#888888', fontSize: '16px', marginTop: '10px' }}>Based on Your Profile</h3> */}
                    <section >
                        <section ref={showmoreRef2} style={{ marginTop: '20px' }} >
                            <div>
                                <div className='centered-section2'>
                                    <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex' }}>
                                            <div style={{ marginRight: '10px' }}>
                                                <img className='img2' height='60px' width='60px' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                            </div>
                                            <div style={{ textAlign: 'start' }}>
                                                <h5 style={{ fontSize: '18px', margin: '0px', color: '#333333' }}>Eleesa</h5>
                                                <p style={{ fontSize: '14px', margin: '0px', color: "#535353" }}>Wipro</p>
                                            </div>
                                        </div>
                                        <div className='inst' onClick={handleIconClick}>

                                            {isSelected ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="18" viewBox="0 0 14 18" fill="none" onClick={() => handleIconClick(true)}>
                                                    <path d="M0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H12C12.55 0 13.0208 0.195833 13.4125 0.5875C13.8042 0.979167 14 1.45 14 2V18L7 15L0 18Z" fill="#2676C2" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" onClick={() => handleIconClick(false)} >
                                                    <path d="M4.16699 17.5V4.16667C4.16699 3.70833 4.33019 3.31597 4.65658 2.98958C4.98296 2.66319 5.37533 2.5 5.83366 2.5H14.167C14.6253 2.5 15.0177 2.66319 15.3441 2.98958C15.6705 3.31597 15.8337 3.70833 15.8337 4.16667V17.5L10.0003 15L4.16699 17.5ZM5.83366 14.9583L10.0003 13.1667L14.167 14.9583V4.16667H5.83366V14.9583Z" fill="#8D8D8D" className='icon-path' />
                                                </svg>
                                            )}

                                        </div>

                                        <div style={{ position: 'static', display: 'inline-block' }}>
                                            <div ref={menuRef2} onClick={() => { setOpen2(!open2) }} style={{ cursor: 'pointer', fontSize: '25px', fontWeight: 'bolder', color: 'gray', marginRight: "30px" }}>⋮</div>
                                            {open2 && (
                                                <div style={{ position: 'absolute', background: 'white', border: '1px solid #ccc', borderRadius: '5px', zIndex: 1, width: '100px', right: 110 }}>
                                                    <div className='option' style={{ padding: '5px', cursor: 'pointer', fontSize: '12px' }}>Connect</div>
                                                    <div className='option' style={{ padding: '5px', cursor: 'pointer', fontSize: '12px' }}>Not Connect</div>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                    <h5 style={{ fontSize: '15px', color: '#535353', marginTop: '10px' }}>UI UX Designer</h5>
                                    <p
                                        className={showMore2 ? "show-more2" : "show-less2"} style={{ fontSize: '14px', color: '#888888' }}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae natus animi illo nobis obcaecati ad consectetur, autem nam hic ipsum, dolorem nulla soluta aspernatur explicabo voluptatibus voluptas culpa consequatur voluptatum! Voluptatum asperiores, vero animi, quibusdam laboriosam nemo nobis iusto nulla eaque expedita sed quasi autem voluptas rerum sequi eius nihil harum dolorem id? Iure enim vero ad possimus atque quam reiciendis. Perspiciatis, dolorum quos explicabo ab provident quo sunt, corporis cupiditate mollitia aperiam ipsam velit veritatis quod quis molestias omnis expedita dolores alias? Consequuntur minima vero unde praesentium ab magnam eius ut culpa corrupti perspiciatis, esse harum, quas similique laudantium?
                                        <hr style={{ margin: '10px 0px' }} />
                                        <div className='skilldata'>

                                            <div style={{ display: 'flex', marginTop: '10px', height: '25px' }}>
                                                <h5 style={{ color: '#888888' }}>Wanted skills</h5>
                                                <button style={{
                                                    backgroundColor: '#2676C2',
                                                    border: '0px',
                                                    color: 'white',
                                                    padding: '5px 50px',
                                                    borderRadius: '10px',
                                                    marginLeft: '370px',  // Center horizontally
                                                    display: 'block', // Make it a block-level element
                                                    height: '30px'
                                                }}
                                                onClick={()=>{setTrainerApplyPopup(true)}}
                                                >Apply</button>
                                            </div>
                                            <div>
                                                <p>Phython</p>
                                                <p>Bootsrap</p>
                                                <p>Jsquery</p>
                                                <p>Java script</p>
                                                <p>Angular</p>
                                            </div>
                                        </div>
                                        <div className='skilldata2'>
                                            <h5><span className='skillchild'>Type of training -</span> <span className='skillchild2'>Corporate training</span></h5>
                                            <h5><span className='skillchild' >Experience - </span><span className='skillchild2'>5 years</span></h5>
                                            <h5><span className='skillchild' >Duration of training -</span> <span className='skillchild2'>2 days</span></h5>
                                            <h5><span className='skillchild' >Budget -</span> <span className='skillchild2'>₹ 1000 - ₹ 5000</span> </h5>
                                            <h5 style={{ display: 'flex', alignItems: 'center', marginTop: '0px' }}><span className='skillchild' >Table of content - <span style={{ color: 'rgb(180, 161, 161)' }}> For Developer.pdf</span></span>
                                                <span className='downlod'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                                                        <path d="M1.33301 14.6673H10.2219M5.77745 1.33398V11.7044M5.77745 11.7044L9.48116 8.00065M5.77745 11.7044L2.07375 8.00065" stroke="#2676C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                            </h5>
                                            <div style={{ display: 'flex' }} >
                                                <h5 style={{ margin: '0px' }}><span className='skillchild' style={{ marginBottom: '15px' }}>Start Date</span> <br /> <span className='skillchild2'>20-12-2023</span> </h5>

                                                <h5 style={{ margin: '0px' }}><span className='skillchild' >End Date</span> <br /> <span className='skillchild2'>22-12-2023</span> </h5>

                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                                <h5><span className='skillchild' >Mode of Training -</span> <span className='skillchild2'>offline</span> </h5>
                                                <div className='skillfooter2'>
                                                    {isSelected2 ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none" style={{ cursor: 'pointer' }} onClick={() => handleIconClick2(true)}>
                                                            <path d="M15.2307 18.5961H5.32688V6.59612L11.9615 0L12.8076 0.846124C12.9115 0.949974 12.9977 1.08747 13.0663 1.25862C13.1348 1.42977 13.1691 1.59099 13.1691 1.74227V1.99612L12.1076 6.59612H18.1923C18.6679 6.59612 19.0881 6.7785 19.4528 7.14325C19.8176 7.50798 20 7.92818 20 8.40383V10.0192C20 10.123 19.9891 10.2352 19.9673 10.3557C19.9455 10.4762 19.9128 10.5884 19.8692 10.6923L17.0038 17.4538C16.8602 17.7743 16.6198 18.0448 16.2827 18.2653C15.9455 18.4858 15.5948 18.5961 15.2307 18.5961ZM3.82693 6.59612V18.5961H0V6.59612H3.82693Z" fill="#2676C2" />
                                                        </svg>) : (
                                                        <svg className='like' onClick={() => handleIconClick2(false)} xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="#2676c3" style={{ cursor: 'pointer' }}>
                                                            <path d="M5.17851 6.64395H1H0.85V6.79395V17.5939V17.7439H1H5.09038H5.24038H5.39038H14.7077C15.0676 17.7439 15.4113 17.6344 15.7365 17.4218L15.6544 17.2962L15.7365 17.4218C16.0604 17.21 16.2977 16.9455 16.4403 16.6272L16.4404 16.6272L16.4416 16.6244L19.0204 10.539L19.021 10.5392L19.0251 10.5263C19.0567 10.428 19.0849 10.3226 19.11 10.2103C19.1362 10.0931 19.15 9.98101 19.15 9.8747V8.42088C19.15 7.94945 18.9674 7.53406 18.6137 7.1803C18.2599 6.82651 17.8445 6.64395 17.3731 6.64395H11.5316L12.4446 2.68767L12.4484 2.67102V2.65394V2.42547C12.4484 2.26652 12.4124 2.1024 12.3451 1.93439L12.3451 1.93438C12.2776 1.76617 12.1901 1.62384 12.0791 1.51288L12.0791 1.51287L11.3176 0.751356L11.2118 0.645598L11.1058 0.751048L5.17851 6.64395ZM5.09038 16.0939H2.49998V8.29393H5.09038V16.0939ZM14.7077 16.0939H6.74036V7.43087L10.503 3.68382L9.49031 8.11048L9.44834 8.29393H9.63653H17.3731C17.4184 8.29393 17.4452 8.30703 17.4661 8.32789C17.4869 8.34874 17.5 8.37552 17.5 8.42088V9.91323L14.916 15.9598C14.8925 16.0146 14.8636 16.0431 14.833 16.059L14.833 16.059C14.7843 16.0845 14.743 16.0939 14.7077 16.0939Z" fill="#8D8D8D" stroke="#8D8D8D" stroke-width="0.3" className='icon-path' />

                                                        </svg>
                                                    )}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none" onClick={() => togleHandleMessageMore('basedOnProfile')} style={{ cursor: 'pointer' }}>
                                                        <path d="M3.59961 16.9203L5.12357 15.7012L5.13478 15.6926C5.45249 15.4384 5.61281 15.3101 5.79168 15.2188C5.95216 15.1368 6.12328 15.0771 6.2998 15.0408C6.49877 15 6.70603 15 7.12207 15H15.8031C16.921 15 17.4806 15 17.908 14.7822C18.2843 14.5905 18.5905 14.2842 18.7822 13.9079C19 13.4805 19 12.9215 19 11.8036V4.19691C19 3.07899 19 2.5192 18.7822 2.0918C18.5905 1.71547 18.2837 1.40973 17.9074 1.21799C17.4796 1 16.9203 1 15.8002 1H4.2002C3.08009 1 2.51962 1 2.0918 1.21799C1.71547 1.40973 1.40973 1.71547 1.21799 2.0918C1 2.51962 1 3.08009 1 4.2002V15.6712C1 16.7369 1 17.2696 1.21846 17.5433C1.40845 17.7813 1.69644 17.9198 2.00098 17.9195C2.35115 17.9191 2.76744 17.5861 3.59961 16.9203Z" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

                                                    </svg>
                                                    <svg className='sendFooter' xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none" onClick={() => setPopUpButton(true)} >
                                                        <path d="M3.7877 10.5782L10.6412 10.5782M16.2379 11.9923L3.94466 18.5004C2.84298 19.0837 2.29183 19.3754 1.92856 19.2915C1.61346 19.2188 1.3531 18.9989 1.22953 18.7001C1.08705 18.3555 1.28403 17.7632 1.67834 16.5802L3.51042 11.084C3.573 10.8963 3.60399 10.8026 3.61642 10.7066C3.62745 10.6214 3.62799 10.5353 3.61697 10.45C3.60482 10.3562 3.57418 10.2643 3.51439 10.085L1.67809 4.57606C1.28377 3.3931 1.08676 2.8014 1.22924 2.45681C1.35281 2.15797 1.61313 1.93763 1.92822 1.86487C2.29155 1.78097 2.84286 2.07247 3.9449 2.6559L16.2381 9.16407C17.1045 9.62275 17.5377 9.8523 17.6794 10.1582C17.8027 10.4247 17.8029 10.7319 17.6795 10.9984C17.538 11.3042 17.1048 11.5335 16.2393 11.9917L16.2379 11.9923Z" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                    </p>
                                    <button ref={showmoreRef2} onClick={() => setShowMore2(true)} style={{ background: 'none', border: 'none', color: '#2676C2', cursor: 'pointer', padding: "0px", margin: '0px' }}>
                                        {showMore2 ? '' : 'more'}
                                    </button>

                                    {!showMore2 && (

                                        <section>
                                            <hr style={{ margin: '10px 0px' }} />

                                            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>

                                                <div className='skillFooter'>
                                                    <p style={{ color: '#2676C2', fontWeight: '400px', margin: '0px' }}>₹ 1000 - ₹ 5000</p>
                                                    <p style={{ margin: '0px' }}> <span style={{ color: 'gray' }}>Mode of Training</span> <span style={{ color: '#2676C2', fontWeight: '400px' }}>- offline</span> </p>
                                                </div>
                                                <div className='skillfooter2'>
                                                    {isSelected2 ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none" style={{ cursor: 'pointer' }} onClick={() => handleIconClick2(true)}>
                                                            <path d="M15.2307 18.5961H5.32688V6.59612L11.9615 0L12.8076 0.846124C12.9115 0.949974 12.9977 1.08747 13.0663 1.25862C13.1348 1.42977 13.1691 1.59099 13.1691 1.74227V1.99612L12.1076 6.59612H18.1923C18.6679 6.59612 19.0881 6.7785 19.4528 7.14325C19.8176 7.50798 20 7.92818 20 8.40383V10.0192C20 10.123 19.9891 10.2352 19.9673 10.3557C19.9455 10.4762 19.9128 10.5884 19.8692 10.6923L17.0038 17.4538C16.8602 17.7743 16.6198 18.0448 16.2827 18.2653C15.9455 18.4858 15.5948 18.5961 15.2307 18.5961ZM3.82693 6.59612V18.5961H0V6.59612H3.82693Z" fill="#2676C2" />
                                                        </svg>) : (
                                                        <svg className='like' onClick={() => handleIconClick2(false)} xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="#2676c3" style={{ cursor: 'pointer' }}>
                                                            <path d="M5.17851 6.64395H1H0.85V6.79395V17.5939V17.7439H1H5.09038H5.24038H5.39038H14.7077C15.0676 17.7439 15.4113 17.6344 15.7365 17.4218L15.6544 17.2962L15.7365 17.4218C16.0604 17.21 16.2977 16.9455 16.4403 16.6272L16.4404 16.6272L16.4416 16.6244L19.0204 10.539L19.021 10.5392L19.0251 10.5263C19.0567 10.428 19.0849 10.3226 19.11 10.2103C19.1362 10.0931 19.15 9.98101 19.15 9.8747V8.42088C19.15 7.94945 18.9674 7.53406 18.6137 7.1803C18.2599 6.82651 17.8445 6.64395 17.3731 6.64395H11.5316L12.4446 2.68767L12.4484 2.67102V2.65394V2.42547C12.4484 2.26652 12.4124 2.1024 12.3451 1.93439L12.3451 1.93438C12.2776 1.76617 12.1901 1.62384 12.0791 1.51288L12.0791 1.51287L11.3176 0.751356L11.2118 0.645598L11.1058 0.751048L5.17851 6.64395ZM5.09038 16.0939H2.49998V8.29393H5.09038V16.0939ZM14.7077 16.0939H6.74036V7.43087L10.503 3.68382L9.49031 8.11048L9.44834 8.29393H9.63653H17.3731C17.4184 8.29393 17.4452 8.30703 17.4661 8.32789C17.4869 8.34874 17.5 8.37552 17.5 8.42088V9.91323L14.916 15.9598C14.8925 16.0146 14.8636 16.0431 14.833 16.059L14.833 16.059C14.7843 16.0845 14.743 16.0939 14.7077 16.0939Z" fill="#8D8D8D" stroke="#8D8D8D" stroke-width="0.3" className='icon-path' />

                                                        </svg>
                                                    )}

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none" style={{ cursor: 'pointer' }}
                                                        onClick={() => {
                                                            togleHandleMessageMore('basedOnProfile');
                                                        }}>
                                                        <path d="M3.59961 16.9203L5.12357 15.7012L5.13478 15.6926C5.45249 15.4384 5.61281 15.3101 5.79168 15.2188C5.95216 15.1368 6.12328 15.0771 6.2998 15.0408C6.49877 15 6.70603 15 7.12207 15H15.8031C16.921 15 17.4806 15 17.908 14.7822C18.2843 14.5905 18.5905 14.2842 18.7822 13.9079C19 13.4805 19 12.9215 19 11.8036V4.19691C19 3.07899 19 2.5192 18.7822 2.0918C18.5905 1.71547 18.2837 1.40973 17.9074 1.21799C17.4796 1 16.9203 1 15.8002 1H4.2002C3.08009 1 2.51962 1 2.0918 1.21799C1.71547 1.40973 1.40973 1.71547 1.21799 2.0918C1 2.51962 1 3.08009 1 4.2002V15.6712C1 16.7369 1 17.2696 1.21846 17.5433C1.40845 17.7813 1.69644 17.9198 2.00098 17.9195C2.35115 17.9191 2.76744 17.5861 3.59961 16.9203Z" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

                                                    </svg>
                                                    <svg className='sendFooter' xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none" onClick={() => setPopUpButton(true)}  >
                                                        <path d="M3.7877 10.5782L10.6412 10.5782M16.2379 11.9923L3.94466 18.5004C2.84298 19.0837 2.29183 19.3754 1.92856 19.2915C1.61346 19.2188 1.3531 18.9989 1.22953 18.7001C1.08705 18.3555 1.28403 17.7632 1.67834 16.5802L3.51042 11.084C3.573 10.8963 3.60399 10.8026 3.61642 10.7066C3.62745 10.6214 3.62799 10.5353 3.61697 10.45C3.60482 10.3562 3.57418 10.2643 3.51439 10.085L1.67809 4.57606C1.28377 3.3931 1.08676 2.8014 1.22924 2.45681C1.35281 2.15797 1.61313 1.93763 1.92822 1.86487C2.29155 1.78097 2.84286 2.07247 3.9449 2.6559L16.2381 9.16407C17.1045 9.62275 17.5377 9.8523 17.6794 10.1582C17.8027 10.4247 17.8029 10.7319 17.6795 10.9984C17.538 11.3042 17.1048 11.5335 16.2393 11.9917L16.2379 11.9923Z" stroke="#8D8D8D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    )}

                                </div>

                                {!messageShowMoreBasedOnProfile ? null : (
                                    <div>
                                        <div className='messageFooter'>
                                            <div className='messageContent'>
                                                <img className='img2' height='50px' width='50px' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                                                <div className='messageChild'>
                                                    <div>
                                                        <input type="text" style={{ border: '2px solid whitesmoke', width: '350px', outline: "none", height: '50px', borderTopLeftRadius: '8px', borderEndStartRadius: '8px', borderRight: 'none', paddingLeft: '10px' }} placeholder="Write a comment..." />
                                                    </div>
                                                    <div onClick={handleButtonClick}>
                                                        <button
                                                            style={{
                                                                padding: '11px 30px',
                                                                border: '2px solid whitesmoke',
                                                                backgroundColor: 'white',
                                                                borderLeft: 'none',
                                                                borderRight: 'none',
                                                                height: '50px',
                                                                width: '90px'
                                                            }}
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                                                                <path d="M16.7655 1.36747C14.9422 -0.455823 11.9451 -0.455823 10.1218 1.36747L0.131127 11.3331C-0.043709 11.508 -0.043709 11.7827 0.131127 11.9575C0.305963 12.1324 0.580706 12.1324 0.755542 11.9575L10.7462 1.99188C12.2448 0.493288 14.6675 0.493288 16.1411 1.99188C16.8654 2.7162 17.2651 3.66531 17.2651 4.68935C17.2651 5.71339 16.8654 6.6625 16.1411 7.38683L12.8192 10.7087L5.12644 18.4015C4.20231 19.3256 2.72869 19.3256 1.80456 18.4015C1.77958 18.3765 1.75461 18.3515 1.70465 18.2766C0.880425 17.3525 0.930378 15.9538 1.80456 15.0796L9.49735 7.38683L12.7943 4.08992C12.9691 3.91508 13.1689 3.84015 13.3937 3.84015C13.6185 3.84015 13.8433 3.94006 13.9931 4.08992C14.3178 4.41461 14.3178 4.9641 13.9931 5.31377L7.1995 12.1574C7.02466 12.3322 7.02466 12.6069 7.1995 12.7818C7.37434 12.9566 7.64908 12.9566 7.82391 12.7818L14.6425 5.96316C15.3169 5.28879 15.3169 4.16485 14.6425 3.49048C14.3178 3.16578 13.8682 2.99095 13.4187 2.99095C12.9441 2.99095 12.5195 3.16578 12.1948 3.49048L1.20512 14.4802C0.00624418 15.6791 -0.0686857 17.6022 1.03028 18.8511C1.08024 18.926 1.13019 18.976 1.20512 19.0509C1.80456 19.6503 2.62879 20 3.47799 20C4.35217 20 5.15142 19.6753 5.75086 19.0509L6.79988 18.0019L16.7655 8.03622C17.6397 7.16204 18.1392 5.96316 18.1392 4.71433C18.1392 3.44052 17.6397 2.24165 16.7655 1.36747Z" fill="#888888" />
                                                            </svg>
                                                        </button>
                                                        <input
                                                            type="file"
                                                            style={{ display: 'none' }}
                                                            ref={fileInputRef}
                                                            onChange={handleFileChange}
                                                        />
                                                    </div>
                                                    <div>
                                                        <button style={{ padding: '10px 30px', border: '2px solid #2676C2', backgroundColor: '#2676C2', borderStartEndRadius: '8px', borderEndEndRadius: '8px', height: '50px', width: '90px' }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
                                                                <path d="M3.7877 10.5782L10.6412 10.5782M16.2379 11.9923L3.94466 18.5004C2.84298 19.0837 2.29183 19.3754 1.92856 19.2915C1.61346 19.2188 1.3531 18.9989 1.22953 18.7001C1.08705 18.3555 1.28403 17.7632 1.67834 16.5802L3.51042 11.084C3.573 10.8963 3.60399 10.8026 3.61642 10.7066C3.62745 10.6214 3.62799 10.5353 3.61697 10.45C3.60482 10.3562 3.57418 10.2643 3.51439 10.085L1.67809 4.57606C1.28377 3.3931 1.08676 2.8014 1.22924 2.45681C1.35281 2.15797 1.61313 1.93763 1.92822 1.86487C2.29155 1.78097 2.84286 2.07247 3.9449 2.6559L16.2381 9.16407C17.1045 9.62275 17.5377 9.8523 17.6794 10.1582C17.8027 10.4247 17.8029 10.7319 17.6795 10.9984C17.538 11.3042 17.1048 11.5335 16.2393 11.9917L16.2379 11.9923Z"
                                                                    stroke='white' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                            <h6 style={{ marginTop: '10px', color: '#535353', fontSize: '14px', fontWeight: '500' }}> Most Recent comment </h6>

                                            {showAllComments ? (

                                                <div>
                                                    {data.map((item, index) => (
                                                        <div key={index} style={{ display: 'flex', margin: '5px', marginTop: '10px' }}>
                                                            <img className='img2' height='40px' width='40px' src={item.imageUrl} alt="" />
                                                            <div style={{ width: "436px", height: '96px', backgroundColor: '#f0f0f0', padding: '10px', marginLeft: '10px', borderStartEndRadius: '15px', borderEndStartRadius: '15px', borderEndEndRadius: '15px', border: '2px solid #E9E9E9' }}>
                                                                <div style={{ display: 'flex' }}>
                                                                    <div>
                                                                        <h5 style={{ fontSize: '14px', margin: '0px', color: '#333333' }}>{item.user}</h5>
                                                                        <p style={{ fontSize: '12px', margin: '0px', color: '#777777' }}>{item.company}</p>
                                                                    </div>
                                                                    <div style={{ position: 'static', display: 'inline-block' }}>
                                                                        <div ref={menuRef3} onClick={() => setOpen3(!open3)} style={{ cursor: 'pointer', fontSize: '25px', fontWeight: 'bolder', color: 'gray', marginLeft: '360px' }}>⋮</div>
                                                                        {open3 && (
                                                                            <div style={{ position: 'absolute', top: '61%', right: 250, background: 'white', border: '1px solid #ccc', borderRadius: '5px', zIndex: 1, width: '100px' }}>
                                                                                <div className='option' style={{ padding: '5px 30px', cursor: 'pointer', fontSize: '12px' }}>Delete</div>
                                                                                <div className='option' style={{ padding: '5px 30px', cursor: 'pointer', fontSize: '12px' }}>Report</div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <p style={{ margin: '0px', color: '#888888', fontSize: '14px' }}>{item.text}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                            ) : (

                                                <div>

                                                    {data.slice(0, numCommentsToShow).map((item, index) => (
                                                        <div key={index} style={{ display: 'flex', margin: '5px', marginTop: '10px' }}>
                                                            <img className='img2' height='40px' width='40px' src={item.imageUrl} alt="" />
                                                            <div style={{ width: "436px", height: '96px', backgroundColor: '#f0f0f0', padding: '10px', marginLeft: '10px', borderStartEndRadius: '15px', borderEndStartRadius: '15px', borderEndEndRadius: '15px', border: '2px solid #E9E9E9' }}>
                                                                <div style={{ display: 'flex' }}>
                                                                    <div>
                                                                        <h5 style={{ fontSize: '14px', margin: '0px', color: '#333333' }}>{item.user}</h5>
                                                                        <p style={{ fontSize: '12px', margin: '0px', color: '#777777' }}>{item.company}</p>
                                                                    </div>
                                                                    <div style={{ position: 'static', display: 'inline-block' }}>
                                                                        <div ref={menuRef3} onClick={() => setOpen3(!open3)} style={{ cursor: 'pointer', fontSize: '25px', fontWeight: 'bolder', color: 'gray', marginLeft: '360px' }}>⋮</div>
                                                                        {open3 && (
                                                                            <div style={{ position: 'absolute', top: '70%', right: 250, background: 'white', border: '1px solid #ccc', borderRadius: '5px', zIndex: 1, width: '100px' }}>
                                                                                <div className='option' style={{ padding: '5px 30px', cursor: 'pointer', fontSize: '12px' }}>Delete</div>
                                                                                <div className='option' style={{ padding: '5px 30px', cursor: 'pointer', fontSize: '12px' }}>Report</div>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <p style={{ margin: '0px', color: '#888888', fontSize: '14px' }}>{item.text}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}

                                                </div>

                                            )}

                                            {!showAllComments && (
                                                <h6
                                                    style={{ color: '#2676C2', marginTop: '5px', cursor: 'pointer', fontWeight: '500' }}

                                                    onClick={() => {
                                                        setNumCommentsToShow((prevNum) => prevNum + 4);
                                                        if (numCommentsToShow + 4 >= data.length) {
                                                            setShowAllComments(true);
                                                        }
                                                    }}>
                                                    View More Comments
                                                </h6>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>


                    </section>
                
                </div>


            </div>
        </div>

    );
}

export default Feed;




