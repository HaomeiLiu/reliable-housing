import { render, fireEvent } from "@testing-library/react";
import React from "react";
import SearchDetail from "./SearchDetail";
import { createServer } from "miragejs";
import { MemoryRouter, Route } from "react-router-dom";

let server;

beforeEach(() => {
  server = createServer({
    routes() {
      this.namespace = "api";
      this.logging = false;
      this.get("/housings/:id", (schema, request) => {
        return {
          id: 1,
          address: "The Kenmore - 1331 W. 72 Street",
          description:
            "Near USC campus, 15 minutes walk. 2B2B and 3B3B available. Within DPS area, utilities included.",
          img:
            "https://raw.githubusercontent.com/HaomeiLiu/reliable-housing/main/assets/1.jpg",
          reviews: [
            {
              user_id: 18,
              general: 4,
              price: 3,
              distance: 2,
              safety: 5,
            },
            {
              user_id: 16,
              general: 3,
              price: 3,
              distance: 2,
              safety: 4,
            },
          ],
        };
      });
    },
  });
});

afterEach(() => {
  server.shutdown();
});

test("rendering title", async () => {
  const { container, queryByText, getAllByTestId } = render(
    <MemoryRouter initialEntries={["/housings/0"]}>
      <Route path="/housings/:id" exact={true}>
        <SearchDetail />
      </Route>
    </MemoryRouter>
  );

  expect(getAllByTestId("address").length).toBe(1);
});

test("render reviews", async () => {
  const { container, queryByText, getAllByTestId } = render(
    <MemoryRouter initialEntries={["/housings/0"]}>
      <Route path="/housings/:id" exact={true}>
        <SearchDetail />
      </Route>
    </MemoryRouter>
  );
  expect(container).toHaveTextContent("Search Housing");
});
