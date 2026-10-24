import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.light },
  list: { padding: 16 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.light },
  emptyText: { fontFamily: 'Poppins_400Regular', fontSize: 16, color: COLORS.gray, marginTop: 10 },
  item: { backgroundColor: '#fff', borderRadius: 16, padding: 12, flexDirection: 'row', alignItems: 'center', marginBottom: 16, elevation: 4, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 6, shadowOffset: { width: 0, height: 3 } },
  image: { width: 90, height: 85, borderRadius: 14 },
  iconBox: { backgroundColor: '#D98585', alignItems: 'center', justifyContent: 'center' },
  info: { flex: 1, marginLeft: 14 },
  name: { fontFamily: 'Poppins_400Regular', fontSize: 14, color: COLORS.text },
  price: { fontFamily: 'Poppins_700Bold', fontSize: 16, color: COLORS.maroon },
  qtyRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  qtyBtn: { width: 26, height: 26, borderRadius: 13, backgroundColor: COLORS.pink, alignItems: 'center', justifyContent: 'center' },
  qtyBtnText: { fontSize: 16, color: COLORS.text, fontWeight: 'bold' },
  qty: { marginHorizontal: 14, fontFamily: 'Poppins_700Bold', fontSize: 14 },
  footer: { backgroundColor: COLORS.light, paddingHorizontal: 16, paddingBottom: 20, paddingTop: 8 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  totalLabel: { fontFamily: 'Poppins_700Bold', fontSize: 17, color: COLORS.text },
  totalValue: { fontFamily: 'Poppins_700Bold', fontSize: 18, color: COLORS.maroon },
  button: { backgroundColor: COLORS.button, padding: 16, borderRadius: 14, alignItems: 'center' },
  buttonText: { fontFamily: 'Poppins_700Bold', color: '#fff', fontSize: 18 },
});

export default styles;
