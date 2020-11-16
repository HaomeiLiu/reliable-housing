import { render, fireEvent } from "@testing-library/react";
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

const housings_2 = [
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
];

test("rendering single housing", () => {
  const { getAllByTestId } = render(
    <CardView housings={housings} login={true} />
  );
  expect(getAllByTestId("housing_container").length).toBe(1);
});

test("rendering multiple housings", () => {
  const { getAllByTestId } = render(
    <CardView housings={housings_2} login={true} />
  );
  expect(getAllByTestId("housing_container").length).toBe(2);
});

test("clicking on fav", () => {
  const { getAllByTestId } = render(
    <CardView housings={housings} login={true} />
  );
  const favBtn = getAllByTestId("fav-btn")[0];
  fireEvent.click(favBtn);
  expect(favBtn).toBeDisabled;
});

test("review disabled when not logged in", ()=>{
  const { getAllByTestId } = render(
    <CardView housings={housings} login={false} />
  );
  const reviewBtn = getAllByTestId("review-btn")[0];
  expect(reviewBtn).toBeDisabled;
})

test("clicking on review", ()=>{
  const { getAllByTestId } = render(
    <CardView housings={housings} login={true} />
  );
  const reviewBtn = getAllByTestId("review-btn")[0];
  expect(reviewBtn).toBeEnabled;
})
