import { React, useState } from 'react';
import {updateApplicationStatus} from '../../../../redux/action/trainer.action'
import {useDispatch,useSelector} from 'react-redux'
const TrainerProposalRequest = ({ training }) => {
    const dispatch=useDispatch()
    const [selecetedTraining, setSelectedTraining] = useState({
        employerId:"",
        trainingDetails:"",
        trainingDetailsId:""

    });
    const deNied = (training, _id) => {

        setSelectedTraining({
            ...selecetedTraining,
            employerId: training.postedById,
            trainingDetails: training,
            trainingDetailsId: _id
        });
        setIsVisible(!isVisible);
    };
    const acCept = (training, _id) => {
        setSelectedTraining({
            ...selecetedTraining,
            employerId: training.postedById,
            trainingDetails: training,
            trainingDetailsId: _id
        });
        setIsVisible(!isVisible);
    };
    console.log('selected: ', selecetedTraining);
    const [isVisible, setIsVisible] = useState(false);
    const acceptHandler=()=>{
        dispatch(updateApplicationStatus(selecetedTraining?.trainingDetailsId,selecetedTraining?.employerId,selecetedTraining?.trainingDetails,'Accepted'))
        setIsVisible(!isVisible);
        
    }
    const deniedHandler=()=>{
        dispatch(updateApplicationStatus(selecetedTraining?.trainingDetailsId,selecetedTraining?.employerId,selecetedTraining?.trainingDetails,'Denied'))
        setIsVisible(!isVisible);
        
    }
    return (
        <>
            {
                training?.length > 0 ?
                    <>

                        {
                            training?.map((item) => {
                                console.log('training', training)
                                return item?.trainingDetails?.map(({ trainingPostDetails, _id }) => {
                                    return <>
                                        <div className='allaround' style={{ marginTop: '2rem' }}>
                                            <div className='Trainer_Info'>
                                                <div className='TTTD'>
                                                    <p>Training Program Name</p>
                                                    <h3 className='Blue_H2'>{trainingPostDetails?.trainingName}</h3>
                                                    <p>Training Topics & Subjects</p>
                                                    <div className="flex space-x-5 capitalize">
                                                        <div>{trainingPostDetails?.topics?.slice(0, 5)?.map((items) => <h2>{items}</h2>)}</div>
                                                        <div className="bg-[#8888] w-[1px]"></div>
                                                        <div>{trainingPostDetails?.topics?.slice(5, 10)?.map((items) => <h2>{items}</h2>)}</div>
                                                    </div>
                                                    <p>Type Of Training</p>
                                                    <h2>{trainingPostDetails?.typeOfTraining}</h2>
                                                    <p>Duration Of Training</p>
                                                    <h2>{trainingPostDetails?.durationCount}</h2>
                                                    <div className="SDED">
                                                        <div className="SD">
                                                            <p>Start Date</p>
                                                            <h2>{trainingPostDetails?.startDate}</h2>
                                                        </div>
                                                        <div className="ED">
                                                            <p>End Date</p>
                                                            <h2>{trainingPostDetails?.endDate}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {isVisible && (
                                                <div className="Trainer-Proposal-Management-Popup">
                                                    <div className="Trainer-Proposal-Management-Popup-modalContainer ">
                                                        <div className='Trainer-Proposal-Management-Popup-Top' >
                                                            <div className='Trainer-Proposal-Management-Popup-Posted-By'>
                                                                <h1 style={{ width: '80%', marginBottom: '15px', marginLeft: '2rem' }}>Posted By</h1>
                                                                <div className='PBB' style={{ background: '#FFF', marginLeft: '2rem' }} >

                                                                    {
                                                                        trainingPostDetails?.postedByImg ?
                                                                            <img src={trainingPostDetails?.postedByImg} alt={trainingPostDetails?.postedByName[0]} style={{ borderRadius: '100%', width: '4rem', height: '4rem' }} />
                                                                            :
                                                                            <div style={{ borderRadius: '100%', width: '4rem', height: '4rem' }}>{trainingPostDetails?.postedByName[0]}</div>
                                                                    }
                                                                    <span><h2>{trainingPostDetails?.postedByName}</h2><p>{trainingPostDetails?.postedByCompanyName}</p></span>
                                                                </div>
                                                            </div>
                                                            <div className='Trainer-Proposal-Management-Popup-info'>
                                                                <div className='C-T-B'>
                                                                    <h1>Company</h1>
                                                                    <h2>{trainingPostDetails?.postedByCompanyName}</h2>
                                                                    <h1>Training Name</h1>
                                                                    <h2>{trainingPostDetails?.postedByDesignation}</h2>
                                                                    <h1>Budget</h1>
                                                                    <h2>{trainingPostDetails?.maxBudget}-{trainingPostDetails?.minBudget}</h2>

                                                                </div>
                                                                <div className='M-L'>
                                                                    <h1>Mode</h1>
                                                                    <h2>{trainingPostDetails?.modeOfTraining}</h2>
                                                                    {
                                                                        trainingPostDetails?.modeOfTraining === 'offline' ?
                                                                            <>
                                                                                <h1>Location</h1>
                                                                                <h2>{trainingPostDetails?.location}</h2>
                                                                            </>
                                                                            :
                                                                            null
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='Trainer-Proposal-Management-Popup-Bottom'>
                                                            <h1 >Are you sure you want to deny this Request !</h1>
                                                            <div className='Trainer-Proposal-Management-Popup-button'>
                                                                <button onClick={deNied} className='Trainer-Proposal-Management-Popup-button-no'>Yes</button>
                                                                <button onClick={deNied} className='Trainer-Proposal-Management-Popup-button-yes'>Cancel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            {isVisible && (
                                                <div className="Trainer-Proposal-Management-Popup">
                                                    <div className="Trainer-Proposal-Management-Popup-modalContainer ">
                                                        <div className='Trainer-Proposal-Management-Popup-Top' >
                                                            <div className='Trainer-Proposal-Management-Popup-Posted-By'>
                                                                <h1 style={{ width: '80%', marginBottom: '15px', marginLeft: '2rem' }}>Posted By</h1>
                                                                <div className='PBB' style={{ background: '#FFF', marginLeft: '2rem' }} >

                                                                    {
                                                                        trainingPostDetails?.postedByImg ?
                                                                            <img src={trainingPostDetails?.postedByImg} alt={trainingPostDetails?.postedByName[0]} style={{ borderRadius: '100%', width: '4rem', height: '4rem' }} />
                                                                            :
                                                                            <div style={{ borderRadius: '100%', width: '4rem', height: '4rem' }}>{trainingPostDetails?.postedByName[0]}</div>
                                                                    }
                                                                    <span><h2>{trainingPostDetails?.postedByName}</h2><p>{trainingPostDetails?.postedByCompanyName}</p></span>

                                                                </div>
                                                            </div>
                                                            <div className='Trainer-Proposal-Management-Popup-info'>
                                                                <div className='C-T-B'>
                                                                    <h1>Company</h1>
                                                                    <h2>{trainingPostDetails?.postedByCompanyName}</h2>
                                                                    <h1>Training Name</h1>
                                                                    <h2>{trainingPostDetails?.postedByDesignation}</h2>
                                                                    <h1>Budget</h1>
                                                                    <h2>{trainingPostDetails?.maxBudget}-{trainingPostDetails?.minBudget}</h2>

                                                                </div>
                                                                <div className='M-L'>
                                                                    <h1>Mode</h1>
                                                                    <h2>{trainingPostDetails?.modeOfTraining}</h2>
                                                                    {
                                                                        trainingPostDetails?.modeOfTraining === 'offline' ?
                                                                            <>
                                                                                <h1>Location</h1>
                                                                                <h2>{trainingPostDetails?.location}</h2>
                                                                            </>
                                                                            :
                                                                            null
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='Trainer-Proposal-Management-Popup-Bottom'>
                                                            <h1>Do You Want To Accept This Proposal ?</h1>
                                                            <div className='Trainer-Proposal-Management-Popup-button'>
                                                                <button onClick={deniedHandler}>No</button>
                                                                <button onClick={acceptHandler}>Confirm</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <div className='ProposalStatus'>
                                                <div className='Proposall'>
                                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: '', gap: '0.5rem' }}>
                                                        <>
                                                            <h1 style={{
                                                                color: '#333',
                                                                fontFamily: 'Poppins',
                                                                fontSize: '1.125rem',
                                                                fontStyle: 'normal',
                                                                fontWeight: '600',
                                                                lineHeight: 'normal',
                                                                margin: '0'
                                                            }}>Posted By</h1>
                                                            <div className='PBB' style={{ background: '#FFF' }}>
                                                                {
                                                                    trainingPostDetails?.postedByImg ?
                                                                        <img src={trainingPostDetails?.postedByImg} alt={trainingPostDetails?.postedByName[0]} style={{ borderRadius: '100%', width: '4rem', height: '4rem' }} />
                                                                        :
                                                                        <div style={{ borderRadius: '100%', width: '4rem', height: '4rem' }}>{trainingPostDetails?.postedByName[0]}</div>
                                                                }
                                                                <span><h2>{trainingPostDetails?.postedByName}</h2><p>{trainingPostDetails?.postedByCompanyName}</p></span>
                                                            </div>
                                                        </>

                                                        <div className='B'>
                                                            <h2>Budget</h2><h1>${trainingPostDetails?.maxBudget}
                                                                {/* /<span className='capitalize'>{trainingPostDetails?.durationType?.slice(0, 3)}'s</span> */}
                                                                - ${trainingPostDetails?.minBudget}
                                                                {/* /<span className='capitalize'>{trainingPostDetails?.durationType?.slice(0, 3)}</span> */}
                                                            </h1></div>
                                                        <div className='B capitalize'>
                                                            <h2>Mode Of Training</h2><h1>{trainingPostDetails?.modeOfTraining}</h1>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='Statusss'>
                                                    <h3>{`${training.proposer} Proposed For Your Post a Requirement`}</h3>
                                                    <br />
                                                    <div className='Statuss_Buttonss'>
                                                        <button onClick={() => { deNied(trainingPostDetails, _id) }}>Deny</button>
                                                        <button onClick={()=>{acCept(trainingPostDetails, _id)}}>Accept</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                })
                            })
                        }

                    </>
                    :
                    <div>
                        No Training Proposals Yet!
                    </div>
            }
        </>
    );
};

export default TrainerProposalRequest;
