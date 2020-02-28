import { TextField, Grid } from "@material-ui/core"
import React from "react"


const ResultBlock = ({ resultText,longestPalindrome }) => resultText.length !== 0
  ? <Grid>
      <TextField
        id="outlined--full-width"
        label="Longest Palindrome"
        InputProps={{
          readOnly: true,
        }}
        fullWidth
        variant="outlined"
        value={longestPalindrome}
      />
      <p>
          {resultText}
      </p>
    </Grid>
  : null;

export default ResultBlock