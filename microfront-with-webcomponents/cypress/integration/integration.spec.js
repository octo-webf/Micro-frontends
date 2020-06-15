describe("Wrapper  integration", function () {
  it("Integrates the web components", function () {
    cy.visit("http://localhost:4000");
    cy.get("angular-app").shadow().should("not.be.empty");
    cy.get("angular-second-app").shadow().should("not.be.empty");
    cy.get("react-app").shadow().should("not.be.empty");
    cy.get("second-app").shadow().should("not.be.empty");
    cy.get("vue-app").shadow().should("not.be.empty");
  });

  it("Communicates from wrapper-app to react-app", function () {
    cy.get("#input").clear().type("User Name");
    cy.get("#search-button").click();

    cy.get("#btn-sign-in").click();
    cy.get("react-app").shadow().find("p").should("contain", "Hello User Name");
  });

  it("Communicates from angular-app to react-app", function () {
    cy.get("angular-app").shadow().find("#product-1").click();
    cy.get("react-app").shadow().find("#1 h4").should("contain", "Assassin");
  });

  it("Communicates from react second-app to vue-app", function () {
    cy.get("vue-app").shadow().find("h2").should("contain", "GTA");
    cy.get("second-app").shadow().find("#2").click();
    cy.get("vue-app").shadow().find("h2").should("contain", "Fortnite");
  });

  it("Communicates from vue-app to react-app", function () {
    cy.get("vue-app").shadow().find(".button-cart").click();
    cy.get("react-app").shadow().find("#2 h4").should("contain", "Fortnite");
  });
});

describe("Custom Events", function () {
  it("Sends a Custom Event when clicking the sign-in button", function () {
    cy.window().then((win) => {
      const listener = (event) => {
        expect(event.detail.isAuth).to.equal(true);
        win.removeEventListener("setAuthEvent", listener);
      };
      win.addEventListener("setAuthEvent", listener);
    });
    cy.get("#btn-sign-in").click();
  });

  it("Sends a Custom Event when clicking the sign-out button", function () {
    cy.window().then((win) => {
      const listener = (event) => {
        expect(event.detail.isAuth).to.equal(false);
        win.removeEventListener("setAuthEvent", listener);
      };
      win.addEventListener("setAuthEvent", listener);
    });
    cy.get("#btn-sign-out").click();
  });

  it("Sends a Custom Event when submitting the form", function () {
    cy.window().then((win) => {
      const listener = (event) => {
        expect(event.detail.username).to.equal("User Name");
        win.removeEventListener("usernameEvent", listener);
      };
      win.addEventListener("usernameEvent", listener);
    });
    cy.get("#input").clear().type("User Name");
    cy.get("#search-button").click();
  });

  it("Sends a Custom Event when clicking a product (angular-app)", function () {
    cy.window().then((win) => {
      const listener = (event) => {
        expect(event.detail.product.id).to.equal(1);
        win.removeEventListener("addProductToCart", listener);
      };
      win.addEventListener("addProductToCart", listener);
    });
    cy.get("angular-app").shadow().find("#product-1").click();
  });

  it("Sends a Custom Event when clicking a product (react second-app)", function () {
    cy.window().then((win) => {
      const listener = (event) => {
        expect(event.detail.product.id).to.equal(1);
        win.removeEventListener("detailProduct", listener);
      };
      win.addEventListener("detailProduct", listener);
    });
    cy.get("second-app").shadow().find("#1").click();
  });

  it("Sends a Custom Event when clicking the 'add to cart' button", function () {
    cy.visit("http://localhost:4000");
    cy.window().then((win) => {
      const listener = (event) => {
        expect(event.detail.product.id).to.equal(0);
        win.removeEventListener("addProductToCart", listener);
      };
      win.addEventListener("addProductToCart", listener);
    });
    cy.get("vue-app").shadow().find(".button-cart").click();
  });
});
