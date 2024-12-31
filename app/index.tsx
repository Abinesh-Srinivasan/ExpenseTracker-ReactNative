import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, View } from "react-native";

const DashboardIcon= require("@/assets/images/TabIcons/dashboard.png");
const ExpensesIcon= require("@/assets/images/TabIcons/expenses.png");
const DeveloperIcon= require("@/assets/images/TabIcons/user.png");


const DashboardTab = () => (
  <View className=" h-full bg-white">
    <Text className=" font-rubik-bold">Dashboard</Text>
  </View>
);
const ExpenseTab = () => (
  <View>
    <Text>Expense</Text>
  </View>
);
const DeveloperTab = () => (
  <View>
    <Text>Developer</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function Index() {
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
          fontFamily:"rubik-medium"
        },
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === "Dashboard") {
            iconSource = DashboardIcon;
          } else if (route.name === "Expense") {
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
      <Tab.Screen name="Dashboard" component={DashboardTab} />
      <Tab.Screen name="Expense" component={ExpenseTab} />
      <Tab.Screen name="Developer" component={DeveloperTab} />
    </Tab.Navigator>
  );
}
