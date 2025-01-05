import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import { useEffect, useState } from "react";
const Abinesh = require("@/assets/images/abinesh.jpeg");
const LinkedIn = require("@/assets/images/SocialMediaIcons/linkedin.png");
const GitHub = require("@/assets/images/SocialMediaIcons/github.png");
const Instagram = require("@/assets/images/SocialMediaIcons/instagram.png");
const FaceBook = require("@/assets/images/SocialMediaIcons/facebook.png");
const LeetCode = require("@/assets/images/SocialMediaIcons/leetcode.png");
const GFG = require("@/assets/images/SocialMediaIcons/gfg.png");

const qualities = [
  "Full-Stack Website Developer",
  "Cross-Platform App Developer",
  "Machine Learning Engineer",
  "CS Undergraduate Student",
  "100+ LeetCode Challenge Solver",
  "MERN Stack Developer",
  "CyberSecurity Enthusiast",
  "Top 3 Institute Rank @ GFG",
  "Avid Bibliophile",
  "Finance Buff",
];

const DeveloperTab = () => {
  const [currentQuality, setCurrentQuality] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuality((prev) => (prev + 1) % qualities.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView className=" h-full bg-white">
      <ScrollView>
        <View className="flex flex-col items-center mt-8 gap-3">
          <Image source={Abinesh} className=" size-64 rounded-full" />
          <View>
            <Text className=" font-rubik-bold text-3xl text-center">
              Abinesh @ Nesharo
            </Text>
            <Animatable.Text
              animation="shake"
              duration={500}
              className=" text-center font-rubik-regular text-xl text-slate-600"
              key={currentQuality}
            >
              {qualities[currentQuality]}
            </Animatable.Text>
          </View>
        </View>
        {/* quote */}
        <View className=" mx-10 mt-3 items-center bg-sky-400 p-5 rounded-2xl">
          <Text className="font-rubik-regular text-white tracking-wider text-center">
            You're not a real programmer until you've spent at least a day
            pulling your hair out over a bug that should have been easy to fix
          </Text>
        </View>
        {/* social media */}
        <View className=" mt-6">
          <Text className=" text-center font-rubik-bold text-2xl">
            Catch Nesharo on
          </Text>
          {/* Icon Links */}
          <View className=" flex flex-col w-4/6 mx-20 mt-3 gap-2 ">
            <View className=" flex flex-row justify-between ">
              <TouchableOpacity
                className=" flex flex-row gap-1 items-center"
                onPress={() =>
                  Linking.openURL(
                    "https://www.linkedin.com/in/abineshsrinivasan/"
                  )
                }
              >
                <Image source={LinkedIn} className=" size-7" />
                <Text className=" font-rubik-medium tracking-wide text-lg text-[#0A66C2]">
                  LinkedIn
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className=" flex flex-row gap-1 items-center"
                onPress={() =>
                  Linking.openURL("https://github.com/Abinesh-Srinivasan")
                }
              >
                <Image source={GitHub} className=" size-7" />
                <Text className=" font-rubik-medium tracking-wide text-lg text-[#000000]">
                  GitHub
                </Text>
              </TouchableOpacity>
            </View>
            <View className=" flex flex-row justify-between ">
              <TouchableOpacity
                className=" flex flex-row gap-1 items-center"
                onPress={() =>
                  Linking.openURL("https://www.instagram.com/itsnesharodq/")
                }
              >
                <Image source={Instagram} className=" size-7" />
                <Text className=" font-rubik-medium tracking-wide text-lg text-[#E1306C]">
                  Instagram
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className=" flex flex-row gap-0 items-center"
                onPress={() =>
                  Linking.openURL(
                    "https://www.facebook.com/profile.php?id=61553094886881"
                  )
                }
              >
                <Image source={FaceBook} className=" size-7" />
                <Text className=" font-rubik-medium tracking-wide text-lg text-[#0165E1]">
                  FaceBook
                </Text>
              </TouchableOpacity>
            </View>
            <View className=" flex flex-row justify-between ">
              <TouchableOpacity
                className=" flex flex-row gap-1 items-center"
                onPress={() =>
                  Linking.openURL("https://leetcode.com/u/abin58113/")
                }
              >
                <Image source={LeetCode} className=" size-7" />
                <Text className=" font-rubik-medium tracking-wide text-lg text-amber-500">
                  LeetCode
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className=" flex flex-row gap-1 items-center"
                onPress={() =>
                  Linking.openURL(
                    "https://www.geeksforgeeks.org/user/abinesh_srinivasan/"
                  )
                }
              >
                <Image source={GFG} className=" size-7" />
                <Text className=" font-rubik-medium tracking-wide text-lg text-green-700">
                  GFG
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DeveloperTab;
