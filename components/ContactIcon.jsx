import React from "react";

const ContactIcon = ({ icon, text, link }) => {
  return (
    <p className="flex items-center">
      {icon && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400"
        >
          {icon}
        </a>
      )}
      <span className="text-lg ml-2">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        ) : (
          text
        )}
      </span>
    </p>
  );
};

export default ContactIcon;
