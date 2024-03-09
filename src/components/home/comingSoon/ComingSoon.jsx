import React, { useEffect, useState } from "react";

const ComingSoon = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-03-20") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span key={interval} className=" border p-2 md:p-4  md:ml-2">
        <span className="font-bold text-lg md:text-2xl shadow-2xl shadow-black ">
          {timeLeft[interval]}
        </span>{" "}
        <span className="text-white">
          {interval.slice(0, interval.length - 1)}
        </span>{" "}
      </span>
    );
  });

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/04/61/47/03/360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg')",
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-2xl md:text-5xl font-bold">
            Something Special Is on the Way !{" "}
          </h1>
          <p className="mb-5">
            Exciting news! Our new website is coming soon. Stay tuned for
            updates about our products, services, and more. Thank you for your
            patience and support. <br /> We can't wait to share our new website
            with you!
          </p>
          <h2 className="mb-5 py-8">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
