import React, { FC } from "react";

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
};
