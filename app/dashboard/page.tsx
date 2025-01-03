import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const page = () => {
  return (
    <div>
      <div>Dashboard</div>
      <div className='absolute right-8 bottom-20'>
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default page;
