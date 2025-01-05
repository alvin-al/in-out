import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export default function PinnedSubheaderList() {
  return (
    <List
      sx={{
        "width": "100%",
        "bgcolor": "background.grey",
        "position": "relative",
        "overflow": "auto",
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0, 1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader
              sx={{
                position: "sticky", // Menambahkan sticky position
                top: 0, // Agar subheader tetap lengket di bagian atas
                backgroundColor: "background.paper", // Menetapkan background agar terlihat saat sticky
                zIndex: 1, // Menjaga agar subheader berada di atas item
              }}
            >
              {`I'm sticky ${sectionId}`}
            </ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
