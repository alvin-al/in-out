import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ActivityAddItem = ({
  onActivitySelect,
}: {
  onActivitySelect: (value: string) => void;
}) => {
  const [activity, setActivity] = React.useState<string | null>("");

  const handleActivity = (
    event: React.MouseEvent<HTMLElement>,
    newActivity: string | null
  ) => {
    if (newActivity !== null) {
      setActivity(newActivity);
      onActivitySelect(newActivity);
    }
  };

  return (
    <div className='flex flex-row gap-4 items-center p-4 rounded-md'>
      <div className='w-24'>Aktivitas</div>
      <div className='text-base'>
        <ToggleButtonGroup
          value={activity}
          exclusive
          onChange={handleActivity}
          aria-label='text alignment'
          sx={{ height: "60px", width: "300px" }}
        >
          <ToggleButton
            value='out'
            aria-label='centered'
            size='small'
            sx={{ borderRadius: "8px" }}
          >
            Keluar (Out)
          </ToggleButton>
          <ToggleButton
            value='in'
            aria-label='left aligned'
            sx={{ borderRadius: "8px" }}
          >
            Masuk (In)
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};

export default ActivityAddItem;
