404: Money not found.

A webshop built in React.

## 🛒 Features

- View products.
- Search products.
- Filter products.
- View details on products.
- Add products to cart.
- See total number of items and price in cart.
- Save cart in LocalStorage.
- Toggle between Dark Mode / Light Mode.

## 🚀 Getting Started

1. Copy repository and open project in vs code.
2. Install dependencies:
   - npm install.
3. Start server:
   - npm run dev.
4. Insert provided local adress from vite into browser.

## 🛠️ Technologies

- Vite.
- React Router.
- Axios.
- TanStack Query.
- Context API.
- LocalStorage.
- react-toggle-dark-mode.

## 📁 Project Structure

- Src: (all and direct to) main.jsx. / app.jsx.
- Api: DummyJSON.
- Components: CategoryMenu, Header, NavBar, ProductCard, ThemeSwitch.
- Context: CartContex, SearchContext, SearchProvider.
- Hooks: useLocalStorage, useProductQuery.
- Pages: Cart, Home, NotFound, ProductDetails, Products.
- Routes: Index.
- Styles: global.css.

## 💡 What I Would Improve

- Adding more detailed error messages.
- Adding user accounts and a check-out system.
- Reset pagination after a category is chosen.
- Acessibility: Give images alt text, buttons, links.
- Previous / next button need styling.
- Page 1 of 20 section needs better placement.
- General styling of the entire page.
- Add a currency on the prices of products.
- Product details page is lacking, I would add classes etc and style it more proper.
- (if it werent DummyJSON) Get better resolution for product images.
- Add go to home when clicking "404: Money not found" as well as the home button.
- Download and use better fonts.
