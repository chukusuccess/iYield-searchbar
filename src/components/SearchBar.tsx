import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { ISearchBar } from "@/types/searchbar.type";

const SearchBar = (props: ISearchBar) => {
  const { label, onChange, variant, value, size } = props; // props destructuring

  const customStyles = {
    label: {
      color: "#979BB8", // primary color
    },
    input: {
      color: "#979BB8", // primary color
    },
  };

  // reusable search component
  return (
    <>
      <Stack
        spacing={4}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          data-testid={SEARCH_TEST_ID}
          style={{ width: "70%" }}
          label={label}
          variant={variant}
          size={size}
          type="search"
          id="search-field"
          value={value}
          onChange={onChange}
          color="primary"
          InputLabelProps={{
            style: customStyles.label,
          }}
          InputProps={{
            style: customStyles.input,
          }}
        />
      </Stack>
    </>
  );
};

// exporting unit test-id for Jest Testing Library
export const SEARCH_TEST_ID = "SEARCH_TEST_ID";

export default SearchBar;
