import {test,expect} from '@playwright/test'

test('Book a slot with keyboard', async({page})=>{
    await page.goto("https://lkmdemoaut.accenture.com/AccenSportz/#/widgets/schedule")

    await page.locator("#bookslot").click()

    await page.getByPlaceholder("Select any sport").click()

    await page.keyboard.type("Cricket")

    await page.getByPlaceholder("Select Slot Date").click()
    await page.keyboard.type('2026-11-19')

    await page.locator("#mat-select-value-1").click()

    await page.locator('//*[@id="mat-option-8"]/span').click()

    await page.locator('[name="submitbutton"]').click()

    await page.waitForTimeout(3000)
})