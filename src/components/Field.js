import React from 'react';

function Field() {
    return (
        <div>
            <div className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h2>EMPLOYEE FORM</h2>
                        </div>
                    </div>        
                    <div className='row'>
                        <div className='col-4'>
                            <label>First Name</label><br />
                            <input type='text' placeholder='Enter your First Name' required />
                        </div>
                        <div className='col-4'>
                            <label>Middle Name</label><br />
                            <input type='text' placeholder='Enter your Middle Name' required />
                        </div>
                        <div className='col-4'>
                            <label>Last Name</label><br />
                            <input type='text' placeholder='Enter your Last Name' required />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <label>Birth Date</label><br />
                            <input type='text' placeholder='Enter your DOB' required />
                        </div>
                        <div className='col-4'>
                            <label>Email</label><br />
                            <input type='text' placeholder='Enter your Email' required />
                        </div>
                        <div className='col-4'>
                            <label>Phone Number</label><br />
                            <input type='text' placeholder='Enter your Phone Number' required />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <label>Select Gender</label><br />
                            <select required>
                                <option value=''>Select Gender</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='other'>Other</option>
                            </select>
                        </div>
                        <div className='col-4'>
                            <label>Start Time</label><br />
                            <input type='time' required />
                        </div>
                        <div className='col-4'>
                            <label>End Time</label><br />
                            <input type='time' required />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <label>Job Position</label><br />
                            <input type='text' placeholder='Enter your Job Position' required />
                        </div>
                        <div className='col-4'>
                            <label>Select Teams</label><br />
                            <select required>
                                <option value=''>Select</option>
                                <option value='IdeationX'>IdeationX</option>
                                <option value='CodeHunters'>CodeHunters</option>
                                <option value='Techies'>Techies</option>
                                <option value='Coders'>Coders</option>
                            </select>
                        </div>
                        <div className='col-4'>
                            <label>Select Designation</label><br />
                            <select required>
                                <option value=''>Select</option>
                                <option value='team-lead'>Team Leader</option>
                                <option value='Full-Stack Web Developer'>Full-Stack Web Developer</option>
                                <option value='Front-End Developer'>Front-End Developer</option>
                                <option value='Back-End Developer'>Back-End Developer</option>
                                <option value='Database Engineer'>Database Engineer</option>
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <label>Billing Hours</label><br />
                            <input type='text' placeholder='Enter the billing hours' required />
                        </div>
                        <div className='col-4 check'>
                            <label>Is Billable</label>
                            <input type='checkbox' id='check' />
                        </div>
                    </div>
                    <div className='row btn1'>
                        <div className='col-12'>
                            <button className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Field;
