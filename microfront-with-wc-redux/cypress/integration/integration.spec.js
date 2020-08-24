describe("Application navigation", () => {
  it("Navigates to basket page", () => {
    cy.visit(Cypress.env("APPLICATION_URL"));
    cy.get("#basket-link").click();
    cy.url().should("include", "/basket");
  });
  it("Navigates to home page", () => {
    cy.visit("http://localhost:4000/basket");
    cy.get("#home-link").click();
    cy.url().should("equal", Cypress.env("APPLICATION_URL"));
  });
});

describe("Custom Elements integration", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("APPLICATION_URL"));
  });

  it("Integrates a Vue application on the index page", () => {
    cy.get("vue-app").shadow().should("not.be.empty");
  });

  it("Integrates a React Button (react-button) on the detail page of the vue application (vue-app)", () => {
    cy.get("vue-app").shadow().find("#0").click();
    cy.get("vue-app")
      .shadow()
      .find("react-button")
      .shadow()
      .should("not.be.empty");
  });

  it("Integrates a React application (react-app) on the basket page", () => {
    cy.get("#basket-link").click();
    cy.get("react-app").shadow().should("not.be.empty");
  });
});

describe("Communication between applications (Redux included)", () => {
  before(() => {
    cy.visit(Cypress.env("APPLICATION_URL"));
  });

  it("Fetches products data from Redux store", () => {
    cy.get("vue-app").shadow().find("ul").should("not.be.empty");
  });

  it("Filters products / category", () => {
    cy.get("vue-app").shadow().find("#filter-phones").click();
    cy.get("vue-app").shadow().find("ul").should("contain", "iPhone X");
    cy.get("vue-app").shadow().find("ul").should("not.contain", "GTA V");
    cy.get("vue-app").shadow().find("#filter-all").click();
  });

  it("Passes information from vue-app to react-button", () => {
    cy.get("vue-app").shadow().find("#1").click();
    cy.get("vue-app")
      .shadow()
      .find("react-button")
      .shadow()
      .find("button")
      .should("contain", "iPhone X");
  });

  it("Adds an item (react-button) in the basket (react-app)", () => {
    cy.get("vue-app")
      .shadow()
      .find("react-button")
      .shadow()
      .find("button")
      .click();

    cy.get("#basket-link").click();
    cy.get("react-app").shadow().find("ul").should("contain", "iPhone X");
  });

  it("Deletes one item in the basket", () => {
    cy.get("#home-link").click();
    cy.get("vue-app").shadow().find("#2").click();
    cy.get("vue-app")
      .shadow()
      .find("react-button")
      .shadow()
      .find("button")
      .click();

    cy.get("#basket-link").click();
    cy.get("react-app").shadow().find("#1").should("not.be.empty");
    cy.get("react-app").shadow().find("#2").should("not.be.empty");

    cy.get("react-app").shadow().find("#1 .btn-trash").click();

    cy.get("react-app").shadow().find("ul").should("not.contain", "iPhone X");
    cy.get("react-app").shadow().find("#2").should("not.be.empty");
  });

  it("Deletes all items in the basket", () => {
    cy.get("#home-link").click();
    cy.get("vue-app").shadow().find("#3").click();
    cy.get("vue-app")
      .shadow()
      .find("react-button")
      .shadow()
      .find("button")
      .click();

    cy.get("#basket-link").click();
    cy.get("react-app").shadow().find("#2").should("not.be.empty");
    cy.get("react-app").shadow().find("#3").should("not.be.empty");

    cy.get("react-app").shadow().find(".btn-deleteall").click();

    cy.get("react-app")
      .shadow()
      .find("ul")
      .should("contain", "Votre panier est vide...");
  });
});
