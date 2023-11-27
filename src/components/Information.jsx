import React from "react";

export default function Information() {
  return (
    <div className="__information p-6">
      <div className="__inner_container bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-xl text-white flex gap-3 justify-between items-center">
        <div className="__left w-[50%] text-xl">
          Elevate your fitness journey with the AI watch's cutting-edge features
          designed to inspire and guide you towards a healthier lifestyle. Our
          smart fitness coaching goes beyond traditional tracking, providing
          personalized insights into your workouts. The watch analyzes your
          exercise routines, monitors your heart rate in real time, and offers
          tailored recommendations to optimize your performance. With a diverse
          range of workout modes, from cardio to strength training, the AI watch
          adapts to your fitness goals. Whether you're a seasoned athlete or
          just starting your fitness adventure, stay motivated with goal
          tracking and achievement badges. The watch seamlessly integrates with
          your fitness apps, allowing you to monitor your progress over time and
          celebrate your milestones. Break through barriers, set new personal
          bests, and embrace a fitter, healthier you with the AI watch as your
          dedicated fitness companion.
        </div>
        <div className="__right">
          <img className=" rounded-xl"
            src="https://st2.depositphotos.com/9182526/46918/i/450/depositphotos_469183734-stock-photo-muscular-bearded-man-stands-barbell.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
