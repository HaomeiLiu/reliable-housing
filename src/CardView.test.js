import { render } from "@testing-library/react";
import React from "react";
import CardView from "./components/CardView";

const housings = [
  {
    id: 1,
    address: "The Kenmore - 1331 W. 72 Street",
    description:
      "Near USC campus, 15 minutes walk. 2B2B and 3B3B available. Within DPS area, utilities included.",
    img:
      "https://raw.githubusercontent.com/HaomeiLiu/reliable-housing/main/assets/1.jpg",
  },
];

test("rendering single housing", ()=>{
    const {getAllByTestId} =render(
        <CardView housings={housings} login={true}/>
    );
    expect(getAllByTestId("housing_container").length).toBe(1);
});

// test("Button diabled when not login", ()=>{
//     const {getAllByTestId} = render(<CardView housings={housings} login={false} />);
//     expect(getAllByTestId("fav-btn")[0].disabled).toBe(true);
// });
