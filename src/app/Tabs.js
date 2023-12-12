"use client";
// components/Tabs.js

import React, { useState } from "react";
import TabsOne from "./TabsOne";
import TabsTwo from "./TabsTwo";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="text-FF9A02 w-full p-4">
      <h1 className="text-white text-center md:px-20 p-5 md:py-10 font-poppins text-3xl md:text-4xl font-bold leading-normal tracking-wide">
        {activeTab === 1
          ? "Что мне делать и как я могу помочь?"
          : "Что я могу сделать?"}
      </h1>

      <div className="mb-4 ">
        <div className="w-full my-4 text-center flex justify-center  border-white border-b-2">
          <ul
            className="flex  -mb-px text-sm font-medium text-center md:gap-2"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className={`inline-block text-23 text-center p-4 font-poppins border-b-2 rounded-t-l text-white ${
                  activeTab === 1 && "border-b-4"
                }`}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected={activeTab === 1 ? "true" : "false"}
                onClick={() => handleTabChange(1)}
              >
                Если я гражданин россии
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block text-23 text-center p-4 font-poppins border-b-2 rounded-t-l text-white ${
                  activeTab === 2 && "border-b-4"
                }`}
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected={activeTab === 2 ? "true" : "false"}
                onClick={() => handleTabChange(2)}
              >
                Если я иностранец
              </button>
            </li>
          </ul>
        </div>

        <div id="default-tab-content md:p-20 p-1">
          <div
            className={`p-4 rounded-lg ${activeTab === 1 ? "" : "hidden"}`}
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <TabsOne />
          </div>
          <div
            className={`p-4 rounded-lg ${activeTab === 2 ? "" : "hidden"}`}
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <TabsTwo />
          </div>
        </div>
      </div>
    </div>
  );
}
