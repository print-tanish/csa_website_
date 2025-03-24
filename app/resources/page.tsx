import React from "react";

const resources = [
  { title: "Card #1", description: "Description for card #1.", link: "https://www.google.com" },
  { title: "Card #2", description: "Description for card #2.", link: "https://www.google.com" },
  { title: "Card #3", description: "Description for card #3.", link: "https://www.google.com" },
  { title: "Card #4", description: "Description for card #4.", link: "https://www.google.com" },
];

export default function ResourcesPage() {
  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 mt-4">Resources</h1>
      
      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <a key={index} href={resource.link} target="_blank" rel="noopener noreferrer" className="no-underline">
            <div className="p-4 text-center bg-gray-800 text-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
              <p className="text-sm text-gray-400">{resource.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
