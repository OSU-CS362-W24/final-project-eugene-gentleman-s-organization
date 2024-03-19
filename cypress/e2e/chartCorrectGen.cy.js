

it("Chart Generation Success", () => {
    cy.visit("/")

    cy.findByRole("link", { "name" : "Bar" }).click()

    cy.findByLabelText("Chart title").type("Economic Status to Average Number of Reported Life Difficulties")
    cy.findByLabelText("X label").type("Money")
    cy.findByLabelText("Y label").type("Problems")

    cy.addVals(0,'1','3','5','21','18','11')
    cy.addVals(3,'7','9','11','10','12','15')

    cy.contains('Generate chart').click()

    cy.get('img').should("exist")
})
