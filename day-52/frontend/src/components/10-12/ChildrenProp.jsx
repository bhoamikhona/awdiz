import React from "react";

export const Button = ({ children }) => {
  return <button style={{ color: "red" }}>{children}</button>;
};

const ChildrenProp = () => {
  return (
    <div>
      <Button>ChildrenProp</Button>
    </div>
  );
};

export default ChildrenProp;
