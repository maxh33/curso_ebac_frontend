describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })
  it('Should fill the form to add new contact', () => {
    cy.get('input[placeholder="Nome"]').type('Satoshi Nakamoto')
    cy.get('input[placeholder="E-mail"]').type('only@btc.com')
    cy.get('input[placeholder="Telefone"]').type('11 9945-6789')
    cy.get('button[type="submit"').click()
    cy.wait(1000)
  })
  it('Should list the new contact', () => {
    cy.get('div').contains('Satoshi Nakamoto')
  })
  it('Should edit the contact Bruna', () => {
    cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
    cy.get('input[placeholder="Nome"]').clear().type('Bruna Nakamoto')
    cy.get('input[placeholder="E-mail"]').clear().type('bruna@nakamoto.com')
    cy.get('input[placeholder="Telefone"]').clear().type('11 9945-6789')
    cy.get('button.alterar[type="submit"]').click()
    cy.wait(1000)
  })
  it('Should check if the contact was edited', () => {
    cy.get('.sc-eDDNvR').contains('Bruna Nakamoto', { timeout: 1000 })
  })
  it('Should delete the contact Felice Lacerda', () => {
    cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
    cy.wait(1000)
  })
  it('Should check if the contact was deleted', () => {
    cy.get('.sc-eDDNvR').contains('Felice Lacerda').should('not.exist')
  })
})