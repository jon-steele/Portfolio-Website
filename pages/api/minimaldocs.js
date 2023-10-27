export default function handler(req, res) {
    // You can create your React HTML document here
    const docs = `
    <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.7/dist/tailwind.min.css">
  </head>
  <body class="bg-gray-100 p-4">
    <h1 id="minimal" class="text-5xl font-bold text-amber-200 mb-4">Minimal</h1>
    <h3 id="simplify-your-savings-" class="text-3xl font-italic text-blue mb-2">Simplify your savings.</h3>
    <p class="text-base text-gray-800 mb-4">
      Minimal is a budgeting app designed to make budgeting as easy and
      painless as possible. We are tired of popups, advertisements,
      unnecessary features, marketing emails, and monthly subscriptions
      cluttering our phones and our minds. We wish to simplify your savings by
      removing redundancy, and providing you with what really matters in a
      budgeting app:
    </p>
    <p class="text-base text-gray-800 mb-4">Fast, painless monthly budget creation with useful analytics.</p>
    <h3 id="give-us-feedback-" class="text-3xl mb-2">Give us feedback!</h3>
    <p class="text-base text-gray-800 mb-4">
      Please email us at <a href="mailto:jonsteele.dev@gmail.com" class="text-blue">jonsteele.dev@gmail.com</a> if you notice any bugs or want
      any features added.
    </p>
    <h3 id="test-minimal-out-" class="text-3xl mb-2">Test Minimal Out!</h3>
    <p class="text-base text-gray-800 mb-4">
      This app can be accessed at <a href="https://minimalbudget.ca" class="text-blue">minimalbudget.ca</a> for users, and
      will be deployed to the Google Play Store and App Store.
    </p>
    <h2 id="user-guide" class="text-4xl mb-4">User Guide</h2>
    <h3 id="logging-in" class="text-3xl mb-2">Logging In</h3>
    <p class="text-base text-gray-800 mb-4">
      To log into Minimal, users can either opt to "Continue as Guest," or register as a new account. For testing purposes,
      "Continue as Guest" is adequate, however, if you wish for your budget data to persist, please create an account by clicking
      "Register," and then filling out your account information.
    </p>
    <h3 id="budgets" class="text-3xl mb-2">Budgets</h3>
    <h4 id="creating-a-budget" class="text-2xl mb-2">Creating a Budget</h4>
    <p class="text-base text-gray-800 mb-4">
      After logging in, users can create a budget by pressing the "+" icon on screen. Users will be met with an "Add a new
      Budget" popup, where they can enter their desired name of the budget.
    </p>
    <h4 id="editing-a-budget" class="text-2xl mb-2">Editing a Budget</h4>
    <p class="text-base text-gray-800 mb-4">
      Users can edit their budgets by pressing the name of the budget from their home menu. This will bring up the Budget view,
      allowing users to manipulate and analyze their budget.
    </p>
    <h4 id="adding-an-expense-or-income" class="text-2xl mb-2">Adding an Expense or Income</h4>
    <p class="text-base text-gray-800 mb-4">
      To add a new expense or income stream, users can press the blue "+" button in the bottom right-hand corner. This will bring up
      a popup screen, where users can specify all necessary data on the new transaction. This data includes categorizing the transaction as an
      income or expense, the name of the transaction, as well as the numerical value of the data.
    </p>
    <h4 id="deleting-an-expense-or-income" class="text-2xl mb-2">Deleting an Expense or Income</h4>
    <p class="text-base text-gray-800 mb-4">
      To delete an Expense or Income, users can swipe horizontally on the desired item. This will immediately remove it from the budget.
    </p>
    <h4 id="editing-an-expense-or-income" class="text-2xl mb-2">Editing an Expense or Income</h4>
    <p class="text-base text-gray-800 mb-4">
      To edit an Expense or Income, users can press and hold on the desired item. This will bring up a popup window that allows them to change the
      name and value of the item.
    </p>
    <h3 id="analyzing-a-budget" class="text-3xl mb-2">Analyzing a Budget</h3>
    <p class="text-base text-gray-800 mb-4">
      Minimal offers two different ways of analyzing a budget: The real-time Pie Chart, which shows percentages of allocated expenses, as well as an
      Investment Calculator.
    </p>
    <h4 id="pie-chart" class="text-2xl mb-2">Pie Chart</h4>
    <p class="text-base text-gray-800 mb-4">
      The Pie chart can be seen on the top left of a budget, and will
      automatically populate with data and color as the user inputs their expenses. If you wish to view the percentage of allocated expenses, you
      can press and hold the slice of the desired expense.
    </p>
    <h4 id="investment-calculator" class="text-2xl mb-2">Investment Calculator</h4>
    <p class="text-base text-gray-800 mb-4">
      The Investment Calculator is a tool used to calculate compound interest on your investments. To use the Investment Calculator, press the icon on
      the top right of the budget screen.
    </p>
    <p class="text-base text-gray-800 mb-4">
      Inside the Investment Calculator, there are four different fields to
      input your data.
    </p>
    <ol class="list-decimal list-inside text-base pl-4 mb-4">
      <li>
        Interest Rate: This is the average yearly interest rate of your investments.
      </li>
      <li>
        Years: This is how far into the future you would like to project your investments.
      </li>
      <li>
        Percentage of Net Income Invested: This is the percentage of the net income from your budget that you would like to invest.
      </li>
      <li>
        Initial Investments: This is how much money you start off with invested in the simulation.
      </li>
    </ol>
    <p class="text-base text-gray-800 mb-4">
      After all of these fields have been correctly set up, the user can now
      view how their finances change over time by pressing and holding, or
      hovering over the graph above.
    </p>
    <p class="text-base text-gray-800 mb-4">
      The purpose of this calculator is to give users a sense of how their
      interest on investments increases exponentially over time, as well as
      provide an estimation of where their finances will end up years into the future.
    </p>
    <h3 id="wishlist" class="text-3xl mb-2">Wishlist</h3>
    <p class="text-base text-gray-800 mb-4">
      To view your wishlist, go back to the first screen you see after you
      login. This is the page where you create and manage different budgets.
      Here, you can press the "list" icon in the top right-hand corner of the blue bar, next to your "profile" icon.
    </p>
    <p class="text-base text-gray-800 mb-4">
      Inside your wishlist, press the blue "+" button to add a
      wishlist item. Items have a name and price. The "get rid of"
      field is designed to make users more mindful of the flow of items in
      their household because you can't keep filling a room with stuff
      forever. For instance, one might list "New T-Shirts" as their
      item, 30 for the price, and "Old worn-out hoodies" under the
      "get rid of" field.
    </p>
  </body>
  
    `;
    
    // Set the response content type to HTML
    res.setHeader("Content-Type", "text/html");
    
    // Send the HTML as the response
    res.send(docs);
  }
  