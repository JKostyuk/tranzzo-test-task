import { TextField, Grid} from "@material-ui/core";
import React from "react";

const InputBlock = ({ handleChange, importedText }) => (
  <Grid container>
    <TextField
      id="outlined-textarea-full-width"
      label="Input Text"
      placeholder="You can input your text here"
      multiline
      fullWidth
      variant="outlined"
      onChange={handleChange}
      value={importedText}
    />
  </Grid>
);


export default InputBlock