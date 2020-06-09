describe("JS container Application", function () {
    it("Integrates the micro-frontends", function () {
        cy.visit("http://localhost:7000").should("exist");
        cy.get("#react1-app").should("not.be.empty");
        cy.get("#react2-app").should("not.be.empty");
        cy.get("#react3-app").should("not.be.empty");
        cy.get("#angular-app").should("not.be.empty");
        cy.get("#angular2-app").should("not.be.empty");
    });

    it('Communicates from 1st React micro-frontends to the other React micro-frontends', function () {
        cy.get('#btn-clear').should('exist').click()
        cy.get('.secondApp .message').should('be.empty')
        cy.get('.thirdApp .message').should('be.empty')

        cy.get('#btn-all').click()
        cy.get('.secondApp .message').should('contain', 'Hello React!')
        cy.get('.thirdApp .message').should('contain', 'Hello React!')
    })

    it('Communicates from 1st React micro-frontends to the 2nd', function () {
        cy.get('#btn-clear').click()
        cy.get('#btn-react2').should('exist').click()
        cy.get('.secondApp .message').should('contain', 'Hello React!')
        cy.get('.thirdApp .message').should('be.empty')
    })

    it('Communicates from 1st React micro-frontends to the 3nd', function () {
        cy.get('#btn-clear').click()
        cy.get('#btn-react3').should('exist').click()
        cy.get('.secondApp .message').should('be.empty')
        cy.get('.thirdApp .message').should('contain', 'Hello React!')
        cy.get('#btn-clear').click()
    })
})


describe('DOM Events sent', function () {
    it('Sends a DOM event when activating the React2 button', function () {
        cy.window().then(win => {
            const listener = (event) => {
                expect(event.data.targetApp).to.equal(2)
                expect(event.data.message).to.equal('Hello React!')
                expect(event.data.clear).to.equal(false)
                win.removeEventListener("message", listener)
            }
            win.addEventListener("message", listener)
        })
        cy.get('#btn-react2').click()
    })

    it('Sends a DOM event when activating the React3 button', function () {
        cy.window().then(win => {
            const listener = (event) => {
                expect(event.data.targetApp).to.equal(3)
                expect(event.data.message).to.equal('Hello React!')
                expect(event.data.clear).to.equal(false)
                win.removeEventListener("message", listener)
            }
            win.addEventListener("message", listener)
        })
        cy.get('#btn-react3').click()
    })

    it('Sends a DOM event when activating the All button', function () {
        cy.window().then(win => {
            const listener = (event) => {
                expect(event.data.targetApp).to.equal('*')
                expect(event.data.message).to.equal('Hello React!')
                expect(event.data.clear).to.equal(false)
                win.removeEventListener("message", listener)
            }
            win.addEventListener("message", listener)
        })
        cy.get('#btn-all').click()
    })

    it('Sends a DOM event when activating the Clear button', function () {
        cy.window().then(win => {
            const listener = (event) => {
                expect(event.data.targetApp).to.equal('*')
                expect(event.data.clear).to.equal(true)
                win.removeEventListener("message", listener)
            }
            win.addEventListener("message", listener)
        })
        cy.get('#btn-clear').click()
    })

})
