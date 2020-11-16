import { render } from "@testing-library/react";
import React from "react";
import {FixStarRating, VarStarRating} from "./components/StarRating";

const review = {"user_id":1,
"general": 4,
"price":3,
"distance":2,
"safety":5,
};

const housing = {
    id: 1,
    address: "The Kenmore - 1331 W. 72 Street",
    description:
      "Near USC campus, 15 minutes walk. 2B2B and 3B3B available. Within DPS area, utilities included.",
    img:
      "https://raw.githubusercontent.com/HaomeiLiu/reliable-housing/main/assets/1.jpg",
  }

test("general equal to 4", ()=>{
    const {getAllByTestId} = render(<FixStarRating review={review} key={1}/>);
    expect(getAllByTestId("4").length).toBe(1);
})

test("price equal to 3", ()=>{
    const {getAllByTestId} = render(<FixStarRating review={review} key={1}/>);
    expect(getAllByTestId("3").length).toBe(1);
})

test("distance equal to 2", ()=>{
    const {getAllByTestId} = render(<FixStarRating review={review} key={1}/>);
    expect(getAllByTestId("2").length).toBe(1);
})

test("safety equal to 5", ()=>{
    const {getAllByTestId} = render(<FixStarRating review={review} key={1}/>);
    expect(getAllByTestId("5").length).toBe(1);
})
