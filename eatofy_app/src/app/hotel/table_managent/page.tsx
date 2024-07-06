"use client";
import React, { useState, useEffect, FormEvent, use } from "react";

interface WidgetProps {}

interface Table {
  id: string;
  TableName: string;
  PersonsOccupiable: string;
  SectionId: string; // Ensure SectionId is present in Table
}

interface Section {
  id: string;
  SectionName: string;
  Status: string;
}

const Widget: React.FC<WidgetProps> = () => {
  const [showTableForm, setShowTableForm] = useState<boolean>(false);
  const [showSectionForm, setShowSectionForm] = useState<boolean>(false);
  const [sectionName, setSectionName] = useState<string>("");
  const [tablePersons, setTablePersons] = useState<number>(0);
  const [sectionId, setSectionId] = useState<string>("");
  const [hotelId] = useState<string>("a0240527-ffbd-4563-8b73-84169046da14");
  const [tables, setTables] = useState<Table[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [message, setMessage] = useState("");
  const [isExist, setIsExist] = useState(false);

  useEffect(() => {
    fetchTables();
    fetchSections();
  }, []);

  const fetchTables = async () => {
    try {
      const requestData = { hotel_id: hotelId };

      const response = await fetch(
        "http://192.168.1.206:3000/api/hotel/tables/management/fetch",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      setTables(data.output);
    } catch (error) {
      console.error("Error fetching tables:", error);
    }
  };

  const fetchSections = async () => {
    try {
      const requestData = { hotel_id: hotelId };

      const response = await fetch(
        "http://192.168.1.206:3000/api/hotel/sections/management/fetch",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      setSections(data.output);
    } catch (error) {
      console.error("Error fetching sections:", error);
    }
  };

  const handleShowTableForm = (id: string) => {
    setSectionId(id);
    setShowTableForm(true);
  };

  const handleCloseTableForm = () => {
    setShowTableForm(false);
  };

  const handleShowSectionForm = () => {
    setShowSectionForm(true);
  };

  const handleCloseSectionForm = () => {
    setShowSectionForm(false);
  };

  function handleClose() {
    setIsExist(false);
  }

  function ifTableExist(tablenaeme: any, tableexist: any) {
    tableexist.forEach((exist: any) => {
      if (tablenaeme === exist.TableName) {
        console.log("Table Exist");
        setIsExist(true);
        setMessage('Table Exist !!!');
      } else if (tablenaeme !== exist.TableName) {
        console.log("Table Can be Created");
        setIsExist(true);
        setMessage('Table Created !!!');
      } else {
        console.log("Function has runned but its no use!! :(");
      }
    });
  }

  const handleTableFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requestData = {
      section_id: sectionId,
      hotel_id: hotelId,
      table_name: "Table T1",
      persons_occupiable: tablePersons.toString(),
    };

    try {
      const response = await fetch(
        "http://192.168.1.206:3000/api/hotel/tables/management/add/single",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      const table = data.output;
      console.log("Table added:", data);
      setShowTableForm(false);
      fetchTables();
      ifTableExist(requestData.table_name, table);
    } catch (error) {
      console.error("Error adding table:", error);
    }
  };

  const handleSectionFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requestData = {
      hotel_id: hotelId,
      section_name: sectionName,
    };

    try {
      const response = await fetch(
        "http://192.168.1.206:3000/api/hotel/sections/management/add",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      setSectionId(data.section_id);
      setShowSectionForm(false);
      handleShowTableForm(data.section_id);
      fetchSections();
    } catch (error) {
      console.error("Error adding section:", error);
    }
  };

  console.log("tables -> ", tables);
  console.log("sections", sections);

  return (
    <div className="flex-1 p-4">
      {showTableForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <button
              onClick={handleCloseTableForm}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-lg mb-4">Add a Table</h2>
            <form onSubmit={handleTableFormSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="tablePersons"
                >
                  Persons Occupiable
                </label>
                <input
                  type="number"
                  id="tablePersons"
                  value={tablePersons}
                  onChange={(e) => setTablePersons(Number(e.target.value))}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Table
              </button>
            </form>
          </div>
        </div>
      )}

      {showSectionForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <button
              onClick={handleCloseSectionForm}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-lg mb-4">Add Section</h2>
            <form onSubmit={handleSectionFormSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="sectionName"
                >
                  Section Name
                </label>
                <input
                  type="text"
                  id="sectionName"
                  value={sectionName}
                  onChange={(e) => setSectionName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Section
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="flex gap-4 mt-10 justify-center flex-wrap">
        <button
          onClick={handleShowSectionForm}
          className="bg-blue-200 text-blue-600 px-4 py-2 rounded-full flex items-center space-x-2"
        >
          <span>Add Section</span>
        </button>

        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleShowTableForm(section.id)}
            className="bg-green-200 text-green-600 px-4 py-2 rounded-full flex items-center space-x-2"
          >
            <span>{section.SectionName}</span>
          </button>
        ))}
      </div>

      {sections.map((section) => (
        <div key={section.id} className="mt-8">
          <h3 className="text-xl font-bold mb-4">{section.SectionName}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-black">
            {tables
              .filter((table) => table.SectionId === section.id)
              .map((table) => (
                <div
                  key={table.id}
                  className="border-2 border-gray-500 p-4 rounded-lg flex flex-col items-center justify-center h-32"
                >
                  <div className="text-lg font-bold">{table.TableName}</div>

                  <div>Occupiable Persons: {table.PersonsOccupiable}</div>
                  {/* <div>Section ID from table -&gt; { table.SectionId }</div>
                  <div>Section ID -&gt; { section.id }</div> */}
                </div>
              ))}
          </div>
        </div>
      ))}
      {
        isExist
        ?
        <div className="fixed w-full h-full top-0 left-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center">
          <div className="w-[450px] h-auto p-4 rounded-lg bg-red-200 relative">
            <div onClick={handleClose} className="cursor-pointer absolute top-0 right-0 text-red-500 w-[40px] h-[40px] p-2">X</div>
            <h1 className="text-2xl font-bold text-red-500 text-center p-4">
              {message}
            </h1>
          </div>
        </div>
        :
        <div className="hidden"></div>
      }
    </div>
  );
};

export default Widget;
