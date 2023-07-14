const url = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
describe('Get List User', () => {
    it('Should StatusCode 200', () => {
        cy.request(url).then((response) => {
            cy.log(response)
            expect(response.status).to.eq(200)
        })
        
        cy.request(url).should("have.a.property", "status", 200)
    });

    it.only('Find User by name', () => {
        cy.request(url).then((response) => {
            const body = response.body
            expect(body).to.have.lengthOf(4)
            const { city } = body.filter(item => item.name.includes("Don Quixote"))[0]
            cy.wrap(city).as('city')
        })

        cy.request(url).then((response) => {
            cy.get("@city").then((city) => {
                cy.log(city)
                const body = response.body
                expect(body).to.have.lengthOf(4)
                const names = body.filter(item => item.city.includes(city))
                cy.log(names)
            })
        });
    })
});