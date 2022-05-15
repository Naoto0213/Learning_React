import { Box, Paper, Stack, styled } from "@mui/material";
import React, { useState } from "react";
import { BaseButton } from "../components/Button/BaseButton";
type obj = {
  name: string;
  age: number;
  from: string;
  job: string;
};

type Props = {
  job: string;
};
export const State: React.FC<Props> = ({ job }) => {
  const [count, setCount] = useState<number>(0);

  const obj: obj = {
    name: "町田です",
    age: 19,
    from: "gifu",
    job: job,
  };

  const arr: string[] = ["ばなな", "あっぷる"];

  const countUp = () => {
    return setCount(count + 1);
  };
  const clearCount = () => {
    return setCount(0);
  };

  return (
    <div>
      <Stack spacing={2}>
        <BaseButton
          label="カウントアップ！"
          variant="outlined"
          onClick={() => countUp()}
        />

        <BaseButton
          label="消去"
          variant="contained"
          onClick={() => clearCount()}
        />

        <p>{obj.job}</p>

        {arr.map((item, key) => {
          return <p key={key}>{item}</p>;
        })}

        <p> {count}</p>
      </Stack>
    </div>
  );
};
