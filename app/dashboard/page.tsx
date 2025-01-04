import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div>Dashboard</div>
      <div className='absolute right-8 bottom-20'>
        <Link href={"/add-item"}>
          <Fab color='primary' aria-label='add'>
            <AddIcon />
          </Fab>
        </Link>
      </div>
    </div>
  );
};

export default page;
