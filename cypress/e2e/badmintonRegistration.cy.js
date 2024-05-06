var config = require('./config.json');


describe('Register for badminton drop-in', () => {
  it('Successfully logged in', () => {
    cy
      .visit('https://efun.toronto.ca/torontofun/Activities/ActivitiesAdvSearch.asp?invocationLink=ALTLINK&SectionId=119&SubSectionId=229&BasicSearch=True')
      .contains('Log in').click()
      .get('#ClientBarcode').type(config.clientNumber)
      .get('#AccountPIN').type(config.familyNumber)
      .get('#Enter').click()
  })

  it('Register for badminton', () => {
    cy
      .get('select[name="ComplexId"]').select('Canoe Landing CRC')
      .get('a').contains('DROP-IN: Badminton').click()
      .get('a').contains('DROP-IN: Badminton ').click()
      .contains('Add to Cart').click()
      .get('select[name="ClientID"]').select('Wallace Lee')
      .get('input[value="Go to Checkout"]').click()
  })

})

