describe("Integration tests", function () {
  it("Visits the wrapper application", function () {
    cy.visit("http://localhost:5000");
    cy.get("#ng-container").its("0.contentDocument").should("exist");
    cy.get("#react-container").its("0.contentDocument").should("exist");
    cy.get("#vue-container").its("0.contentDocument").should("exist");
  });
  it("Navigates to the communication page", function () {
    cy.get("a").click();
    cy.url().should("include", "/communication");
  });
});

describe("Communication via routing parameters", function () {
  it("Sends the data by modifying iframes URLs", function () {
    cy.visit("http://localhost:5000");
    cy.get("#input").type("Hello!").should("have.value", "Hello!");
    cy.get(".btn").click();

    cy.get("#ng-container")
      .its("0.src")
      .should("eq", "http://localhost:5001/?input=Hello!");
    cy.get("#react-container")
      .its("0.src")
      .should("eq", "http://localhost:5002/?input=Hello!");
    cy.get("#vue-container")
      .its("0.src")
      .should("eq", "http://localhost:5003/?input=Hello!");
  });
});
