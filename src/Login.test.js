import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Login from "./Login";

test("Empty fields", ()=>{
    const {container, getByTestId} = render(<Login />);
    const submitBtn = getByTestId("submit");
    fireEvent.click(submitBtn);
    expect(container).toHaveTextContent("Please fill in all fields.");
})