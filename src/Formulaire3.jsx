import React, { useRef } from 'react';

const Formulaire3 = () => {
    const emailRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
        const email = emailRef.current.value
        console.log("Email : " , email);
    }
    return (
        <form onSubmit={handleSubmit}>
           <input type="text"
           placeholder='Ecrire quelque chose'
            ref={emailRef} />
            <button>Verification</button>
        </form>
    );
};

export default Formulaire3;