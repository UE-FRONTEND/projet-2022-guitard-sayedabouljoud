describe('Make sure our todo list app is working well', () => {
    it('Test that we can open a browser and load our app', () => {
        cy.visit("http://127.0.0.1:4000");
    })

    it('Launch a game', () => {
        cy.visit("http://127.0.0.1:4000");
        cy.get('#newGame').click();
    })

    it('Should show a message alert for not good word', () => {
        cy.visit("http://127.0.0.1:4000");
        cy.get('#newGame').click();
        cy.get('#text').type("zzzzz");
        cy.get('btnValide').click();
        cy.on('window:alert', (t) => {
            expect(t).to.contains("Le mot n'est pas dans la liste");
        })
    })

    it('New attempt', () => {
        cy.visit("http://127.0.0.1:4000");
        cy.get('#newGame').click();
        cy.get('#text').type("jante");
        cy.get('btnValide').click();

    })

    it('Should show a defeat page', () => {
        cy.visit("http://127.0.0.1:4000");
        cy.get('#newGame').click();
        cy.get('#btnAbandon').click();
        cy.get('#').click()
    })

    it('Lauch stats page', () => {
        cy.visit("http://127.0.0.1:4000");
        cy.get('#stats').click();
    })
})