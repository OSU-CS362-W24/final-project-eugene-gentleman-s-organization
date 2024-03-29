it('generate chart', () => {
    cy.visit('http://localhost:8080/')
    cy.findByText("Line").should("exist")
    cy.contains('Line').click()
    cy.get('[id="chart-title-input"]').type('Cats vs. Dogs')
    cy.get('[id="x-label-input"]').type('Cats')
    cy.get('[id="y-label-input"]').type('Dogs')
    cy.contains('+').click()
    cy.contains('+').click()
    cy.contains('+').click()
    cy.contains('+').click()
    cy.get('[class="x-value-input"]').eq(0).type('1')
    cy.get('[class="y-value-input"]').eq(0).type('3')
    cy.get('[class="x-value-input"]').eq(1).type('2')
    cy.get('[class="y-value-input"]').eq(1).type('7')
    cy.get('[class="x-value-input"]').eq(2).type('3')
    cy.get('[class="y-value-input"]').eq(2).type('15')
    cy.get('[class="x-value-input"]').eq(3).type('4')
    cy.get('[class="y-value-input"]').eq(3).type('25')
    cy.get('[class="x-value-input"]').eq(4).type('5')
    cy.get('[class="y-value-input"]').eq(4).type('40')
    cy.get('img').should('have.length', 0)
    cy.contains('Generate chart').click()
    cy.get('img').should('have.length', 1)
})

it('chart data is saved across pages', () => {
    cy.visit('http://localhost:8080/')
    cy.findByText("Line").should("exist")
    cy.contains('Line').click()
    cy.get('[id="chart-title-input"]').type('Cats vs. Dogs')
    cy.get('[id="x-label-input"]').type('Cats')
    cy.get('[id="y-label-input"]').type('Dogs')
    cy.contains('+').click()
    cy.contains('+').click()
    cy.contains('+').click()
    cy.contains('+').click()
    cy.get('[class="x-value-input"]').eq(0).type('1')
    cy.get('[class="y-value-input"]').eq(0).type('3')
    cy.get('[class="x-value-input"]').eq(1).type('2')
    cy.get('[class="y-value-input"]').eq(1).type('7')
    cy.get('[class="x-value-input"]').eq(2).type('3')
    cy.get('[class="y-value-input"]').eq(2).type('15')
    cy.get('[class="x-value-input"]').eq(3).type('4')
    cy.get('[class="y-value-input"]').eq(3).type('25')
    cy.get('[class="x-value-input"]').eq(4).type('5')
    cy.get('[class="y-value-input"]').eq(4).type('40')
    cy.contains('Scatter').should("exist")
    cy.contains('Scatter').click()
    cy.get('[class="x-value-input"]').eq(0).should('have.value', '1')
    cy.get('[class="y-value-input"]').eq(0).should('have.value', '3')
    cy.get('[class="x-value-input"]').eq(1).should('have.value', '2')
    cy.get('[class="y-value-input"]').eq(1).should('have.value', '7')
    cy.get('[class="x-value-input"]').eq(2).should('have.value', '3')
    cy.get('[class="y-value-input"]').eq(2).should('have.value', '15')
    cy.get('[class="x-value-input"]').eq(3).should('have.value', '4')
    cy.get('[class="y-value-input"]').eq(3).should('have.value', '25')
    cy.get('[class="x-value-input"]').eq(4).should('have.value', '5')
    cy.get('[class="y-value-input"]').eq(4).should('have.value', '40')
    cy.contains('Bar').should("exist")
    cy.contains('Bar').click()
    cy.get('[class="x-value-input"]').eq(0).should('have.value', '1')
    cy.get('[class="y-value-input"]').eq(0).should('have.value', '3')
    cy.get('[class="x-value-input"]').eq(1).should('have.value', '2')
    cy.get('[class="y-value-input"]').eq(1).should('have.value', '7')
    cy.get('[class="x-value-input"]').eq(2).should('have.value', '3')
    cy.get('[class="y-value-input"]').eq(2).should('have.value', '15')
    cy.get('[class="x-value-input"]').eq(3).should('have.value', '4')
    cy.get('[class="y-value-input"]').eq(3).should('have.value', '25')
    cy.get('[class="x-value-input"]').eq(4).should('have.value', '5')
    cy.get('[class="y-value-input"]').eq(4).should('have.value', '40')
    cy.contains('Line').should("exist")
    cy.contains('Line').click()
    cy.get('[class="x-value-input"]').eq(0).should('have.value', '1')
    cy.get('[class="y-value-input"]').eq(0).should('have.value', '3')
    cy.get('[class="x-value-input"]').eq(1).should('have.value', '2')
    cy.get('[class="y-value-input"]').eq(1).should('have.value', '7')
    cy.get('[class="x-value-input"]').eq(2).should('have.value', '3')
    cy.get('[class="y-value-input"]').eq(2).should('have.value', '15')
    cy.get('[class="x-value-input"]').eq(3).should('have.value', '4')
    cy.get('[class="y-value-input"]').eq(3).should('have.value', '25')
    cy.get('[class="x-value-input"]').eq(4).should('have.value', '5')
    cy.get('[class="y-value-input"]').eq(4).should('have.value', '40')
})