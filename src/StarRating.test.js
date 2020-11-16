import { render } from "@testing-library/react";
import React from "react";
import {FixStarRating, VarStarRating} from "./components/StarRating";

const review = {"user_id":1,
"general": 4,
"price":3,
"distance":2,
"safety":5,
};

test("general equal to 4", ()=>{
    const {getAllByTestId} = render(<FixStarRating review={review} key={1}/>);
    expect(getAllByTestId(4).length).toBe(1);;
})