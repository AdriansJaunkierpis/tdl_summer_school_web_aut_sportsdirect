import BasePage from './BasePage'

class SportsDirectPage extends BasePage {
  static get url () {
    return 'https://lv.sportsdirect.com/';
  }

  static get clickBrands(){
    return cy.get('#lnkTopLevelMenu_2579840');
  }
  static get selectBrand(){
    return cy.get('.Adidas');
  }
  static get selectOption(){
    return cy.get('.slideName');
  }
  static get (){
    return cy.get('');
  }
  static get (){
    return cy.get('');
  }
}

export default SportsDirectPage;

