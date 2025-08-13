import { useState,useEffect } from "react";
export const TodoDate = () => {
        const [dateTime,setDateTime]= useState('');
 useEffect(()=> {
        const interval =setInterval(()=> {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const fromattedTime = now.toLocaleTimeString();

        setDateTime(`${formattedDate}-${fromattedTime}`);
    },1000);
    return ()=> clearInterval(interval);
},[]);
    return (
                        <h2 className="date-time">{dateTime}</h2>
    )
}