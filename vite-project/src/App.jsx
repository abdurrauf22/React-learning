import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([
    {
      image:
        "https://images.unsplash.com/photo-1724009470445-dbb63ea06abb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Rauf",
      profession: "Hacker",
      description: "I am a professional hacker, I have 4 years experience",
      friend: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1724009470445-dbb63ea06abb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "John",
      profession: "Developer",
      description: "I am a professional developer, I have 5 years experience",
      friend: false,
    },
  ]);

  const handleclick = (index) => {
    const newData = [...data];
    newData[index].friend = !newData[index].friend;  // Toggle friend status
    setData(newData);
  };

  return (
    <>
      <div className="w-full h-screen bg-green-400 flex items-center justify-center gap-3">
        <Card data={data} handleclick={handleclick} />
      </div>
    </>
  );
}

export default App;
