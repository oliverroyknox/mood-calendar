import { ChakraProvider } from "@chakra-ui/react";
import { Calendar } from "@components/calendar";
import { MoodPopover } from "@components/mood-popover";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Calendar popover={<MoodPopover />} />
    </ChakraProvider>
  </React.StrictMode>
);
