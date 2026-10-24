import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.light },
  content: { padding: 16 },
  image: { width: '100%', height: 280, borderRadius: 20, backgroundColor: '#fff' },
  iconBox: { backgroundColor: '#D98585', alignItems: 'center', justifyContent: 'center' },
  name: { fontFamily: 'Poppins_700Bold', fontSize: 22, color: COLORS.text, marginTop: 16 },
  priceRow: { flexDirection: 'row', alignItems: 'center' },
  oldPrice: { fontFamily: 'Poppins_400Regular', fontSize: 16, color: COLORS.gray, textDecorationLine: 'line-through', marginRight: 10 },
  sale: { fontFamily: 'Poppins_700Bold', fontSize: 13, color: COLORS.red },
  price: { fontFamily: 'Poppins_700Bold', fontSize: 24, color: COLORS.maroon, marginVertical: 6 },
  heading: { fontFamily: 'Poppins_700Bold', fontSize: 16, marginTop: 10, color: COLORS.text },
  description: { fontFamily: 'Poppins_400Regular', fontSize: 14, color: '#555', marginTop: 4, lineHeight: 22 },
  button: { backgroundColor: COLORS.button, margin: 16, padding: 16, borderRadius: 14, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  buttonText: { fontFamily: 'Poppins_700Bold', color: '#fff', fontSize: 17, marginLeft: 8 },
});

export default styles;
