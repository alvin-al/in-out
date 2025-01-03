"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home"; // Home icon
import HistoryIcon from "@mui/icons-material/History"; // Aktivitas icon
import SettingsIcon from "@mui/icons-material/Settings"; // Settings icon
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function BottomBar() {
  const [value, setValue] = React.useState(0);
  const router = useRouter(); // Create router instance

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push("/dashboard"); // Navigate to Home page
        break;
      case 1:
        router.push("/activity"); // Navigate to Aktivitas page
        break;
      case 2:
        router.push("/settings"); // Navigate to Settings page
        break;
      default:
        break;
    }
  };

  return (
    <div className='absolute bottom-0 w-full'>
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => handleNavigation(newValue)}
        >
          <BottomNavigationAction label='Dashboard' icon={<HomeIcon />} />
          <BottomNavigationAction label='Aktivitas' icon={<HistoryIcon />} />
          <BottomNavigationAction label='Setting' icon={<SettingsIcon />} />
        </BottomNavigation>
      </Box>
    </div>
  );
}
