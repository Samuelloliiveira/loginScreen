import { useEffect, useState } from 'react'
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  Keyboard
} from 'react-native'

import { styles } from './styles'
import Google from '../assets/google.svg'
import Facebook from '../assets/facebook.svg'

export function Home() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }))
  const [opacity] = useState(new Animated.Value(0))
  const [logo] = useState(new Animated.ValueXY({ x: 200, y: 200 }))

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    Keyboard.addListener('keyboardDidHide', keyboardDidHide)

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 30,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      })
    ]).start()
  }, [])

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 55,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 65,
        duration: 100,
        useNativeDriver: false
      }),
    ]).start()
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 200,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 200,
        duration: 100,
        useNativeDriver: false
      }),
    ]).start()
  }

  return (
    /**Este componente ajustará automaticamente sua altura, posição 
     * ou preenchimento inferior com base na altura do teclado */
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require('../assets/logo.png')}
        />
      </View>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false} //Desativando correção automática
          onChangeText={() => { }}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => { }}
        />

        <TouchableOpacity
          style={styles.btnSubmit}
          activeOpacity={0.6}
        >
          <Text style={styles.submitText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.signInWitch}>Conectar com</Text>

        <View style={styles.buttonsSignInWith}>
          <TouchableOpacity
            style={styles.btnGoogle}
            activeOpacity={0.6}
          >
            <Google width={25} height={25} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnFacebook}
            activeOpacity={0.6}
          >
            <Facebook width={25} height={25} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.btnRegister}
          activeOpacity={0.6}
        >
          <Text style={styles.registerText}>Criar conta</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  )
}
