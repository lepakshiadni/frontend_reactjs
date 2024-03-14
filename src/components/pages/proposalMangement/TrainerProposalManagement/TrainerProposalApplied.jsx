import React from 'react';
// import "../../styles/TrainerProposalManagement.css";
const TrainerProposalApplied = ({ training }) => {


    return (

        <>
            {
                training?.map(({ trainingPostDetails, appliedStatus }) => {
                    return <>
                        <div className='allaround' style={{ marginTop: '2rem' }}>
                            <div className='Trainer_Info'>
                                <div className='TTTD'>
                                    <p>Training Program Name {appliedStatus}</p>
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
                                    <h2 className='capitalize'>{trainingPostDetails?.durationCount} {trainingPostDetails?.durationType}</h2>
                                    <div className='SDED'>
                                        <div className='SD'>
                                            <p>Start Date</p>
                                            <h2>{trainingPostDetails?.startDate}</h2>
                                        </div>
                                        <div className='ED'>
                                            <p>End Date</p>
                                            <h2>{trainingPostDetails?.endDate}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='ProposalStatus'>
                                <div className='Proposall'>
                                    <div style={{ display: 'flex', flexDirection: 'column', aligntrainingPostDetailss: '', gap: '0.5rem' }}>
                                        <h1 style={{
                                            color: '#333',
                                            fontFamily: 'Poppins',
                                            fontSize: '1.125rem',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            lineHeight: 'normal',
                                            margin: '0'
                                        }}>Posted By</h1>
                                        <div className='PBB capitalize' style={{ background: '#FFF' }}>
                                            {/* <img src={trainingPostDetails?.postedByImg} alt="" style={{ borderRadius: '100%', width: '4rem', height: '4rem' }} /> */}
                                            {
                                                trainingPostDetails?.postedByImg ? <img src={trainingPostDetails?.postedByImg} alt={trainingPostDetails?.postedByName[0]} style={{ borderRadius: '100%', width: '4rem', height: '4rem' }} />
                                                    : <div style={{ borderRadius: '100%', width: '4rem', height: '4rem' }}>{trainingPostDetails?.postedByName[0]}</div>
                                            }
                                            <span><h2>{trainingPostDetails?.postedByName}</h2><p>{trainingPostDetails?.postedByCompanyName}</p></span>
                                        </div>
                                    </div>
                                    <div className='B'><h2>Budget</h2><h1>${trainingPostDetails?.maxBudget}/<span className='capitalize'>{trainingPostDetails?.durationType?.slice(0, 3)}</span> - ${trainingPostDetails?.minBudget}/<span className='capitalize'>{trainingPostDetails?.durationType?.slice(0, 3)}</span></h1></div>
                                    <div className='B capitalize'><h2>Mode Of Training</h2><h1>{trainingPostDetails?.modeOfTraining}</h1></div>
                                </div>
                                <div className='Statuss'>
                                    <h3>You're interested in this training, and the request has been successfully submitted! Now, we're awaiting the outcome.</h3>
                                    <br />
                                    <div className="stepper">
                                        <div className="" style={appliedStatus === true ? { visibility: "hidden" } : null} >
                                            <div className="step-label">
                                                <h2>Applied</h2>
                                                <p>You Just Sent a <br />Request  for Employer</p>
                                            </div>
                                        </div>
                                        <div className="" style={appliedStatus === false ? { visibility: "hidden" } : null}>
                                            <div className="step-label">
                                                <h2>Accepted</h2>
                                                <p>Employer Accepted Your <br /> Request</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                })
            }
        </>
    );
};

export default TrainerProposalApplied;
