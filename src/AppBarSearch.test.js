import { getAllByText, render } from "@testing-library/react";
import React from "react";
import AppBarSearch from "./components/AppBarSearch";

test("Display profile icon when logged in", ()=>{
    const {getAllByTestId} = render(<AppBarSearch/>);
    expect(getAllByTestId("login").length).toBe(1);
})