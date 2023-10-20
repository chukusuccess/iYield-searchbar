import { Typography, Button, Box, Container } from "@mui/material";
import React from "react";

type IErrorProp = {
  error: string | React.ReactNode;
};

const ErrorScreen: React.FC<IErrorProp> = ({ error }) => {
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <Container
      data-testid={ERROR_PAGE_TEST_ID}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gap: 2,
      }}
    >
      <Typography variant="subtitle1" color="primary" textAlign={"center"}>
        {typeof error === "string" ? error : "Oops! A network error occurred"}
      </Typography>
      <br />
      <br />
      <Box>
        <Button
          variant="contained"
          startIcon={<span>🔄️</span>}
          disableElevation
          color="inherit"
          onClick={handleClick}
        >
          Refresh
        </Button>
      </Box>
    </Container>
  );
};

export const ERROR_PAGE_TEST_ID = "ERROR_PAGE_TEST_ID";

export default ErrorScreen;
