
it("User inputs do not disappear upon navigating away from page", () => {
    cy.visit("/")

    cy.findByRole("link", { "name" : "Scatter" }).click()

    cy.findByLabelText("Chart title").type("Public Awareness of Monkeys Terrorizing Silver Springs FL by Age")
    cy.findByLabelText("X label").type("Age")
    cy.findByLabelText("Y label").type("Awareness")

    cy.addVals(0,'15','20','34','7','10','3')
    cy.addVals(3,'68','19','46','1','5','9')
    cy.addVals(6,'68','19','46','1','5','9')

    cy.contains('Generate chart').click()

    cy.findByRole("link", { "name" : "Gallery" }).click()
    cy.findByRole("link", { "name" : "Line" }).click()

    cy.findByRole("link", { "name" : "Scatter" }).click()

    cy.findByLabelText("Chart title").should('have.value', "Public Awareness of Monkeys Terrorizing Silver Springs FL by Age")
    cy.findByLabelText("X label").should('have.value', "Age")
    cy.findByLabelText("Y label").should('have.value', "Awareness")

    cy.checkVals(0,'15','20','34','7','10','3')
    cy.checkVals(3,'68','19','46','1','5','9')
    cy.checkVals(6,'68','19','46','1','5','9')
})