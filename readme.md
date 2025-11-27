# Playwright Automation Tests – AutomationExercise.com

This project contains end-to-end UI tests written in **Playwright + TypeScript**, using the Page Object Model (POM) pattern.  
The test covers **login**, **adding a product to cart**, and **successful checkout** on **automationexercise.com**.

---

## 📁 Project Structure

```
project/
 ├── tests/
 │    ├── specs/
 │    │     └── shopping.spec.ts
 │    ├── pom/
 │    │     └── shopping.page.ts
 │    └── utility/
 │          └── random.ts
 ├── playwright.config.ts
 ├── package.json
 └── README.md
```

---

## 🛠 Installation

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶ Running Tests

Run in **headless mode** (default):

```bash
npx playwright test
npm run test
```

Run in **headed mode** (visible browser):

```bash
npx playwright test --headed
```

Run a specific file:

```bash
npx playwright test tests/specs/shopping.spec.ts
```

Open Playwright Test Report:

```bash
npx playwright show-report
```

---

## 🧪 Test Scenario (Scenario 1)

The test performs:

1. Open home page  
2. Accept cookie consent  
3. Go to "Signup / Login"  
4. Log in using test account  
5. Navigate to Products page  
6. Add a product to cart  
7. Open the cart  
8. Proceed to checkout  
9. Fill payment details  
10. Confirm the order  
11. Verify that order was placed successfully  

Test account used:

- **Email:** practicant@gmail.com  
- **Password:** test  

Random data (numbers) are generated using `/utility/random.ts`.

---

## 📌 Technologies Used

- **Playwright**
- **TypeScript**
- **Page Object Model**
- **Node.js**

---

## ✔ How Page Object Model Works

All selectors and actions for the website are stored inside:

```
tests/pom/shopping.page.ts
```

The test file imports it:

```ts
import { ShoppingPage } from '../pom/shopping.page';
```

This keeps the test clean and maintainable.

---

## 💡 Notes

- Headless mode is faster and more stable.  
- In headed mode, UI animations may cause occasional slowdowns on low-performance machines.  
- Selectors are optimized using classes, IDs and attributes from the website.

---

## 📜 License

This project is for educational and testing purposes.

