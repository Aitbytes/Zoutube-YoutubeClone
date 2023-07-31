import React, { useState } from "react";
import { Paper, TextField } from "@mui/material";

function SearchBar({ onFormSubmit }) {
  const [state, setSearch] = useState({ searchTerm: "" });

  function handleSubmit(event) {
    onFormSubmit(state.searchTerm);
    event.preventDefault();
  }

  function handleChange(event) {
    setSearch({ searchTerm: event.target.value });
  }
  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Search..."
          onChange={handleChange}
        ></TextField>
      </form>
    </Paper>
  );
}

export default SearchBar;
