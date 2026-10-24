import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.light },
  content: { padding: 16 },
  heading: { fontFamily: 'Poppins_700Bold', fontSize: 20, color: COLORS.text, marginBottom: 4 },
  sub: { fontFamily: 'Poppins_400Regular', fontSize: 13, color: COLORS.gray, marginBottom: 16 },
  label: { fontFamily: 'Poppins_700Bold', fontSize: 13, color: COLORS.text, marginBottom: 6 },
  inputBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderWidth: 1.5, borderColor: COLORS.border, borderRadius: 14, paddingHorizontal: 14, marginBottom: 14 },
  input: { flex: 1, padding: 13, fontFamily: 'Poppins_400Regular', fontSize: 14 },
  addressInput: { height: 80, textAlignVertical: 'top' },
  paymentBox: { backgroundColor: '#fff', borderRadius: 14, padding: 14, flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderColor: COLORS.button },
  paymentText: { flex: 1, fontFamily: 'Poppins_700Bold', fontSize: 14, marginLeft: 12, color: COLORS.text },
  amountBox: { backgroundColor: '#fff', borderRadius: 14, padding: 16, flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
  amountLabel: { fontFamily: 'Poppins_700Bold', fontSize: 15, color: COLORS.maroon },
  amountValue: { fontFamily: 'Poppins_700Bold', fontSize: 15, color: COLORS.maroon },
  button: { backgroundColor: COLORS.button, margin: 16, marginBottom: 24, padding: 16, borderRadius: 14, alignItems: 'center' },
  buttonText: { fontFamily: 'Poppins_700Bold', color: '#fff', fontSize: 18 },
});

export default styles;
