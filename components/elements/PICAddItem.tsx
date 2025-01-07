import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import supabase from "@/utils/supabase/client";
import { Users } from "@/types";

const PICAddItem = ({
  onPicChange,
}: {
  onPicChange: (value: string) => void;
}) => {
  const [pic, setPic] = React.useState("");
  const [data, setData] = React.useState<Users[] | null>(null);

  React.useEffect(() => {
    const listName = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .in("position", ["Driver", "Supplier"]);
      if (error) {
        console.error("Error fetching name");
      }
      setData(data || []);
    };
    listName();
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    const newPic = event.target.value;
    setPic(newPic as string);
    onPicChange(newPic);
  };

  return (
    <div className='flex flex-row gap-4 items-center p-4'>
      <div className='w-24'>Nama PIC</div>
      <div>
        <FormControl sx={{ minWidth: 230, height: "60px", width: "200px" }}>
          <InputLabel id='demo-simple-select-label'>
            Person in Charge
          </InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={pic}
            label='Person in Charge'
            onChange={handleChange}
            sx={{ borderRadius: "8px" }}
          >
            {data?.map((item, index) => (
              <MenuItem key={index} value={item.user_id}>
                {item.user_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default PICAddItem;
