import { Alert, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Card, PrimaryButton, Title, InstructionText } from "../components/ui";
import { generateRandomBetween } from "../utils/number";
import { useEffect, useState, useMemo } from "react";
import { NumberContainer } from "../components/screens/game";

let minBoundary = 1
let maxBoundary = 100

function GameScreen(props) {
	const initialValue = useMemo(()=> generateRandomBetween(minBoundary, maxBoundary, props.userNumber), [props.userNumber])
	const [currentGuess, setCurrentGuess] = useState(initialValue)

	function handleNextGuess(direction) {
		if (
			(direction === 'lower' && currentGuess < props.userNumber) ||
			(direction === 'greater' && currentGuess > props.userNumber) 
		) {
			Alert.alert('Dont lie!', 'You know this is wrong...', [{text: 'Sorry!', style: 'cancel'}])
			return
		}

		if (direction === 'lower') {
			maxBoundary = currentGuess
		} else {
			minBoundary = currentGuess + 1
		}

		const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
		setCurrentGuess(newRandomNumber)
	}

	useEffect(() => {
		if (currentGuess === props.userNumber) {
			props.onGameOver()
		}
	}, [currentGuess, props.userNumber, props.onGameOver])

  return (
    <View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>

			<Card>
				<InstructionText>Higher or lower?</InstructionText>
				
				<View style={styles.buttons}>
					<View style={styles.button}>
						<PrimaryButton onPress={() => handleNextGuess('greater')}>+</PrimaryButton>
					</View>

					<View style={styles.button}>
						<PrimaryButton onPress={() => handleNextGuess('lower')}>-</PrimaryButton>
					</View>
				</View>
			</Card>

			<View>
				<Text>LOGS</Text>
				</View>
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24
	},
	buttons: {
		flexDirection: 'row',
	},
	button: {
		flex: 1
	}
});
