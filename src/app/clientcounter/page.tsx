"use client";

import { useEffect, useState } from 'react';

export default function ClientCounter() {
  const [clients, setClients] = useState(0);
  const [events, setEvents] = useState(0);
  const [teamMembers, setTeamMembers] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);

  const targetNumbers = {
    clients: 58,
    events: 189,
    teamMembers: 260,
    satisfactionRate: 9,
  };

  useEffect(() => {
    const clientInterval = startCounter(setClients, targetNumbers.clients);
    const eventsInterval = startCounter(setEvents, targetNumbers.events);
    const teamMembersInterval = startCounter(setTeamMembers, targetNumbers.teamMembers);
    const satisfactionRateInterval = startCounter(setSatisfactionRate, targetNumbers.satisfactionRate * 10); // Multiply by 10 to handle decimals

    return () => {
      clearInterval(clientInterval);
      clearInterval(eventsInterval);
      clearInterval(teamMembersInterval);
      clearInterval(satisfactionRateInterval);
    };
  }, []);

  const startCounter = (setCounter, target) => {
    return setInterval(() => {
      setCounter((prevCounter) => (prevCounter < target ? prevCounter + 1 : prevCounter));
    }, 10);
  };

  return (
    
    <div className="flex  w-full justify-around py-6 pl-2 pr-2 md:-mt-[22%] -mt-12">
      <CounterBox title="Happy Clients" counter={clients} />
      <CounterBox title="Events" counter={events} />
      <CounterBox title="Team Members" counter={teamMembers} />
      <CounterBox title="Satisfaction Rate" counter={satisfactionRate} decimal />
    </div>
  );
}

const CounterBox = ({ title, counter, decimal = false }) => {
  return (
    <div className="text-white text-4xl bg-black w-full h-[160px] flex flex-col items-center justify-center space-y-1 p-5">
      <div>{decimal ? counter.toFixed(1) : counter}+</div>
      <div className="text-sm">{title}</div>
    </div>
  );
};
