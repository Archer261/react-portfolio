import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'gmail',
            'service_7nt3igp',
            form.current,
            'XbYyiixvcZuP-FXGj')
            .then((res) => {
                console.log(res.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div className='container flex flex-row justify-between bg-white p-5 rounded-lg max-w-screen h-auto'>
            <div className='container flex flex-col p-10'>
                <h2 className='px-10'>Contact Me!</h2>
            </div>

            <div className="divider lg:divider-horizontal"></div>

            <div className='container flex flex-col'>
                <div className="container flex flex-col h-full w-auto p-2" ref={form} onSubmit={sendEmail}>
                    <div className='container flex flex-col justify-between'>
                        <label className='m-2'>Name</label>
                        <input className='input input-bordered input-accent w-full max-w-xs' type="text" name="user_name" />
                        <label className='my-2'>Email</label>
                        <input className='input input-bordered input-accent w-full max-w-xs' type="email" name="user_email" />
                        <label className='my-2'>Message</label>
                        <textarea className='textarea textarea-accent bg-white' name="message" />
                    </div>
                    <div className='py-2'>
                        <input className="btn btn-active btn-success py-2 my-2" type="submit" value="Send" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;