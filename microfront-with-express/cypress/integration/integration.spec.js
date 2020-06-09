describe("EJS Application", function () {
    it("Integrates the micro-frontends", function () {
        cy.visit("http://localhost:8000").should("exist");
        cy.get("#react1-app").should("not.be.empty");
        cy.get("#react2-app").should("not.be.empty");
        cy.get("#react3-app").should("not.be.empty");
        cy.get("#angular-app").should("not.be.empty");
    });

    it('Communicates from 1st React micro-frontends to the other React micro-frontends', function () {
        cy.get('#btn-clear').should('exist').click()
        cy.get('.info-2').should('contain', '...')
        cy.get('.info-3').should('contain', '...')

        cy.get('#btn-all').click()
        cy.get('.info-2').should('contain', 'Hello React!')
        cy.get('.info-3').should('contain', 'Hello React!')
    })

    it('Communicates from 1st React micro-frontends to the 2nd', function () {
        cy.get('#btn-clear').click()
        cy.get('#btn-react2').should('exist').click()
        cy.get('.info-2').should('contain', 'Hello React!')
        cy.get('.info-3').should('contain', '...')
    })

    it('Communicates from 1st React micro-frontends to the 3nd', function () {
        cy.get('#btn-clear').click()
        cy.get('#btn-react3').should('exist').click()
        cy.get('.info-2').should('contain', '...')
        cy.get('.info-3').should('contain', 'Hello React!')
        cy.get('#btn-clear').click()
    })
})

describe('DOM Events sent', function () {
    it('Sends a DOM event when activating the React2 button', function () {
        cy.window().then(win => {
            const listener = (event) => {
                expect(event.data.microfront).to.equal(2)
                expect(event.data.message).to.equal('Hello React!')
                win.removeEventListener("message", listener)
            }
            win.addEventListener("message", listener)
        })

        cy.get('#btn-react2').click()
    })

    it('Sends a DOM event when activating the React3 button', function () {
        cy.window().then(win => {
            const listener = (event) => {
                expect(event.data.microfront).to.equal(3)
                expect(event.data.message).to.equal('Hello React!')
                win.removeEventListener("message", listener)
            }
            win.addEventListener("message", listener)
        })
        cy.get('#btn-react3').click()
    })

    it('Sends a DOM event when activating the All button', function () {
        cy.window().then(win => {
            const listener = (event) => {
                expect(event.data.microfront).to.equal('*')
                expect(event.data.message).to.equal('Hello React!')
                win.removeEventListener("message", listener)
            }
            win.addEventListener("message", listener)
        })
        cy.get('#btn-all').click()
    })

    it('Sends a DOM event when activating the Clear button', function () {
        cy.window().then(win => {
            const listener = (event) => {
                expect(event.data.microfront).to.equal('*')
                expect(event.data.message).to.equal('...')
                win.removeEventListener("message", listener)
            }
            win.addEventListener("message", listener)
        })
        cy.get('#btn-clear').click()
    })

})