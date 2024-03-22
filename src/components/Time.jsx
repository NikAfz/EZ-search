import React, { useEffect, useState } from "react";

function Time(props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 20000);

    
    return () => clearInterval(interval);
  }, []);


  const hours = time.getHours();
  const minutes = ('0' + time.getMinutes()).slice(-2);
  const day = time.toLocaleDateString('en-EN', { weekday: 'long' });
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[time.getMonth()];
  const fullYear = time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear();

  return (
    <div className="time--container">
      <h1 className="time">{hours}:{minutes}</h1>
      <h3 className="time--date">{day}/{month}</h3>
      <h3 className="time--date">{fullYear}</h3>
    </div>
  );
}

export default Time;

