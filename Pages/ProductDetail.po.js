export class ProductPage {
    product = "#item_1_title_link";
    backButton = '[data-test="back-to-products"]';
    addToCardButton = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]';
  clickProduct() {
    cy.get(this.product).click();
  }
  assertionForBackToProductsButton() {
    cy.get(this.backButton).should("have.text", "Back to products");
  }
  pressAddToCardButton() {
    cy.get(this.addToCardButton).click();
  }
}
