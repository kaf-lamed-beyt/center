import React from "react";
import "./style/center.scss";

interface Props {
  children: React.ReactNode;
}

const Center: React.FC<Props> = ({ children }) => {
  return <div className="root">{children}</div>;
};

export default Center;
