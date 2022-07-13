import BasePage from './BasePage'

class SportsDirectPage extends BasePage {
  static get url () {
    return 'https://lv.sportsdirect.com/';
  }

  static get (){
    return cy.get('#checkoutButton');
  }
}

export default SportsDirectPage;

