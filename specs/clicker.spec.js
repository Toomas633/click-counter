const { PAGE_URL } = process.env

const countSelector = '#click-count'

describe('Click Counter', () => {
  beforeAll(async () => {
    await page.goto(PAGE_URL, { waitUntil: 'networkidle2' })
  })

  it('Should be titled "Click Counter"', async () => {
    await expect(page.title()).resolves.toMatch('Click Counter')
  })

  it('Should increment count on every click', async () => {
    for (let index = 0; index < 10; index += 1) {
      await page.click('[name="click-increment"]')
    }

    await page.waitForSelector(countSelector)
    const element = await page.$(countSelector)
    const textValue = await page.evaluate((searchElement) => searchElement.textContent, element)

    expect(textValue).toEqual('10')
  })

  it('Should reset count on reset button click', async () => {
    await page.click('[name="click-reset"]')

    await page.waitForSelector(countSelector)
    const element = await page.$(countSelector)
    const textValue = await page.evaluate((searchElement) => searchElement.textContent, element)

    expect(textValue).toEqual('0')
  })

  it('Should decrement count on every click', async () => {
    for (let index = 0; index < 10; index += 1) {
      await page.click('[name="click-increment-down"]')
    }

    await page.waitForSelector(countSelector)
    const element = await page.$(countSelector)
    const textValue = await page.evaluate((searchElement) => searchElement.textContent, element)

    expect(textValue).toEqual('-10')
  })

  it('Should toggle theme between dark and light', async () => {
    const body = await page.$('body')
    const themeToggleSelector = '[name="theme-toggle"]'

    const initialTheme = await page.evaluate((el) => el.getAttribute('data-theme'), body)
    expect(initialTheme).toBe('dark')

    await page.click(themeToggleSelector)
    const darkTheme = await page.evaluate((el) => el.getAttribute('data-theme'), body)
    expect(darkTheme).toBe('light')

    await page.click(themeToggleSelector)
    const lightTheme = await page.evaluate((el) => el.getAttribute('data-theme'), body)
    expect(lightTheme).toBe('dark')
  })
})
