import SportsDirectPage from "../pageObjects/SportsDirectPage";

describe('Sportsdirect test', () => {
  beforeEach(() => {
    SportsDirectPage.visit();
  });
  it('test', () => {
SportsDirectPage.clickBrands.click();
SportsDirectPage.selectBrand.click();
SportsDirectPage.selectOption.contains("Trainers").click();
  })
})