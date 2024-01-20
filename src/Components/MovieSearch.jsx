import React, { useState, useEffect } from "react";
import { TextField, Box, IconButton } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { debounce } from "lodash";
import SearchIcon from "@mui/icons-material/Search";

const MovieSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);

  const debouncedAutocomplete = debounce(async (searchQuery) => {
    try {
      const response = await fetch(
        `https://api.movies.dcts.se/rpc/movies_autocomplete?q=${searchQuery}`
      );
      const data = await response.json();
      setAutocompleteOptions((data || []).slice(0, 5));
    } catch (error) {
      console.error("Error fetching autocomplete options:", error.message);
    }
  }, 500);

  useEffect(() => {
    if (query.trim() !== "") {
      debouncedAutocomplete(query);
    } else {
      setAutocompleteOptions([]);
    }
  }, [query]);

  const handleSearch = () => {
    onSearch(query);
  };

  const handleAutocompleteChange = (event, value) => {
    setQuery(value || "");
  };

  return (
    <Box className="searchContainer">
      <Box className="searchInput">
        <Autocomplete
          fullWidth
          options={autocompleteOptions}
          getOptionLabel={(option) => option || ""}
          value={query}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search for movies"
              variant="outlined"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          )}
          onChange={handleAutocompleteChange}
        />
      </Box>
      <Box item xs={4}>
        <IconButton size="large" onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MovieSearch;
