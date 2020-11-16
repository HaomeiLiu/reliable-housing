import { render } from "@testing-library/react";
import React from "react";
import CardViewProfile from "./components/CardViewProfile";

const housings = [[
    {
      id: 1,
      address: "The Kenmore - 1331 W. 72 Street",
      description:
        "Near USC campus, 15 minutes walk. 2B2B and 3B3B available. Within DPS area, utilities included.",
      img:
        "https://raw.githubusercontent.com/HaomeiLiu/reliable-housing/main/assets/1.jpg",
    },
    {
        id: 2,
        address: "The Kenmore - 1331 W. 72 Street",
        description:
          "Near USC campus, 15 minutes walk. 2B2B and 3B3B available. Within DPS area, utilities included.",
        img:
          "https://raw.githubusercontent.com/HaomeiLiu/reliable-housing/main/assets/1.jpg",
      },
  ]];

test("Check that 2 cards are rendered", ()=>{
    const {getAllByTestId} = render(<CardViewProfile housings={housings} login={true} />);
    expect(getAllByTestId("card").length).toBe(1);
})