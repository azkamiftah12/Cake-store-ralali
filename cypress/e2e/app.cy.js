describe('Navigation', () => {
    it('should navigate to the about page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
   
      // Find a link with an href attribute containing "cake" and click it
      cy.get('a[href*="cake"]').click()
   
      // The new url should include "/about"
      cy.url().should('include', '/cake')
   
      // The new page should contain an h1 with "About page"
      cy.get('title').contains('Cake List')
    })
  })