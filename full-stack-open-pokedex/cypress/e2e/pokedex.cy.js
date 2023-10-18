describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it ('navigating to the page of a particular Pokemon works', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('Previous')
    cy.contains('Next')
    cy.contains('Home')
    cy.contains('overgrow')
    cy.contains('chlorophyll')
  })
})