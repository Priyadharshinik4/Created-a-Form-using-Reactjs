import React, { useState } from 'react';

function Field() {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        birthDate: '',
        email: '',
        phoneNumber: '',
        gender: '',
        startTime: '',
        endTime: '',
        jobPosition: '',
        team: '',
        designation: '',
        billingHours: '',
        isBillable: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            if (formData[key] === '') {
                newErrors[key] = true;
            }
        });

        if (Object.keys(newErrors).length === 0) {
            // Submit form data
            console.log('Form Submitted:', formData);
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div>
            <div className='section'>
                <div className='container'>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-12'>
                                <h2>EMPLOYEE FORM</h2>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4'>
                                <label>First Name<span style={{ color: 'red' }}> *</span></label><br />
                                <input
                                    type='text'
                                    name='firstName'
                                    placeholder='Enter your First Name'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={errors.firstName ? 'error' : ''}
                                    required
                                />
                            </div>
                            <div className='col-4'>
                                <label>Middle Name<span style={{ color: 'red' }}> *</span></label><br />
                                <input
                                    type='text'
                                    name='middleName'
                                    placeholder='Enter your Middle Name'
                                    value={formData.middleName}
                                    onChange={handleChange}
                                    className={errors.middleName ? 'error' : ''}
                                    required
                                />
                            </div>
                            <div className='col-4'>
                                <label>Last Name<span style={{ color: 'red' }}> *</span></label><br />
                                <input
                                    type='text'
                                    name='lastName'
                                    placeholder='Enter your Last Name'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={errors.lastName ? 'error' : ''}
                                    required
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4'>
                                <label>Birth Date<span style={{ color: 'red' }}> *</span></label><br />
                                <input
                                    type='date'
                                    name='birthDate'
                                    value={formData.birthDate}
                                    onChange={handleChange}
                                    className={errors.birthDate ? 'error' : ''}
                                    required
                                />
                            </div>
                            <div className='col-4'>
                                <label>Email<span style={{ color: 'red' }}> *</span></label><br />
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Enter your Email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'error' : ''}
                                    required
                                />
                            </div>
                            <div className='col-4'>
                                <label>Phone Number<span style={{ color: 'red' }}> *</span></label><br />
                                <input
                                    type='tel'
                                    name='phoneNumber'
                                    placeholder='Enter your Phone Number'
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className={errors.phoneNumber ? 'error' : ''}
                                    required
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4'>
                                <label>Select Gender<span style={{ color: 'red' }}> *</span></label><br />
                                <select
                                    name='gender'
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className={errors.gender ? 'error' : ''}
                                    required
                                >
                                    <option value=''>Select Gender</option>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                    <option value='other'>Other</option>
                                </select>
                            </div>
                            <div className='col-4'>
                                <label>Start Time<span style={{ color: 'red' }}> *</span></label><br />
                                <input
                                    type='time'
                                    name='startTime'
                                    value={formData.startTime}
                                    onChange={handleChange}
                                    className={errors.startTime ? 'error' : ''}
                                    required
                                />
                            </div>
                            <div className='col-4'>
                                <label>End Time<span style={{ color: 'red' }}> *</span></label><br />
                                <input
                                    type='time'
                                    name='endTime'
                                    value={formData.endTime}
                                    onChange={handleChange}
                                    className={errors.endTime ? 'error' : ''}
                                    required
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4'>
                                <label>Job Position<span style={{ color: 'red' }}> *</span></label><br />
                                <input
                                    type='text'
                                    name='jobPosition'
                                    placeholder='Enter your Job Position'
                                    value={formData.jobPosition}
                                    onChange={handleChange}
                                    className={errors.jobPosition ? 'error' : ''}
                                    required
                                />
                            </div>
                            <div className='col-4'>
                                <label>Select Teams<span style={{ color: 'red' }}> *</span></label><br />
                                <select
                                    name='team'
                                    value={formData.team}
                                    onChange={handleChange}
                                    className={errors.team ? 'error' : ''}
                                    required
                                >
                                    <option value=''>Select</option>
                                    <option value='IdeationX'>IdeationX</option>
                                    <option value='CodeHunters'>CodeHunters</option>
                                    <option value='Techies'>Techies</option>
                                    <option value='Coders'>Coders</option>
                                </select>
                            </div>
                            <div className='col-4'>
                                <label>Select Designation<span style={{ color: 'red' }}> *</span></label><br />
                                <select
                                    name='designation'
                                    value={formData.designation}
                                    onChange={handleChange}
                                    className={errors.designation ? 'error' : ''}
                                    required
                                >
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
                                <label>Billing Hours<span style={{ color: 'red' }}> *</span></label><br />
                                <input
                                    type='text'
                                    name='billingHours'
                                    placeholder='Enter the billing hours'
                                    value={formData.billingHours}
                                    onChange={handleChange}
                                    className={errors.billingHours ? 'error' : ''}
                                    required
                                />
                            </div>
                            <div className='col-4 check'>
                                <label>IsBillable</label>
                                <input
                                    id='check'
                                    type='checkbox'
                                    name='isBillable'
                                    checked={formData.isBillable}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='row btn1'>
                            <div className='col-12'>
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Field;
