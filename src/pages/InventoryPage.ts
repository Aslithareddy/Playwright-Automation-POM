import { Locator, Page } from '@playwright/test';

export class InventoryPage {
  readonly title: Locator;

  constructor(page: Page) {
    this.title = page.getByTestId('title');
  }
}
