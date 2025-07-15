'use client';

import CountUp from "react-countup";

const AnimatedCounter = ({amount}: {amount: number}) => {
    return (
        <div>
            <CountUp
            duration={2.75}
            /*decimals={2}*/ /*this adds more money than there actually is for some reason*/
            
            decimal=","
            prefix="€"
            end={amount} />
        </div>
    )
}

export default AnimatedCounter