import React from "react";

interface ActionsProps {
  randomize: () => void;
}

export const Actions = (props: ActionsProps) => {
  const urlPrefix = process.env.PUBLIC_URL + "/parts_icons";

  return (
    <div>
      <div>
        <div
          onClick={() => {
            props.randomize();
          }}
        >
          <img src={urlPrefix + "/random.png"} alt="random" />
        </div>
      </div>
    </div>
  );
};
