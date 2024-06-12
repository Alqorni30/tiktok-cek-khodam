"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

const HomeComp: React.FC = () => {
  const [nama, setNama] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNama(event.target.value);
  };

  const khodams = [
    "Buaya Gigi Satu",
    "Monyet Bekantan",
    "Kucing Hutan",
    "Kambing Asmodius",
    "Cicak Putus Ekor",
    "Keris Bengkok", 
    "Paus buncit",
    "Harimau terbang"
  ];

  const getRandomKhodam = () => {
    const randomIndex = Math.floor(Math.random() * khodams.length);
    return khodams[randomIndex];
  };

  const checkKhodam = (event: FormEvent) => {
    event.preventDefault();
    if (nama.trim() !== "") {
      const khodam = getRandomKhodam();
      setMessage(
        `Nama: ${nama.toUpperCase()}, Khodam: ${khodam.toUpperCase()}`
      );
      setNama("");
    } else {
      setMessage("Masukkan nama terlebih dahulu.");
    }
  };
  const resetForm = () => {
    setNama("");
    setMessage("");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="border rounded-lg bg-amber-500 border-teal-600 px-5 py-10">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold ">Cek Khodam Gratis</h1>
          <p className="text-sm italic">*Bercanda gaes</p>
        </div>

        <form
          onSubmit={checkKhodam}
          className="flex md:flex-row flex-col gap-3"
        >
          <input
            type="text"
            value={nama}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 mr-2 rounded-md"
            placeholder="Masukkan nama"
          />
          <div className="flex">
            <button
              type="submit"
              className="bg-blue-500 rounded-md hover:bg-blue-700 transition duration-200 text-white px-4 py-2 mr-2"
            >
              Cek Khodam
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="bg-red-500 rounded-md hover:bg-red-700 transition duration-200 text-white px-4 py-2"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      {message && (
        <p className="mt-4 font-medium bg-white rounded-lg px-5 py-3">
          {message}
        </p>
      )}
    </div>
  );
};

export default HomeComp;
