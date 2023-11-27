import React from "react";

export default function Features() {
  return (
    <div className="__features p-2">
      <h1 className=" text-3xl px-5">Features</h1>
      <div className=" p-5 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4">
        <div className="p-4 bg-pink-400 cursor-pointer transition hover:scale-[1.05] rounded-md shadow-md">
          <h2 className=" text-xl font-bold">Intelligent Health Monitoring</h2>
          <p>
            The AI watch constantly monitors your vital signs, providing
            real-time health insights. From heart rate and sleep patterns to
            stress levels, stay informed about your well-being and take
            proactive steps towards a healthier lifestyle.
          </p>
        </div>
        <div className="p-4  bg-green-400 cursor-pointer transition hover:scale-[1.05] rounded-md shadow-md">
          <h2 className=" text-xl font-bold">Personalized Virtual Assistant</h2>
          <p>
            Interact seamlessly with your AI watch's virtual assistant. It
            learns from your preferences and adapts to your daily routine,
            offering personalized reminders, weather updates, and even
            suggesting activities based on your interests.
          </p>
        </div>
        <div className="p-4 bg-red-400 cursor-pointer transition hover:scale-[1.05] rounded-md shadow-md">
          <h2 className=" text-xl font-bold">Enhanced Connectivity</h2>
          Stay connected effortlessly. The AI watch boasts advanced connectivity
          features, allowing you to receive notifications, calls, and messages
          directly on your wrist. With Bluetooth and Wi-Fi capabilities, you're
          always in touch with what matters.
        </div>
        <div className="p-4 bg-orange-400 cursor-pointer transition hover:scale-[1.05] rounded-md shadow-md">
          <h2 className=" text-xl font-bold">Smart Fitness Coaching</h2>
          <p>
            Achieve your fitness goals with the AI watch's smart coaching. It
            analyzes your workout data, provides performance insights, and
            recommends tailored exercise routines. Whether you're a beginner or
            a fitness enthusiast, take your workouts to the next level.
          </p>
        </div>
        <div className="p-4 bg-amber-400 cursor-pointer transition hover:scale-[1.05] rounded-md shadow-md">
          <h2 className=" text-xl font-bold">Augmented Reality Display</h2>
          <p>
            Experience a futuristic display with augmented reality technology.
            The AI watch's crystal-clear display overlays relevant information
            on the real world, enhancing your navigation, providing contextual
            information, and making your daily tasks more intuitive.
          </p>
        </div>
        <div className="p-4 bg-lime-400 cursor-pointer transition hover:scale-[1.05] rounded-md shadow-md">
          <h2 className=" text-xl font-bold">Long-Lasting Battery Life</h2>
          <p>
            Enjoy the convenience of extended battery life. The AI watch is
            designed to accompany you throughout your day without constant
            charging. Whether you're tracking your fitness, managing
            notifications, or exploring AR experiences, the reliable battery
            ensures your watch is ready when you are.
          </p>
        </div>
      </div>
    </div>
  );
}
