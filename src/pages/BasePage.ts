import { Page } from '@playwright/test';

/** Behaviour shared by every page object. */
export abstract class BasePage {
  /** URL path of the page, relative to baseURL (or absolute for other sites). */
  protected abstract readonly path: string;

  constructor(protected readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.path);
  }
}
