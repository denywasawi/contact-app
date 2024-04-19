import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ContactCard from "@/components/Commons/ContactCard/ContactCard";

const mockProp = {
  data: { firstName: "deny", lastName: "wahyu", age: 20, photo: "" },
  onPress: () => ({}),
  onPressDelete: () => ({}),
  isDisabled: false,
};

// simple test to check if component ContactCard rendered
test("render contact card", () => {
  render(<ContactCard {...mockProp} />);

  const component = screen.getByText(/deny/i);

  expect(component).toBeInTheDocument();
});
