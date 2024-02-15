import {React,useState} from 'react';

const TrainerProposalRequest = ({ training }) => {
    const deNied = () => { setIsVisible(!isVisible); };
    const acCept = () => { setIsVisible(!isVisible); };
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className='allaround' style={{ marginTop: '2rem' }}>
            <div className='Trainer_Info'>
                <div className='TTTD'>
                    <p>Training Program Name</p>
                    <h3 className='Blue_H2'>{training.trainingName}</h3>
                    <p>Training Topics & Subjects</p>
                    <h2>{training.topics}</h2>
                    <p>Type Of Training</p>
                    <h2>{training.trainingType}</h2>
                    <p>Duration Of Training</p>
                    <h2>{training.duration}</h2>
                    <div className='SDED'>
                        <div className='SD'>
                            <p>Start Date</p>
                            <h2>{training.startDate}</h2>
                        </div>
                        <div className='ED'>
                            <p>End Date</p>
                            <h2>{training.endDate}</h2>
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
                                    <img src={training.postedByImage} alt="" style={{ borderRadius: '100%', width: '4rem', height: '4rem' }} />
                                    <span><h2>{training.postedBy}</h2><p>{training.companyPosted}</p></span>
                                </div>
                            </div>
                            <div className='Trainer-Proposal-Management-Popup-info'>
                                <div className='C-T-B'>
                                    <h1>Company</h1>
                                    <h2>Wipro</h2>
                                    <h1>Training Name</h1>
                                    <h2>UI/UX Developer</h2>
                                    <h1>Budget</h1>
                                    <h2>2000-3000</h2>
                                </div>
                                <div className='M-L'>
                                    <h1>Mode</h1>
                                    <h2>Offline</h2>
                                    <h1>Location</h1>
                                    <h2>Kerala</h2>
                                </div>
                            </div>
                        </div>
                        <div className='Trainer-Proposal-Management-Popup-Bottom'>
                            <h1 >Are you sure you want to deny this Application !</h1>
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
                                    <img src={training.postedByImage} alt="" style={{ borderRadius: '100%', width: '4rem', height: '4rem' }} />
                                    <span><h2>{training.postedBy}</h2><p>{training.companyPosted}</p></span>
                                </div>
                            </div>
                            <div className='Trainer-Proposal-Management-Popup-info'>
                                <div className='C-T-B'>
                                    <h1>Company</h1>
                                    <h2>Wipro</h2>
                                    <h1>Training Name</h1>
                                    <h2>UI/UX Developer</h2>
                                    <h1>Budget</h1>
                                    <h2>2000-3000</h2>
                                </div>
                                <div className='M-L'>
                                    <h1>Mode</h1>
                                    <h2>Offline</h2>
                                    <h1>Location</h1>
                                    <h2>Kerala</h2>
                                </div>
                            </div>
                        </div>
                        <div className='Trainer-Proposal-Management-Popup-Bottom'>
                            <h1>Do You Want To Accept This Proposal ?</h1>
                            <div className='Trainer-Proposal-Management-Popup-button'>
                                <button onClick={acCept}>No</button>
                                <button onClick={acCept}>Confirm</button>
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
                                {/* Replace the following with your dynamic data */}
                                <img src={training.postedByImage} alt="" style={{ borderRadius: '100%', width: '4rem', height: '4rem' }} />
                                <span><h2>{training.postedBy}</h2><p>{training.companyPosted}</p></span>
                            </div>
                        </>
                        <div className='B'><h2>Budget</h2><h1>{training.budget}</h1></div>
                        <div className='B'><h2>Mode Of Training</h2><h1>{training.mode}</h1></div>
                    </div>
                </div>
                <div className='Statusss'>
                    <h3>{`${training.proposer} Proposed For Your Post a Requirement`}</h3>
                    <br />
                    <div className='Statuss_Buttonss'>
                        <button onClick={deNied}>Deny</button>
                        <button onClick={acCept}>Accept</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerProposalRequest;
