import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const Styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    width: width,
    height: height,
    flex: 1,
    backgroundColor: '#519',
  },
  boxUser: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  userLogos: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    color: '#0ff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  userPhone: {
    color: '#fff',
  },
  body: {
    flex: 1,
    marginTop: 10,
    padding: 10,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderWidth: 1,
    borderColor: '#0ff',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  itemName: {
    color: '#000',
  },
  itemNumber: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#00f',
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    marginVertical: 5,
  },
  itemArticle: {
    borderColor: '#00f',
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderRadius: 5,
    marginVertical: 5,
  },
  itemPrice: {
    textAlign: 'right',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#3399FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'blue',
    marginVertical: 10,
  },
  buttonAnnuler: {
    backgroundColor: '#f44',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'blue',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: width - 40,
    height: height / 2,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#3399FF',
    borderBottomWidth: 1,
  },
  boxConfirmation: {
    width: '100%',
  },
  devise: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    textAlign: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 35,
    marginHorizontal: 2.5,
    borderColor: '#519',
  },
  deviseTitle: {
    color: '#519',
    fontSize: 10,
  },
  itemDevices: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Styles;
