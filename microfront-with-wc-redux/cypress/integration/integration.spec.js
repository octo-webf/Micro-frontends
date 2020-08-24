const APPLICATION_URL = "http://localhost:4000";

describe("Custom Elements integration", () => {
  it("Integrates a Vue application on the index page", () => {
    cy.visit(APPLICATION_URL);
    cy.get("vue-app").shadow().should("not.be.empty");
  });

  it("Integrates a React Button on the detail page of the vue application", () => {
    cy.visit(APPLICATION_URL);
    cy.get("vue-app").shadow().find("#0").click();
    cy.get("vue-app")
      .shadow()
      .find("react-button")
      .shadow()
      .should("not.be.empty");
  });

  it("Integrates a React application on the basket page", () => {
    cy.visit(`${APPLICATION_URL}/basket`);
    cy.get("react-app").shadow().should("not.be.empty");
  });
});

describe("Communication between applications", () => {
  it("Passes information from vue-app to react-button", () => {
    cy.visit(APPLICATION_URL);
    cy.get("vue-app").shadow().find("#1").click();
    cy.get("vue-app")
      .shadow()
      .find("react-button")
      .shadow()
      .find("button")
      .should("contain", "iPhone X");
  });
});
