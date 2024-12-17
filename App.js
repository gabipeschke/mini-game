import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StartGameScreen, GameScreen, GameOverScreen } from "./screens";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function handleUserNumberChange(enteredNumber) {
    setUserNumber(enteredNumber);
    setGameIsOver(false);
  }

  function handleGameOver() {
    setGameIsOver(true);
  }

  function getScreen() {
    if (gameIsOver && userNumber) {
      return <GameOverScreen />;
    }

    if (userNumber) {
      return <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;
    }

    return <StartGameScreen onPickNumber={handleUserNumberChange} />;
  }

  return (
    <LinearGradient
      colors={[COLORS.PURPLE[400], COLORS.YELLOW[300]]}
      style={styles.rootScreen}
    >
      <ImageBackground
        style={styles.rootScreen}
        resizeMode="cover"
        source={require("./assets/images/background.png")}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{getScreen()}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.3,
  },
});
