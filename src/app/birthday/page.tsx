"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { Button } from "@mui/material";
import PageContainer from "../components/pagecontainer";

interface Birthday {
  name: string;
  date: string;
  likes: string;
  dislikes: string;
}
const getFormattedDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

const BirthdayTracker: React.FC = () => {
  const [birthdays, setBirthdays] = useState<Birthday[]>([]);
  const [newBirthday, setNewBirthday] = useState<Birthday>({
    name: "",
    date: getFormattedDate(),
    likes: "",
    dislikes: "",
  });
  const [searchName, setSearchName] = useState<string>("");

  useEffect(() => {
    const storedBirthdays = JSON.parse(
      localStorage.getItem("birthdays") || "[]"
    ) as Birthday[];
    setBirthdays(storedBirthdays);
  }, []);

  useEffect(() => {
    localStorage.setItem("birthdays", JSON.stringify(birthdays));
  }, [birthdays]);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewBirthday((prevBirthday) => ({
      ...prevBirthday,
      [name]: value,
    }));
  };

  const addBirthday = () => {
    if (!newBirthday.name.trim() || !newBirthday.date.trim()) return;

    setBirthdays((prevBirthdays) => [...prevBirthdays, newBirthday]);
    setNewBirthday({
      name: "",
      date: getFormattedDate(),
      likes: "",
      dislikes: "",
    });
  };

  const handleSearch = () => {
    // Implement search logic here
    // For simplicity, this example performs a case-insensitive search by name
    const filteredBirthdays = birthdays.filter((birthday) =>
      birthday.name.toLowerCase().includes(searchName.toLowerCase())
    );
    // Update the state with the filtered birthdays
    setBirthdays(filteredBirthdays);
  };

  return (
    <PageContainer>
      <div className="container mx-auto p-8 text-primary bg-white">
        <h1 className="text-3xl font-bold mb-4">Birthday Tracker</h1>
        <label className="block mb-4">
          Search by Name:
          <div className="flex">
            <input
              type="text"
              className="border p-2 mr-2 flex-1"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <Button
              variant="contained"
              className="bg-blue-500 text-primary px-4 py-2 rounded"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </label>

        <table className="w-full mb-8">
          <thead>
            <tr>
              <th className="border p-2 bg-accent-orange">Name</th>
              <th className="border p-2 bg-accent-orange">Birthday</th>
              <th className="border p-2 bg-accent-orange">Likes</th>
              <th className="border p-2 bg-accent-orange">Dislikes</th>
            </tr>
          </thead>
          <tbody>
            {birthdays.map((birthday, index) => (
              <tr key={index}>
                <td className="border p-2">{birthday.name}</td>
                <td className="border p-2">{birthday.date}</td>
                <td className="border p-2">{birthday.likes}</td>
                <td className="border p-2">{birthday.dislikes}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-2xl font-bold mb-4">Add New Birthday</h2>
        <label className="block mb-4">
          Name:
          <input
            type="text"
            name="name"
            value={newBirthday.name}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </label>
        <label className="block mb-4">
          Birthday:
          <input
            type="date"
            name="date"
            value={newBirthday.date}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </label>
        <label className="block mb-4">
          Likes:
          <textarea
            name="likes"
            value={newBirthday.likes}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </label>
        <label className="block mb-4">
          Dislikes:
          <textarea
            name="dislikes"
            value={newBirthday.dislikes}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </label>
        <button
          onClick={addBirthday}
          className="bg-accent-green px-4 py-2 rounded"
        >
          Add Birthday
        </button>
      </div>
    </PageContainer>
  );
};

export default BirthdayTracker;
