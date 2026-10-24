import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.light },
  content: { padding: 16 },
  heading: { fontFamily: 'Poppins_700Bold', fontSize: 20, marginBottom: 10, color: COLORS.text },
  itemRow: { backgroundColor: '#fff', borderRadius: 14, padding: 14, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  itemName: { flex: 1, fontFamily: 'Poppins_400Regular', fontSize: 13, color: COLORS.text },
  itemPrice: { fontFamily: 'Poppins_700Bold', fontSize: 13, color: COLORS.text },
  box: { backgroundColor: '#fff', borderRadius: 16, padding: 16, marginTop: 8 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 6 },
  label: { fontFamily: 'Poppins_400Regular', fontSize: 14, color: COLORS.text },
  value: { fontFamily: 'Poppins_700Bold', fontSize: 14, color: COLORS.text },
  discountValue: { fontFamily: 'Poppins_400Regular', fontSize: 14, color: COLORS.green },
  finalRow: { marginTop: 10 },
  finalLabel: { fontFamily: 'Poppins_700Bold', fontSize: 15, color: COLORS.maroon },
  finalValue: { fontFamily: 'Poppins_700Bold', fontSize: 15, color: COLORS.maroon },
  noteGreen: { fontFamily: 'Poppins_400Regular', fontSize: 13, marginTop: 14, textAlign: 'center', color: COLORS.green },
  noteOrange: { fontFamily: 'Poppins_400Regular', fontSize: 13, marginTop: 14, textAlign: 'center', color: '#B8691A' },
  button: { backgroundColor: COLORS.button, margin: 16, marginBottom: 24, padding: 16, borderRadius: 14, alignItems: 'center' },
  buttonText: { fontFamily: 'Poppins_700Bold', color: '#fff', fontSize: 18 },
});

export default styles;
