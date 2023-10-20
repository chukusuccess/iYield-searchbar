"use client"; // makes the component a client component

import React from "react";
import Image from "next/image";
import {
  Container,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
} from "@mui/material";
import SearchBar from "@/components/SearchBar";
import ErrorScreen from "@/components/Error";
import { ICountry } from "@/types/countriesData.type";
import { useGetCountries } from "@/hooks/useGetCountries";
import splash from "../images/worldmap.png";

const HomePage: React.FC = () => {
  const [userInput, setUserInput] = React.useState<string>("");
  const [results, setResults] = React.useState<ICountry[]>([]);
  const [hideSplash, setHideSplash] = React.useState<boolean>(false);
  const [{ data, loading, error }, fetchCountries] = useGetCountries();

  const handleGoAhead = async () => {
    setHideSplash(true);
    if (error != null) await fetchCountries(); // refetch countries data if err
  };

  // handles search logic.
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input: string = event.target.value;
    setUserInput(input);

    const containsUppercase: Boolean = /[A-Z]/.test(input); // test the entire input for uppercase letters using regular expression. Returns true or false

    const firstLetterUppercase: Boolean = /[A-Z]/.test(input[0]); // test if the first character is uppercase

    const secondLetterUppercase: Boolean = /[A-Z]/.test(input[1]); // test if the second character is uppercase

    // filter countries array based on country code input
    const filterCountriesByCode = () => {
      const filteredCountries: ICountry[] = data!.filter((country) => {
        const searchString: string =
          firstLetterUppercase && secondLetterUppercase ? input : input.toUpperCase();
        return country.cca2.includes(searchString);
      });

      setResults(filteredCountries);
    };

    // filter countries array based on country name input
    const filterCountriesByName = () => {
      const filteredCountries: ICountry[] = data!.filter((country) => {
        const searchString: string = firstLetterUppercase && !secondLetterUppercase ? input : input;
        return country.name.common.includes(searchString);
      });

      setResults(filteredCountries);
    };

    // if-block calls a filtration method. TODO: Refactor
    if (firstLetterUppercase && secondLetterUppercase) {
      filterCountriesByCode();
      return;
    } else if (firstLetterUppercase && !secondLetterUppercase) {
      filterCountriesByName();
      return;
    } else {
      const filteredCountries: ICountry[] = data!.filter((country) => {
        const searchString: string = containsUppercase ? input : input.toLowerCase();
        return country.name.common.toLowerCase().includes(searchString);
      });
      setResults(filteredCountries);
      return;
    }
  };

  // if api error, return error screen
  if (error != null) {
    return <ErrorScreen error={error} />;
  }

  // if no error, return home screen
  return (
    <>
      {hideSplash === false ? (
        <Container
          data-testid={"HOME_TEST_ID"}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            gap: 2,
          }}
        >
          <Box mx={{ width: "50%" }}>
            {splash ? (
              <Image
                priority
                src={splash}
                style={{ objectFit: "contain", width: "100%", height: "auto" }}
                alt="World map"
              />
            ) : (
              <Skeleton variant="rounded" width={"100%"} height={70} animation="wave" />
            )}
          </Box>
          <Box>
            <Typography color="primary" textAlign={"center"} variant="h4">
              Welcome to Country Finder
            </Typography>
            <Typography variant="subtitle1" color="primary" textAlign={"center"}>
              Discover the world, one country at a time.
            </Typography>
          </Box>
          <Button
            onClick={handleGoAhead}
            variant="contained"
            startIcon={<span>🌍</span>}
            endIcon={<span>→</span>}
            disableElevation
            color="inherit"
            style={{ width: "50%", marginTop: 10 }}
          >
            <Typography
              color="secondary"
              textAlign={"center"}
              variant="h6"
              style={{ textTransform: "capitalize" }}
            >
              go ahead
            </Typography>
          </Button>
        </Container>
      ) : (
        <Container>
          <Box
            position={"fixed"}
            top={0}
            left={0}
            width={"100%"}
            sx={{ bgcolor: "secondary.main", zIndex: 50, paddingBottom: 2 }}
          >
            <Typography
              color="primary"
              variant="h5"
              sx={{ textAlign: "center", textTransform: "capitalize", marginY: 2 }}
            >
              Find your country
            </Typography>
            <SearchBar
              label="🔍 Search by country name or code"
              onChange={(e) => handleSearch(e)}
              variant="standard"
              value={userInput}
              size="medium"
            />
          </Box>
          <Box marginTop={18} sx={{ width: "100%", bgcolor: "secondary.main" }}>
            <List>
              {results.map((country) => (
                <ListItem key={country.cca2} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {loading ? (
                        <Skeleton variant="rounded" animation="wave" width={40} height={30} />
                      ) : (
                        <Image
                          priority
                          src={country.flags.png}
                          width={30}
                          height={30}
                          style={{
                            objectFit: "contain",
                            width: "auto",
                            height: "auto",
                            borderRadius: "10%",
                          }}
                          alt={country.flags.alt}
                        />
                      )}
                    </ListItemIcon>
                    {loading ? (
                      <Skeleton variant="text" sx={{ fontSize: "1rem" }} animation="wave" />
                    ) : (
                      <ListItemText
                        data-testid={"LIST_ITEM_TEST_ID"}
                        sx={{ color: "primary.main" }}
                        primary={country.name.common}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
      )}
    </>
  );
};

export default HomePage;
