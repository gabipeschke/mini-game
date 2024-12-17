import { TextInput, View } from "react-native";
import { Card, PrimaryButton, Title, InstructionText} from "../components/ui";
import { StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { COLORS } from '../constants/colors'

function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function handleResetPress() {
    setEnteredNumber("");
  }

  function handleConfirmPress() {
    const numberValue = parseInt(enteredNumber);

    if (!numberValue || numberValue <= 0 || numberValue > 99) {
      Alert.alert("Invalid number!", "Number must be between 1 and 99", [
        { text: "Ok", style: "destructive", onPress: handleResetPress },
      ]);
      return;
    }

    props.onPickNumber(numberValue)
  }

  function handleInputChange(enteredText) {
    setEnteredNumber(enteredText);
  }

	return (
		<View style={styles.rootContainer}>
			<Title>Guess My Number</Title>

			<Card>
				<InstructionText>Enter a number</InstructionText>
				<TextInput
					style={styles.input}
					maxLength={2}
					keyboardType="number-pad"
					autoCapitalize="none"
					autoCorrect={false}
					value={enteredNumber}
					onChangeText={handleInputChange}
				/>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={handleResetPress}>Reset</PrimaryButton>
					</View>
					<View style={styles.buttonContainer}>
						<PrimaryButton onPress={handleConfirmPress}>Confirm</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
    
  );
}
export default StartGameScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		marginTop: 100,
		alignItems: 'center'
	},
  input: {
    height: 60,
    width: 60,
    fontSize: 32,
    borderBottomColor: COLORS.YELLOW300,
    borderBottomWidth: 2,
    color: COLORS.YELLOW300,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
