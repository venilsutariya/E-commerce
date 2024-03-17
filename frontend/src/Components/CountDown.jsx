import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
 
function CountDown({login}) {
    const navigate = useNavigate();
    const initialTargetTime = Date.now() + 1 * 60 * 60 * 1000 + 45 * 60 * 1000
    const storedTargetTime = localStorage.getItem('targetTime');
    const [targetTime] = useState(
        storedTargetTime ? parseInt(storedTargetTime) : initialTargetTime
    );

    useEffect(() => {
        localStorage.setItem('targetTime', targetTime.toString());
    }, [targetTime]);

    // Renderer function to format the countdown display
    const renderer = ({ hours, minutes, seconds }) => {
        return (
            <div className="countdown-container px-5 bg-violet-700 mb-3 p-2 text-white">
                <span className='me-5 text-white'>You Have Been Logged Out in</span>
                    <span className="bg-white text-dark countdown-digit">{hours}</span>:
                    <span className="bg-white text-dark countdown-digit">{minutes}</span>:
                    <span className="bg-white text-dark countdown-digit">{seconds}</span>
            </div>
        );
    };

    const handleCountdownComplete = () => {
        localStorage.clear();
        login.setlogin(localStorage.getItem('user'));
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            text: 'Your has been LoggedOut',
            showConfirmButton: false,
            timer: 1500
          })
        navigate('/')
    }

    return (
        <div className="countdown-wrapper">
            <Countdown date={targetTime} renderer={renderer} onComplete={handleCountdownComplete}/>
        </div>
    )
}

export default CountDown;
