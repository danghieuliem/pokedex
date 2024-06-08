import { CGray, CPrimary } from '@/constants/Colors'
import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
  mainView: {
    backgroundColor: CPrimary,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    gap: 24,
  },
  header: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    gap: 12,
  },
  logo: { height: 32, width: 146 },
  groupFilter: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  inputFilter: {
    flex: 1,
    minWidth: 100,
    backgroundColor: CGray.white,
    borderRadius: 15,
    height: 32,
    paddingLeft: 12,
    shadowColor: CGray.dark,
  },
  btnFilter: {
    backgroundColor: CGray.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    width: 32,
    borderRadius: 24,
    elevation: 3,
  },
  btnText: {
    color: CPrimary,
    fontSize: 20,
  },
  viewList: {
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 6,
    paddingTop: 12,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: CGray.white,
    flex: 1,
  },
  visualList: {
    borderColor: 'black',
    display: 'flex',
  },
  groupItems: {
    display: 'flex',
    flexDirection: 'row',
  },
  listItem: {
    width: '33.33%',
    display: 'flex',
    alignItems: 'center',
  },
})
