"use client";

import DocumentApplication from "./components/DocumentApplication";
import ProvisionInformation from "./components/ProvisionInformation";
import StateRegistration from "./components/StateRegistration";
import UnifiedReference from "./components/UnifiedReference";

import { useState } from "react";

export default function Cadaster() {
  const [activeComponent, setActiveComponent] = useState("UnifiedReference");
  const [titelText, setTitelText] = useState("Միասնական Տեղեկանք");

  const handleComponentChange = (component: string, title: string) => {
    setActiveComponent(component);
    setTitelText(title);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "DocumentApplication":
        return <DocumentApplication />;
      case "ProvisionInformation":
        return <ProvisionInformation />;
      case "StateRegistration":
        return <StateRegistration />;
      case "UnifiedReference":
        return <UnifiedReference />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-200 py-10">
        <h1 className="text-3xl font-bold text-indigo-500 mb-16 text-center custom_showld">
          📥 Ինչպես դիմել
        </h1>
        <div className="list-decimal list-inside text-gray-800 space-y-4 px-10 mb-16 text-lg text-center">
          <p className="mb-4">
            Ուղղակի լրացրեք համապատասխան ձևը մեր կայքում կամ դիմեք մեր օնլայն
            խորհրդատուներին։ Պատրաստ եղեք ստանալ Ձեր փաստաթուղթը կամ գրանցումը
            առանց ավելորդ քայլերի։
          </p>
          <strong>
            Օնլայն ծառայությունները՝ Ձեզ համար մատչելի, արագ և վստահելի։
          </strong>
        </div>

        <div className="flex flex-col gap-5 w-full px-20">
          <div className="bg-indigo-500 text-white custom_header p-6 rounded-[20px] shadow-custom-notary">
            <ul className="text-center flex flex-wrap sm:justify-between gap-4 px-5 items-center justify-center">
              <li
                className={`p-2 rounded-lg border border-white sm:w-40 w-full hover:bg-indigo-600 cursor-pointer custom_showld ${
                  activeComponent === "UnifiedReference" ? "activ_cadaster" : ""
                }`}
                onClick={() =>
                  handleComponentChange(
                    "UnifiedReference",
                    "Միասնական Տեղեկանք"
                  )
                }
              >
                Միասնական
                <br />
                Տեղեկանք
              </li>
              <li
                className={`p-2 rounded-lg border border-white sm:w-40 w-full hover:bg-indigo-600 cursor-pointer custom_showld ${
                  activeComponent === "DocumentApplication"
                    ? "activ_cadaster"
                    : ""
                }`}
                onClick={() =>
                  handleComponentChange(
                    "DocumentApplication",
                    "Փաստաթղտերի Դիմում"
                  )
                }
              >
                Փաստաթղտերի
                <br />
                Դիմում
              </li>

              <li
                className={`p-2 rounded-lg border border-white sm:w-40 w-full hover:bg-indigo-600 cursor-pointer custom_showld ${
                  activeComponent === "ProvisionInformation"
                    ? "activ_cadaster"
                    : ""
                }`}
                onClick={() =>
                  handleComponentChange(
                    "ProvisionInformation",
                    "Տեղեկատվության Տրամադրում"
                  )
                }
              >
                Տեղեկատվության
                <br />
                Տրամադրում
              </li>
              <li
                className={`p-2 rounded-lg border border-white sm:w-40 w-full hover:bg-indigo-600 cursor-pointer custom_showld ${
                  activeComponent === "StateRegistration"
                    ? "activ_cadaster"
                    : ""
                }`}
                onClick={() =>
                  handleComponentChange("StateRegistration", "Պետական Գրանցում")
                }
              >
                Պետական
                <br />
                Գրանցում
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-custom-notary p-6 rounded-[20px]">
            <div className="flex flex-col">
              <h2 className="text-indigo-500 font-bold text-2xl mb-5 ">
                {titelText}
              </h2>
              <div>{renderActiveComponent()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
