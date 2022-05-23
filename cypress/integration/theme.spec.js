describe("theme", () => {
  it("should exist theme button", () => {
    cy.visit("/");
    cy.get('div[data-testid="theme-btn"]').should("exist");
  });
  it("should change color", () => {});
  it("should change background color", () => {});
});
