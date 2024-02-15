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

                                    <div className="flex   gap-2">

                                        {
                                            trainingPostDetails?.topics?.slice(0, 5)?.map((topic) => {
                                                return (
                                                    // <p className="flex">{topic}</p>
                                                    <div className="">
                                                        <h2 className="capitalize text-[#535353] text-sm">{topic}</h2>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                    <div className="flex gap-2">
                                        {
                                            trainingPostDetails?.topics?.slice(5,10)?.map((topic) => {
                                                return (

                                                    <div className="">
                                                        <h2 className="capitalize text-[#535353] text-sm">{topic}</h2>
                                                    </div>
                                                )
                                            })
                                        }
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
                                            <img src={trainingPostDetails?.postedByImage} alt="" style={{ borderRadius: '100%', width: '4rem', height: '4rem' }} />
                                            <span><h2>{trainingPostDetails?.postedByName}</h2><p>{trainingPostDetails?.postedByCompanyName}</p></span>
                                        </div>
                                    </div>
                                    <div className='B'><h2>Budget</h2><h1>${trainingPostDetails?.maxBudget} - ${trainingPostDetails?.minBudget}</h1></div>
                                    <div className='B capitalize'><h2>Mode Of Training</h2><h1>{trainingPostDetails?.modeOfTraining}</h1></div>
                                </div>
                                <div className='Statuss'>
                                    <h3>You're interested in this trainer profile, and the request has been successfully submitted! Now, we're awaiting the outcome.</h3>
                                    <br />
                                    <div className="stepper">
                                        <div className="" style={appliedStatus===true?{ visibility: "hidden" }:null} >
                                            <div className="step-label">
                                                <h2>Applied</h2>
                                                <p>You Just Sent a <br />Request  for Trainer</p>
                                            </div>
                                        </div>
                                        <div className="" style={appliedStatus===false?{ visibility: "hidden" }:null}>
                                            <div className="step-label">
                                                <h2>Accepted</h2>
                                                <p>Trainer Accepted Your <br /> Request</p>
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
