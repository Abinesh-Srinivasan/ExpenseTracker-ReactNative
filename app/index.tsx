import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, View } from "react-native";

import DashboardTab from "./tabs/DashboardTab";
import ExpensesTab from "./tabs/ExpensesTab";
import DeveloperTab from "./tabs/DeveloperTab";
import { useState } from "react";

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
    {
      id: 0,
      category: "Food",
      amount: 150,
      date: "02-01-2025",
      description: "Hi, this is Nesharo",
    },
    {
      id: 10,
      category: "Food",
      amount: 150,
      date: "02-01-2025",
      description: "Hi, this is Nesharo",
    },
    {
      id: 100,
      category: "Food",
      amount: 150,
      date: "02-01-2025",
      description: "Hi, this is Nesharo",
    },
    {
      id: 2,
      category: "Travel",
      amount: 500,
      date: "01-01-2025",
      description: "Hi, this is Nesharo",
    },
    {
      id: 20,
      category: "Travel",
      amount: 500,
      date: "01-01-2025",
      description: "Hi, this is Nesharo",
    },
    {
      id: 200,
      category: "Travel",
      amount: 500,
      date: "01-01-2025",
      description: "Hi, this is Nesharo",
    },
    {
      id: 3,
      category: "Shopping",
      amount: 200,
      date: "13-10-2024",
      description:
        "Hi, this is Nesharo, hello, how are youshflsh, farith suresh ganesh raja diljaz abhimanyu, Hi, this is Nesharo, hello, how are youshflsh, Hi, this is Nesharo",
    },
    {
      id: 30,
      category: "Shopping",
      amount: 200,
      date: "13-10-2024",
      description:
        "Hi, this is Nesharo, hello, how are youshflsh, farith suresh ganesh raja diljaz abhimanyu, Hi, this is Nesharo, hello, how are youshflsh, Hi, this is Nesharo",
    },
    {
      id: 300,
      category: "Shopping",
      amount: 200,
      date: "13-10-2024",
      description:
        "Hi, this is Nesharo, hello, how are youshflsh, farith suresh ganesh raja diljaz abhimanyu, Hi, this is Nesharo, hello, how are youshflsh, Hi, this is Nesharo",
    },
  ]);

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
      <Tab.Screen name="Expenses">{
        ()=><ExpensesTab expenses={expenses} setExpenses={setExpenses} />
      }</Tab.Screen>
      <Tab.Screen name="Dashboard">{
        ()=><DashboardTab expenses={expenses} />
      }</Tab.Screen>
      <Tab.Screen name="Developer" component={DeveloperTab} />
    </Tab.Navigator>
  );
}
