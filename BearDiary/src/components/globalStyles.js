import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: 'white',
  },
  sideBar: {
    borderWidth:1,
    position:'absolute',
    bottom:0,
    alignSelf:'flex-end'
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  inputStyle: {
      flex: 1,
      color: 'black',
      paddingLeft: 30,
      paddingRight: 30,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: '#dadae8',
  },
  MarginStyle: {
      margin: 5,
  },
  buttonStyle: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  titleTextStyle: {
    color: '#000000',
    paddingVertical: 10,
    fontSize: 20,
  },

  TopBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  MidBody: {
    flex: 6,
    justifyContent: 'center',
  },
  BotBody: {
    flex: 1.25,
    flexDirection: 'row',
  },
  TopCon0: {
    width: '5%',
  },
  TopCon1: {
    width: '25%',
  },
  TopCon2: {
    width: '50%',
  },
  MidCon: {
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
  },
    image2: {
    width: 70,
    height: 70,
  },
    image3: {
    width: 160,
    height: 40,
  },
  iconBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});