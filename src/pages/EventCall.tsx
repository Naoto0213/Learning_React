import React, { useState } from "react";
import { BaseButton } from "../components/Button/BaseButton";
import { BaseTextField } from "../components/TextField/BaseTextField";

type Props = {
  setJob: React.Dispatch<React.SetStateAction<string>>;
};
export const EventCall: React.FC<Props> = ({ setJob }) => {
  const [event, setEvent] = useState<string>("");

  const inputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEvent(value);
  };

  const onClick = () => {
    setJob(event);
    setEvent("");
  };

  return (
    <div>
      <BaseTextField
        onChange={(e) => inputText(e)}
        value={event}
        label="職業"
      />
      <br />
      <BaseButton label="送信" variant="contained" onClick={() => onClick()} />
    </div>
  );
};
