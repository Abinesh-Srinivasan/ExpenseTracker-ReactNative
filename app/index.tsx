import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, View } from "react-native";

import DashboardTab from "./tabs/DashboardTab";
import ExpensesTab from "./tabs/ExpensesTab";
import DeveloperTab from "./tabs/DeveloperTab";
import { useEffect, useState } from "react";

const DashboardIcon = require("@/assets/images/TabIcons/dashboard.png");
const ExpensesIcon = require("@/assets/images/TabIcons/expenses.png");
const DeveloperIcon = require("@/assets/images/TabIcons/user.png");

const Tab = createBottomTabNavigator();

export default function Index() {
  type Expense = {
    id: number;
    category: string;
    amount: number;
    date: string;
    description: string;
  };

  const [expenses, setExpenses] = useState<Expense[]>([
    // {
    //   id: 0,
    //   category: "Abi",
    //   amount: 150,
    //   date: "04-01-2025",
    //   description: "Hi, this is Nesharo",
    // },
    // {
    //   id: 980,
    //   category: "Farith",
    //   amount: 150,
    //   date: "04-01-2025",
    //   description: "Hi, this is Nesharo",
    // },
    // {
    //   id: 120,
    //   category: "Diljaz",
    //   amount: 150,
    //   date: "04-01-2025",
    //   description: "Hi, this is Nesharo",
    // },
    // {
    //   id: 680,
    //   category: "Suresh",
    //   amount: 150,
    //   date: "04-01-2025",
    //   description: "Hi, this is Nesharo",
    // },
    // {
    //   id: 560,
    //   category: "Raja",
    //   amount: 150,
    //   date: "04-01-2025",
    //   description: "Hi, this is Nesharo",
    // },
    // {
    //   id: 340,
    //   category: "Abhi",
    //   amount: 150,
    //   date: "04-01-2025",
    //   description: "Hi, this is Nesharo",
    // },
    // {
    //   id: 390,
    //   category: "Food",
    //   amount: 150,
    //   date: "04-01-2025",
    //   description: "Hi, this is Nesharo",
    // },
    // {
    //   id: 10,
    //   category: "Travel",
    //   amount: 150,
    //   date: "04-01-2025",
    //   description: "Hi, this is Nesharo",
    // },
    // {
    //   id: 100,
    //   category: "Cinema",
    //   amount: 150,
    //   date: "04-01-2025",
    //   description: "Hi, this is Nesharo",
    // },
    // {
    //   id: 2,
    //   category: "Stationary",
    //   amount: 500,
    //   date: "04-01-2025",
    //   description: "Hi, this is Nesharo",
    // },
    // {
    //   id: 20,
    //   category: "Travel",
    //   amount: 500,
    //   date: "01-01-2025",
    //   description: "Hi, this is Nesharo",
    // },
    // {
    //   id: 200,
    //   category: "Travel",
    //   amount: 500,
    //   date: "01-01-2025",
    //   description: "Hi, this is Nesharo",
    // },
    // {
    //   id: 3,
    //   category: "Shopping",
    //   amount: 200,
    //   date: "13-10-2024",
    //   description:
    //     "Hi, this is Nesharo, hello, how are youshflsh, farith suresh ganesh raja diljaz abhimanyu, Hi, this is Nesharo, hello, how are youshflsh, Hi, this is Nesharo",
    // },
    // {
    //   id: 30,
    //   category: "Shopping",
    //   amount: 200,
    //   date: "13-10-2024",
    //   description:
    //     "Hi, this is Nesharo, hello, how are youshflsh, farith suresh ganesh raja diljaz abhimanyu, Hi, this is Nesharo, hello, how are youshflsh, Hi, this is Nesharo",
    // },
    // {
    //   id: 300,
    //   category: "Shopping",
    //   amount: 200,
    //   date: "13-10-2024",
    //   description:
    //     "Hi, this is Nesharo, hello, how are youshflsh, farith suresh ganesh raja diljaz abhimanyu, Hi, this is Nesharo, hello, how are youshflsh, Hi, this is Nesharo",
    // },
  ]);

  const [todayExpenses, setTodayExpenses] = useState<Expense[]>([]);
  const [thisMonthExpenses, setThisMonthExpenses] = useState<Expense[]>([]);
  const [pastExpenses, setPastExpenses] = useState<Expense[]>([]);

  const categorizeExpenses = () => {
    const today = new Date();
    const todayExpenses: Expense[] = [];
    const thisMonthExpenses: Expense[] = [];
    const pastExpenses: Expense[] = [];

    const parseDate = (dateString: string) => {
      const [day, month, year] = dateString.split("-").map(Number);
      return new Date(year, month - 1, day);
    };

    expenses.forEach((expense) => {
      const expenseDate = parseDate(expense.date);
      if (
        expenseDate.getDate() === today.getDate() &&
        expenseDate.getMonth() === today.getMonth() &&
        expenseDate.getFullYear() === today.getFullYear()
      ) {
        todayExpenses.push(expense);
      } else if (
        expenseDate.getMonth() == today.getMonth() &&
        expenseDate.getFullYear() === today.getFullYear()
      ) {
        thisMonthExpenses.push(expense);
      } else {
        pastExpenses.push(expense);
      }
    }); // these brackets play a crucial role in the code's functionality, they caused me a huge headache while I was coding 😂
    setTodayExpenses([...todayExpenses].reverse());
    setThisMonthExpenses([...thisMonthExpenses].reverse());
    setPastExpenses([...pastExpenses].reverse());
    // "})" don't forget these line Nesharo
  };

  useEffect(() => {
    categorizeExpenses();
  }, [expenses]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 70,
          paddingBottom: 20,
          paddingTop: 5,
          backgroundColor: "#f8f9fa",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "rubik-medium",
        },
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === "Dashboard") {
            iconSource = DashboardIcon;
          } else if (route.name === "Expenses") {
            iconSource = ExpensesIcon;
          } else if (route.name === "Developer") {
            iconSource = DeveloperIcon;
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? "blue" : "gray",
              }}
              resizeMode="contain"
            />
          );
        },
      })}
    >
      <Tab.Screen name="Expenses">
        {() => <ExpensesTab expenses={expenses} setExpenses={setExpenses} />}
      </Tab.Screen>
      <Tab.Screen name="Dashboard">
        {() => (
          <DashboardTab
            todayExpenses={todayExpenses}
            thisMonthExpenses={thisMonthExpenses}
            pastExpenses={pastExpenses}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Developer">
        {() => <DeveloperTab expenses={expenses} setExpenses={setExpenses} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
