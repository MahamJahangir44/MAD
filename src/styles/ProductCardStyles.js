import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

const styles = StyleSheet.create({
  card: { flex: 1, backgroundColor: COLORS.card, borderRadius: 16, padding: 12, margin: 8, elevation: 4, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 6, shadowOffset: { width: 0, height: 3 } },
  image: { height: 110, width: '100%', borderRadius: 14 },
  iconBox: { backgroundColor: '#D98585', alignItems: 'center', justifyContent: 'center' },
  name: { fontFamily: 'Poppins_400Regular', fontSize: 13, color: COLORS.text, marginTop: 8, height: 40 },
  priceRow: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' },
  oldPrice: { fontFamily: 'Poppins_400Regular', fontSize: 12, color: COLORS.gray, textDecorationLine: 'line-through', marginRight: 6 },
  sale: { fontFamily: 'Poppins_700Bold', fontSize: 10, color: COLORS.red },
  price: { fontFamily: 'Poppins_700Bold', fontSize: 15, color: COLORS.maroon },
});

export default styles;
