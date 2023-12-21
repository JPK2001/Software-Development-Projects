class BudgetApp:

    # Initialize the app with empty lists for income and expenses
    def __init__(self):
        self.income = []
        self.expenses = []

    # Define a method to add income to the app
    def add_income(self, amount, source):
        if amount > 0 and source != "":
            self.income.append((amount, source))
            print(f"Added ${amount} from {source} to income.")
        else:
            print("Invalid input. Please enter a positive amount and a source.")

    # Define a method to add expenses to the app
    def add_expense(self, amount, category):
        if amount > 0 and category != "":
            self.expenses.append((amount, category))
            print(f"Added ${amount} for {category} to expenses.")
        else:
            print("Invalid input. Please enter a positive amount and a category.")

    # Define a method to calculate the budget
    def calculate_budget(self):
        total_income = 0
        total_expenses = 0
        for amount, source in self.income:
            total_income += amount
        for amount, category in self.expenses:
            total_expenses += amount
        budget = total_income - total_expenses
        print(f"Your total income is ${total_income}.")
        print(f"Your total expenses are ${total_expenses}.")
        print(f"Your budget is ${budget}.")
        if budget > 0:
            print("You have a surplus. Good job!")
        elif budget < 0:
            print("You have a deficit. You need to save more or spend less.")
        else:
            print("You have broken even. You are spending exactly as much as you make.")

# Create an instance of the budget app
my_app = BudgetApp()

# Test the app with some sample inputs
my_app.add_income(1000, "Salary")
my_app.add_income(500, "Bonus")
my_app.add_expense(200, "Rent")
my_app.add_expense(100, "Groceries")
my_app.add_expense(50, "Entertainment")
my_app.calculate_budget()
