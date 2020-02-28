import { Button, Grid } from "@material-ui/core"
import React from "react"


const ButtonsBlock = ({ handleImport,findPalindromes, handleClear }) => (
  <Grid
    container
    direction="row"
    justify="space-around"
  >
    <input
      accept="text/*"
      id="contained-button-file"
      multiple
      type="file"
      hidden
      onChange={handleImport}
    />
    <label htmlFor="contained-button-file">
      <Button
        variant="contained"
        component="span"
      >
        Upload Text File
      </Button>
    </label>
    <Button
      variant="contained"
      color="primary"
      onClick={findPalindromes}
    >
      Find Palindrome
    </Button>
    <Button
      variant="contained"
      color="secondary"
      onClick={handleClear}
    >
      Clear
    </Button>
  </Grid>
);

export default ButtonsBlock