describe("theme", () => {
  it("should change background color", () => {
    cy.visit("/");

    cy.get("div[data-testid='main-glass']").should(
      "have.css",
      "background-color",
      "rgba(255, 255, 255, 0.97)"
    );

    cy.get('div[data-testid="theme-btn"]').click();
    cy.get("div[data-testid='main-glass']").should(
      "have.css",
      "background-color",
      "rgb(18, 17, 17)"
    );

    cy.get('div[data-testid="theme-btn"]').click();
    cy.get("div[data-testid='main-glass']").should(
      "have.css",
      "background-color",
      "rgba(255, 255, 255, 0.97)"
    );
  });

  // it("should change color", () => {
  //   cy.get('div[data-testid="theme-btn"]').should(
  //     "have.css",
  //     "color",
  //     "rgb(0,0,0)"
  //   );
  //     cy.get('div[data-testid="theme-btn"]')
  //       .click()
  //       .should("have.css", "color", "rgb(18, 17, 17)");
  //
  //     cy.get('div[data-testid="theme-btn"]')
  //       .click()
  //       .should("have.css", "color", "rgb(0,0,0)");
  // });
});
