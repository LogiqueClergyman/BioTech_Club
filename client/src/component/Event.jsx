import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Event() {
  const [eventData, setEventData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const getEvent = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getposts');
      console.log(response);
      setEventData(response.data.posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="w-[100vw] flex flex-wrap bg-[url('https://th.bing.com/th/id/OIG.WOa0Tj86Y6kZca48_19W?pid=ImgGn')] bg-cover py-16">
      <div className="w-[80%] sm:w-[70%] shadow-xl shadow-blue-200 m-auto flex flex-wrap bg-white">
        {eventData.map((event) => (
          <div
            key={event._id}
            className="lg:w-[26%]  cursor-pointer sm:w-[35%] w-[80%] transition-all duration-300 ease-in-out transform hover:translate-y-3 flex p-3 rounded-3xl shadow-xl shadow-blue-300 flex-col m-8"
            onClick={() => handleEventClick(event)}
          >
            <img
              className="sm:h-[300px] p-3 rounded-3xl h-[270px]"
              src={event.imageUrl[0]}
              alt="Loading..."
            />
            <h1 className="m-auto text-2xl font-bold border-b-2 pb-2">{event.title}</h1>
            <h2 className="text-xl my-2 m-auto">{event.subtitle}</h2>
            <div className="text-justify h-28 hover:overflow-auto overflow-y-hidden mb-3">{event.content}</div>
            <p className="ml-[40%] text-gray-600 font-bold text-base">
              {formatDate(event.createdAt)}
            </p>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <Modal event={selectedEvent} onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
}

const Modal = ({ event, onClose }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-75" onClick={onClose}></div>
      <div className="relative">
        <img
          className="max-h-screen"
          src={event.imageUrl[0]}
          alt={event.title}
        />
        <button
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="absolute bottom-2 left-2 text-white">
          <h1 className="text-2xl font-bold">{event.title}</h1> 
          <h2 className="text-xl">{event.subtitle}</h2>
          <p className="text-base">{event.content}</p>
          <p className="text-base mt-4">
            {formatDate(event.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
}
