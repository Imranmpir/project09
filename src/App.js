import React from "react";

import {Card, CardContent} from "@mui/material"
import { Cric } from "./components/Cric";
import { Kabaddi } from "./Kabaddi";
 

function App() {
  return (
<Card  sx={{
        bgcolor: "navy",
      }} >
<CardContent>
<Cric/>
<Kabaddi/>
</CardContent>
 
</Card>
  );
}

export default App;
