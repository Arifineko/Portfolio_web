import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const Aos = ({ children }) => {
    useEffect(() => {
        AOS.init({
            once: true
        });
    }, []);

    return children;
};

export default Aos;
