import { createTheme } from "@mui/material";
import { primaryColor, neutralColor, secondaryColor, successColor } from "./colors"

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: "white"
        },
        secondary: {
            main: secondaryColor
        },
        success: {
            main: successColor
        },
        border: {
            main: neutralColor
        },
        text: {
            primary: neutralColor
        }
    }
})

export default theme