import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121214',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 65,
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit: {
    backgroundColor: '#f05f31',
    height: 45,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
  },
  signInWitch: {
    color: '#fff',
    fontSize: 16,
    marginTop: 14,
  },
  btnRegister: {
    marginTop: 14,
  },
  buttonsSignInWith: {
    width: '90%',
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnGoogle: {
    backgroundColor: '#4285F4',
    height: 45,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  btnFacebook: {
    backgroundColor: '#3b5998',
    height: 45,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  }
})
