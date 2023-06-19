import { useState } from "react";
// @mui
import { alpha } from "@mui/material/styles";
import { Box, MenuItem, Stack, IconButton, Popover } from "@mui/material";
import enFlag from "../../../assets/images/languageIcons/gb.svg";
import itFlag from "../../../assets/images/languageIcons/it.svg";
import { setLanguage } from "../../../redux/duck/language/languageDuck";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
// ----------------------------------------------------------------------

const LANGS = [
  {
    value: "en",
    label: "English",
    icon: enFlag,
  },
  {
    value: "it",
    label: "Italian",
    icon: itFlag,
  },
];

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({
    open: null,
    // lang: "en",
  });

  const dispatch = useDispatch();

  const handleOpen = (event) => {
    setState({
      ...state,
      open: event.currentTarget,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: null,
    });
  };

  // useEffect(() => {
  //   setState({
  //     ...state,
  //     lang: i18n.language ? i18n.language : "en",
  //   });
  // }, []);

  function handleLanguage(languageChosen) {
    handleClose();
    //console.log("stato: ", state);
    dispatch(setLanguage(languageChosen));
    i18n.changeLanguage(languageChosen);
    setState({
      ...state,
      // lang: languageChosen,
    });
  }

  function mapLanguages() {
    return LANGS.map((option) => (
      <MenuItem
        key={option.value}
        selected={option.value === state.lang}
        onClick={() => handleLanguage(option.value)}
      >
        <Box
          component="img"
          alt={option.label}
          src={option.icon}
          sx={{ width: 28, mr: 2 }}
        />

        {t(option.label)}
      </MenuItem>
    ));
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(state.open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <img
          src={i18n.language === "en" ? enFlag : itFlag}
          alt={"Language flag"}
          style={{ borderRadius: "10px" }}
        />
      </IconButton>

      <Popover
        open={Boolean(state.open)}
        anchorEl={state.open}
        onClick={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>{mapLanguages()}</Stack>
      </Popover>
    </>
  );
}
