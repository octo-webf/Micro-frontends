describe("Container Application", function () {
    it("Home page integration", function () {
        cy.visit("http://localhost:8000").should("exist");
        cy.get("#react1-app").should("not.be.empty");
        cy.get("#react2-app").should("not.be.empty");
        cy.get("#react3-app").should("not.be.empty");
        cy.get("#angular-app").should("not.be.empty");
    });
})