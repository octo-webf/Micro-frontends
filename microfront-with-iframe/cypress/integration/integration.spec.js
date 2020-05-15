describe("Home page", function () {
  it("Home page integration", function () {
    cy.visit("http://localhost:5000");
    cy.get("#angular-container").its("0.contentDocument").should("exist");
    cy.get("#react-container").its("0.contentDocument").should("exist");
    cy.get("#vue-container").its("0.contentDocument").should("exist");
  });

  it("Navigates to the communication page", function () {
    cy.get("a").click();
    cy.url().should("include", "/communication");
  });

  it("Modifies iframes URLs by submitting the input", function () {
    cy.visit("http://localhost:5000");
    cy.get("#input").type("Hello!").should("have.value", "Hello!");
    cy.get(".btn").click();

    cy.get("#angular-container")
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

describe("Communication Page", function () {
  it("Communication page integration", function () {
    cy.visit("http://localhost:5000/communication");
    cy.get("#angular-app").its("0.contentDocument").should("exist");
    cy.get("#react-app").its("0.contentDocument").should("exist");
    cy.get("#vue-app").its("0.contentDocument").should("exist");
    cy.get("#console");
  });

  it("Communicates via DOM events", function () {
    cy.get("#input").type("Hello!").should("have.value", "Hello!");
    cy.get(".btn").click();
  });
  it("Informs the user in the console element", function () {
    cy.get("#console").should(
      "contain",
      "> Wrapper: Message sent to the micro-frontends"
    );
  });

  it("Updates Micro-Frontends data", function () {
    cy.get("#angular-app")
      .its("0.contentDocument.body")
      .find(".msg h3")
      .should("contain", "Hello!");

    cy.get("#react-app")
      .its("0.contentDocument.body")
      .find("code")
      .should("contain", "Hello!");

    cy.get("#vue-app")
      .its("0.contentDocument.body")
      .find(".hello h2")
      .should("contain", "Hello!");
  });

  it("Updates the console with Micro-frontends callback", function () {
    cy.get("#console")
      .should("contain", "> Angular: I got the message!")
      .should("contain", "> React: I got the message!")
      .should("contain", "> Vue: I got the message!");
  });
});
