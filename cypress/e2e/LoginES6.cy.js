// Destructuring of object
import  Login from "../../Pages/LoginPage.po";
import { ProductPage } from "../../Pages/ProductDetail.po";

let loginPage = new Login();
let productPage = new ProductPage();

describe("template spec", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("base_url"));
  });
  it("ES6 login and product add to card", () => {
    loginPage.typeUserName("standard_user");
    loginPage.typePassword("secret_sauce");
    loginPage.pressLoginButton();
    cy.log("Login page successfully ");
    cy.get(".title").should("have.text", "Products");

    productPage.clickProduct();
    productPage.assertionForBackToProductsButton();
    productPage.pressAddToCardButton();
  });
});
