"use client";
import React, { useState, useEffect } from "react";
import BackendUri from "./localhost";

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/data`);
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    console.log("id---->", id);
    try {
      const response = await fetch(`/data/${id}`, {
        method: "DELETE",
      });
      const deleteData = await response.json();
      if (deleteData.message === "Data deleted successfully") {
        setData(data.filter((item) => item._id !== id));
      }
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
            Name
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
            Description
          </th>
          <th className="px-6 py-3 bg-gray-50 border-b border-gray-200">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 border-gray-200">
        {data.map((item) => (
          <tr key={item._id}>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
              {item.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
              {item.description}
            </td>
            <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDelete(item._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
