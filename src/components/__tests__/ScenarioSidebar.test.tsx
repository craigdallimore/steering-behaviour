import React from "react";
import { render } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import ScenarioSidebar from "../ScenarioSidebar";

test("it worked", () => {
  const { container } = render(<ScenarioSidebar />);

  expect(container.textContent).toMatchInlineSnapshot(
    '"Steering Behaviours!Pick a scenarioTODOThe align behaviour makes an item rotate to match the orientation of another item.StartReset"'
  );
});
