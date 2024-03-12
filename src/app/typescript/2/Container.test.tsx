import { render, screen } from "@testing-library/react";
import { Container } from "./Container";
import userEvent from "@testing-library/user-event";
test("empty input inilation", () => {
  render(<Container />);
  // const input = screen.getByRole("textbox");
  const input = screen.getByLabelText("wife name");
  expect(input.textContent).toBe("");
});

test("can type into text input", async () => {
  render(<Container />);
  const inputEl: HTMLInputElement = screen.getByLabelText("wife name");
  await userEvent.type(inputEl, "taraneh");
  expect(inputEl.value).toBe("taraneh");
});

test("org Object test test", async () => {
  render(<Container />);
  const orgObj = screen.getByTestId("org-obj");
  expect(orgObj.textContent).toBe(
    '{"name":"john","lastName":"doe","wife":{"name":"jane","lastName":"doe","age":23},"kids":["mag","max","sara"]}'
  );
});

test("change wife name in orginal object", async () => {
  render(<Container />);
  const orgObjectText = screen.getByTestId("org-obj");
  const inputEl = screen.getByLabelText(/wife name/i);
  const submitChangeWifeNameBtn = screen.getByRole("button", {
    name: /change wife name/i,
  });
  await userEvent.type(inputEl, "jenifer");
  await userEvent.click(submitChangeWifeNameBtn);
  expect(orgObjectText.textContent).toBe(
    '{"name":"john","lastName":"doe","wife":{"name":"jenifer","lastName":"doe","age":23},"kids":["mag","max","sara"]}'
  );
});

test("clone orginal object", async () => {
  render(<Container />);
  const orgObjectText = screen.getByTestId("org-obj");
  const cloneObjectText = screen.getByTestId("clone-obj");
  const submitGenrateCloneObject = screen.getByRole("button", {
    name: /generate deep clone/i,
  });

  await userEvent.click(submitGenrateCloneObject);
  expect(orgObjectText.textContent).toBe(cloneObjectText.textContent);
});

test("change orginal object not effect clone object", async () => {
  render(<Container />);
  const cloneObjectText = screen.getByTestId("clone-obj");
  const inputEl = screen.getByLabelText(/wife name/i);
  const submitGenrateCloneObject = screen.getByRole("button", {
    name: /generate deep clone/i,
  });
  const submitChangeWifeNameBtn = screen.getByRole("button", {
    name: /change wife name/i,
  });

  await userEvent.click(submitGenrateCloneObject);
  await userEvent.type(inputEl, "jenifer");
  await userEvent.click(submitChangeWifeNameBtn);

  expect(cloneObjectText.textContent).toBe(
    '{"name":"john","lastName":"doe","wife":{"name":"jane","lastName":"doe","age":23},"kids":["mag","max","sara"]}'
  );
});
