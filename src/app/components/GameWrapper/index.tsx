import Ambience from "../Ambience";
import Music from "../Music";

import React, { useState } from "react";

interface Params {
  children: React.ReactNode;
  music?: string;
  ambience?: string;
  background?: string;
  displayGrid?: boolean;
}

const GameWrapper = ({
  children,
  music,
  ambience,
  background = "./background.webp",
  displayGrid = false,
}: Params) => {
  const gridLineStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    color: "black",
    borderColor: "black",
    opacity: 5,
    borderWidth: 1,
    zIndex: 10,
  };

  const backgroundStyle: React.CSSProperties = {
    backgroundImage: `url('${background}')`,
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
  };

  return (
    <main
      className="relative h-screen w-screen py-10 px-52"
      style={backgroundStyle}
    >
      {displayGrid && (
        <div style={{ ...gridLineStyle, width: "100%", height: "100%" }}>
          {[...Array(15)].map((_, index) => (
            <React.Fragment key={index}>
              <div
                style={{
                  ...gridLineStyle,
                  left: `${(index + 1) * (100 / 16)}%`,
                  width: "1px",
                  height: "100%",
                }}
              />
            </React.Fragment>
            //<div style={{ ...gridLineStyle, top: `${(index + 1) * (100 / 9)}%`, height: '1px', width: '100%' }} />
          ))}
          {[...Array(8)].map((_, index) => (
            <React.Fragment key={index}>
              <div
                style={{
                  ...gridLineStyle,
                  top: `${(index + 1) * (100 / 9)}%`,
                  height: "1px",
                  width: "100%",
                }}
              />
            </React.Fragment>
          ))}
        </div>
      )}
      {children}
      {music ? <Music track={music} /> : null}
      {ambience ? <Ambience track={ambience} /> : null}
    </main>
  );
};

export default GameWrapper;
