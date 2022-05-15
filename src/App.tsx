import React, { useState } from "react";
import "./App.css";
import { BaseButton } from "./components/Button/BaseButton";
import { State } from "./pages/State";
import { EventCall } from "./pages/EventCall";
import { Paper } from "@mui/material";

function App() {
  const [job, setJob] = useState<string>("");
  const [isStatePage, setIsStatePage] = useState<boolean>(false);
  const [isEventPage, setIsEventPage] = useState<boolean>(false);

  const openStatePage = () => {
    setIsEventPage(false);
    setIsStatePage(!isStatePage);
  };

  const openEventPage = () => {
    setIsStatePage(false);
    setIsEventPage(!isEventPage);
  };

  const resetPage = () => {
    setIsStatePage(false);
    setIsEventPage(false);
  };

  return (
    <div className="App">
      <BaseButton label="state" onClick={() => openStatePage()} />
      <BaseButton label="EventCall" onClick={() => openEventPage()} />
      <BaseButton label="reset" onClick={() => resetPage()} />
      {(isStatePage || isEventPage) && (
        <Paper
          variant="outlined"
          sx={{
            textAlign: "center",
            marginTop: 8,
            padding: 8,
          }}
        >
          {isStatePage ? <h2>STATE</h2> : <h2>EVENT</h2>}
          {isStatePage && <State job={job} />}
          {isEventPage && <EventCall setJob={setJob} />}
        </Paper>
      )}
    </div>
  );
}

export default App;
