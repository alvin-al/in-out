import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

const AddItemButton = () => {
  return (
    <div className='right-8 bottom-20 fixed'>
      <Link href={"/add-item"}>
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};

export default AddItemButton;
