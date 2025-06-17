import React from "react";

const SkillCard = ({ Icon, iconType = "react", imgSrc, name, color }) => {
  return (
    <div className="w-24 h-24 bg-base-200 rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
      {iconType === "react" && Icon && (
        <Icon size={32} color={color || "#000"} className="mb-1" />
      )}
      {iconType === "svg" && imgSrc && (
        <img src={imgSrc} alt={name} className="w-8 h-8 mb-1" />
      )}
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default SkillCard;
