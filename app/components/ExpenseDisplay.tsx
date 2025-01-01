import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";

const editIcon = require("@/assets/images/ExpenseCardIcons/edit.png");
const deleteIcon = require("@/assets/images/ExpenseCardIcons/delete.png");

const ExpenseDisplay = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupItem, setPopupItem] = useState<{
    category: string;
    amount: number;
    date: string;
    id: number;
    description: string;
  } | null>(null);

  const exampleExpenses = [
    {
      id: 0,
      category: "Food",
      amount: 150,
      date: "2024-12-30",
      description: "Hi, this is Nesharo",
    },
    {
      id: 2,
      category: "Travel",
      amount: 500,
      date: "2024-12-28",
      description: "Hi, this is Nesharo",
    },
    {
      id: 3,
      category: "Shopping",
      amount: 200,
      date: "2024-12-25",
      description:
        "Hi, this is Nesharo, hello, how are youshflsh, farith suresh ganesh raja diljaz abhimanyu, Hi, this is Nesharo, hello, how are youshflsh, Hi, this is Nesharo",
    },
    {
      id: 5,
      category: "Shopping",
      amount: 200,
      date: "2024-12-25",
      description:
        "Hi, this is Nesharo, hello, how are youshflsh, farith suresh ganesh raja diljaz abhimanyu, Hi, this is Nesharo, hello, how are youshflsh, Hi, this is Nesharo",
    },
    {
      id: 4,
      category: "Shopping",
      amount: 200,
      date: "2024-12-25",
      description:
        "Hi, this is Nesharo, hello, how are youshflsh, farith suresh ganesh raja diljaz abhimanyu, Hi, this is Nesharo, hello, how are youshflsh, Hi, this is Nesharo",
    },
    {
      id: 7,
      category: "Shopping",
      amount: 200,
      date: "2024-12-25",
      description:
        "Hi, this is Nesharo, hello, how are youshflsh, farith suresh ganesh raja diljaz abhimanyu, Hi, this is Nesharo, hello, how are youshflsh, Hi, this is Nesharo",
    },
    {
      id: 8,
      category: "Shopping",
      amount: 200,
      date: "2024-12-25",
      description:
        "Hi, this is Nesharo, hello, how are youshflsh, farith suresh ganesh raja diljaz abhimanyu, Hi, this is Nesharo, hello, how are youshflsh, Hi, this is Nesharo",
    },
    {
      id: 9,
      category: "Shopping",
      amount: 200,
      date: "2024-12-25",
      description:
        "Hi, this is Nesharo, hello, how are youshflsh, farith suresh ganesh raja diljaz abhimanyu, Hi, this is Nesharo, hello, how are youshflsh, Hi, this is Nesharo",
    },
  ];

  type Expense = {
    id: number;
    category: string;
    amount: number;
    date: string;
    description: string;
  };

  const handlePopupOpen = (item: Expense) => {
    setShowPopup(true);
    setPopupItem(item);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setPopupItem(null);
  };

  const renderExpenseCard = ({ item }: { item: Expense }) => {
    let date = item.date;
    item.date = date.split("-").reverse().join("-");
    return (
      <View className=" flex flex-row mt-5 border border-t-white border-l-white border-r-white border-b-gray-300 px-6 pb-4 items-center justify-between">
        {/* Category,Amount,Date */}
        <View className=" flex flex-col">
          <Text className=" font-rubik-bold text-2xl text-red-500 tracking-wide">
            {item.category}
          </Text>
          <Text className=" text-blue-500 text-lg font-rubik-semibold">
            ₹.{item.amount}
          </Text>
          <Text className=" tracking-wider font-rubik-semibold">
            {item.date}
          </Text>
        </View>
        {/* Buttons */}
        <View className=" flex flex-row items-center gap-3">
          <TouchableOpacity
            className="border border-white px-3 py-1 rounded-lg bg-green-500"
            onPress={() => handlePopupOpen(item)}
          >
            <Text className=" font-rubik-regular tracking-wide text-white">
              Read
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="border border-white px-3 py-1 rounded-lg bg-orange-500">
            <Image source={editIcon} className=" size-6" />
          </TouchableOpacity>
          <TouchableOpacity className="border border-white px-3 py-1 rounded-lg bg-red-500">
            <Image source={deleteIcon} className=" size-6" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View className=" px-6 mt-3">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={exampleExpenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderExpenseCard}
      />
      {/* popup card */}
      {showPopup && (
        <View className=" absolute top-56 bottom-56 left-20 bg-white h-80 w-9/12 px-5 py-8 shadow-inherit shadow-lg flex flex-col justify-between rounded-2xl">
          <View className=" flex flex-col gap-3">
            <Text className=" font-rubik-bold text-pink-600">
              {popupItem?.date}
            </Text>
            <View className=" flex  flex-row justify-between">
              <Text className=" font-rubik-semibold text-2xl text-violet-600">
                {popupItem?.category}
              </Text>
              <Text className=" font-rubik-semibold text-blue-600 text-lg">
                ₹.{popupItem?.amount}
              </Text>
            </View>
            <Text className=" font-rubik-regular leading-6 tracking-wide text-gray-700">
              {popupItem?.description}
            </Text>
          </View>
          <TouchableOpacity onPress={handlePopupClose}>
            <Text className=" text-center font-rubik-semibold text-red-600 text-lg">
              Close
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default ExpenseDisplay;
