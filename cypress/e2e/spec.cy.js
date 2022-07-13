import SportsDirectPage from "../pageObjects/SportsDirectPage";

describe('Sportsdirect test', () => {
  beforeEach(() => {
    SportsDirectPage.visit();
  });
  it('test', () => {
SportsDirectPage.clickBrands.click();
SportsDirectPage.selectBrand.click();
SportsDirectPage.selectOption.contains("Trainers").click();
SportsDirectPage.Checkbox.contains("Mens").click();
SportsDirectPage.Checkbox.contains("Trainers").click();
SportsDirectPage.Checkbox.contains("Court Trainers").click();
SportsDirectPage.Checkbox.contains("Leather").click();
SportsDirectPage.Checkbox.contains("Black").click();
SportsDirectPage.productCount.should('have.length', 2);
SportsDirectPage.productCount.last().click();
SportsDirectPage.productName.should("have.text", "Grand Court SE Trainers Mens");
})
})