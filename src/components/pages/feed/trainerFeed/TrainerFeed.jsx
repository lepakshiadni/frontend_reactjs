import '../../../styles/Feed.css'
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import TrainerFeedData from './TrainerFeedData';
import { getPostTrainingRequirementAction, } from '../../../../redux/action/postRequirement.action'
import { getBookMarkedPost } from '../../../../redux/action/trainer.action'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from '@mui/material/Skeleton';





const TrainerFeed = () => {

    const [SavedData, setSavedData] = useState([])
    const [postTrainingDetails, setPostTrainingDetails] = useState([])
    const dispatch = useDispatch()


    const [open, setOpen] = useState([]);

    const handleMenuClick = (index) => {
        const updatedOpenState = [...open];
        updatedOpenState[index] = !updatedOpenState[index];
        setOpen(updatedOpenState);
    };

    const [showMoreArray, setShowMoreArray] = useState(new Array(SavedData.length).fill(false));
    const handleShowMoreClick = (index) => {
        const newShowMoreArray = [...showMoreArray];
        newShowMoreArray[index] = !newShowMoreArray[index];
        setShowMoreArray(newShowMoreArray);
    };
    let menuRef = useRef()
    let showmoreRef = useRef()

    useEffect(() => {
        let handler = (e) => {

            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen([]);
            }

            if (showmoreRef.current && !showmoreRef.current.contains(e.target)) {
                setShowMoreArray([]);
            }

        };
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    });

    useEffect(() => {
        dispatch(getPostTrainingRequirementAction())
    }, [dispatch])
    useEffect(() => {
        dispatch(getBookMarkedPost())
    }, [dispatch])
    const datafile = useSelector(({ postRequirement }) => {
        return postRequirement?.postTrainingDetails?.postTrainingDetails
    })
    useEffect(() => {
        setPostTrainingDetails(datafile)
    }, [datafile]);

    // console.log("datafile", datafile)
    const bookMarkedPost = useSelector(({ trainerSignUp }) => {
        return trainerSignUp?.addBookMarkedPost?.bookmarkedPosts;
    })



    return (
        <div>
            <div className="feed">

                <section className="centered-section">
                    <div className="centered-content">
                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <h3 style={{ marginTop: '15px', fontSize: '20px', color: '#263238' }}>Kowshik</h3>
                        <p style={{ fontSize: '14px', marginTop: '0px', color: '#6A6A6A' }}>UI UX Developer</p>
                        <p style={{ fontSize: '12px', marginTop: '10px', color: '#6A6A6A' }}>Figma | Illustrator | Photoshop | Adobe XD | <br />
                            Coreldram | Balsamiq | Wifrframe | Prototyping
                        </p>
                    </div>
                    <section style={{ width: '350px' }} >
                        <h3 style={{ color: '#888888', fontSize: '16px', marginTop: '10px', textAlign: "start" }}>Bookmarked post</h3>

                        <section ref={showmoreRef} className='scroll' style={{ border: '1px solid #EEEEEE', padding: '10px', height: '300px', marginTop: '10px' }}>

                            {
                                bookMarkedPost?.length > 0 ? <>
                                    {
                                        bookMarkedPost?.map(({ postDetails }, index) => (
                                            <div key={index}>

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

                                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                                        <div
                                                            ref={menuRef}
                                                            onClick={() => handleMenuClick(index)}
                                                            style={{ cursor: 'pointer', fontSize: '25px', fontWeight: 'bolder', color: 'gray' }}
                                                        >
                                                            ⋮
                                                        </div>
                                                        {open[index] && (
                                                            <div
                                                                style={{
                                                                    position: 'absolute',
                                                                    top: '100%', // Position below the three dots
                                                                    left: -100,
                                                                    background: 'white',
                                                                    border: '1px solid #ccc',
                                                                    borderRadius: '5px',
                                                                    width: '100px',
                                                                    zIndex: 9999, // Set a high z-index value
                                                                }}
                                                            >
                                                                <div className='option' style={{ padding: '5px', cursor: 'pointer', fontSize: '12px' }}>Connect</div>
                                                                <div className='option' style={{ padding: '5px', cursor: 'pointer', fontSize: '12px' }}>Not Connect</div>
                                                            </div>
                                                        )}
                                                    </div>

                                                </div>

                                                <p
                                                    className={showMoreArray[index] ? "show-more" : "show-less"} style={{ fontSize: '14px', color: '#888888', marginTop: "10px" }}>
                                                    {postDetails?.description}
                                                    <hr style={{ margin: '10px 0px' }} />
                                                    <div className='skilldata' >
                                                        <h5 style={{ color: '#888888' }}>Wanted skills</h5>
                                                        {postDetails?.topics.map((val, index) => (
                                                            <div key={index}>
                                                                <p>{val}</p>
                                                            </div>
                                                        ))}

                                                    </div>
                                                    <div className='skilldata2'>
                                                        <h5><span className='skillchild'>Type of training -</span> <span className='skillchild2'>{postDetails?.typeOfTraining}</span></h5>
                                                        <h5><span className='skillchild' >Experience - </span><span className='skillchild2'>{postDetails?.experience} years</span></h5>
                                                        <h5><span className='skillchild' >Duration of training -</span> <span className='skillchild2'>{postDetails?.durationCount} {postDetails?.durationType}</span></h5>
                                                        <h5><span className='skillchild' >Budget -</span> <span className='skillchild2'>₹ {postDetails?.minBudget} - ₹ {postDetails?.maxBudget}</span> </h5>
                                                        <h5 style={{ display: 'flex', alignItems: 'center', marginTop: '0px' }}><span className='skillchild' >Table of content - <span style={{ color: 'rgb(180, 161, 161)' }}> For Developer.pdf</span></span>
                                                            <span className='downlod'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                                                                    <path d="M1.33301 14.6673H10.2219M5.77745 1.33398V11.7044M5.77745 11.7044L9.48116 8.00065M5.77745 11.7044L2.07375 8.00065" stroke="#2676C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </h5>
                                                        <div style={{ display: 'flex' }}>
                                                            <h5 style={{ marginRight: '20px', marginTop: "0px", marginBottom: '0px' }}><span className='skillchild' style={{ marginBottom: '15px' }}>Start Date</span> <br /> <span className='skillchild2'>{postDetails?.startDate}</span> </h5>

                                                            <h5 style={{ margin: '0px' }}><span className='skillchild' >End Date</span> <br /> <span className='skillchild2'>{postDetails?.endDate}</span> </h5>

                                                        </div>
                                                        <h5><span className='skillchild' >Mode of Training -</span> <span className='skillchild2'>{postDetails?.modOfTraining}</span> </h5>
                                                        <button style={{
                                                            backgroundColor: '#2676C2',
                                                            border: '0px',
                                                            color: 'white',
                                                            padding: '10px 140px',
                                                            borderRadius: '10px',
                                                            marginTop: '10px',
                                                            display: 'block' // Make it a block-level element
                                                        }}>Apply</button>                            </div>
                                                </p>
                                                <button onClick={() => handleShowMoreClick(index)} style={{ background: 'none', border: 'none', color: '#2676C2', cursor: 'pointer', padding: "0px", margin: '0px' }}>
                                                    {showMoreArray[index] ? 'Show Less' : 'more'}
                                                </button>
                                                {!showMoreArray[index] && (
                                                    <div style={{ marginTop: '10px' }} className='skillFooter'>
                                                        <p style={{ color: '#2676C2', fontWeight: '400px', margin: '0px' }}>₹ 1000 - ₹ 5000</p>
                                                        <p style={{ margin: '0px' }}> <span style={{ color: 'gray' }}>Mode of Training</span> <span style={{ color: '#2676C2', fontWeight: '400px' }}>- offline</span> </p>
                                                    </div>
                                                )}
                                                <hr style={{ margin: '10px 0px' }} />

                                            </div>
                                        ))
                                    }

                                </> : <>
                                    <div className='flex gap-2'>
                                        <Skeleton variant="circular" width={50} height={50} />
                                        <Skeleton variant="text" width={270} sx={{ fontSize: '1rem' }} />
                                    </div>
                                    <div className='flex flex-col ml-[48px] gap-1 '>
                                        <Skeleton className='rounded-sm' variant="rectangular" width={270} height={60} />
                                        <Skeleton variant="text" width={270} sx={{ fontSize: '1rem' }} />
                                        <Skeleton variant="text" width={270} sx={{ fontSize: '1rem' }} />
                                        <Skeleton variant="text" width={270} sx={{ fontSize: '1rem' }} />
                                        <Skeleton variant="text" width={270} sx={{ fontSize: '1rem' }} />
                                    </div>

                                </>
                            }


                        </section>

                    </section>

                </section>

                <section>
                    <TrainerFeedData PostTrainingData={postTrainingDetails} />
                    
                </section>

            </div>
        </div>

    );
}

export default TrainerFeed;
