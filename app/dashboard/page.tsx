import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import Dashboard from "@/components/pages/Dashboard";

const page = () => {
  return (
    <div>
      <div className='absolute right-8 bottom-20'>
        <Link href={"/add-item"}>
          <Fab color='primary' aria-label='add'>
            <AddIcon />
          </Fab>
        </Link>
      </div>
      <Dashboard />
    </div>
  );
};

export default page;
