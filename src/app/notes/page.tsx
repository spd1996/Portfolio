"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import PageContainer from "../components/pagecontainer";

interface Notes {
  [date: string]: string[];
}

const NotesApp: React.FC = () => {
  const getFormattedDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };
  const [notes, setNotes] = useState<Notes>({});
  const [currentDate, setCurrentDate] = useState<string>(getFormattedDate());
  const [newNote, setNewNote] = useState<string>("");

  useEffect(() => {
    const storedNotes = JSON.parse(
      localStorage.getItem("notes") || "{}"
    ) as Notes;
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentDate(event.target.value);
  };

  const handleNoteChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewNote(event.target.value);
  };

  const addNote = () => {
    if (!newNote.trim()) return;

    setNotes((prevNotes) => ({
      ...prevNotes,
      [currentDate]: [...(prevNotes[currentDate] || []), newNote],
    }));
    setNewNote("");
  };

  return (
    <PageContainer>
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-primary">Notes</h1>

      <label className="block mb-4">
        <span className="text-gray-700">Select Date:</span>
        <input
          type="date"
          value={currentDate}
          onChange={handleDateChange}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </label>

      <div className="mb-8 text-primary">
        <h2 className="text-xl font-bold mb-2">{currentDate}</h2>
        <ul>
          {notes[currentDate] &&
            notes[currentDate].map((note, index) => (
              <li key={index} className="mb-2">
                {note}
              </li>
            ))}
        </ul>
      </div>

      <label className="block mb-4">
        <span className="text-gray-700">Add Note:</span>
        <textarea
          value={newNote}
          onChange={handleNoteChange}
          className="mt-1 p-2 border rounded-md w-full text-primary"
        />
      </label>

      <button
        onClick={addNote}
        className="bg-accent-blue text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Add
      </button>
    </div>
    </PageContainer>
    
  );
};

export default NotesApp;
