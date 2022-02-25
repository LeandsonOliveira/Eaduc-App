import React, { useCallback } from "react";
import { View, Text, Image, StatusBar, Linking, Alert } from 'react-native';

import IllustrationImg from '../../assets/illustration.png'
import { styles } from "./styles";
import { ButtonIcon } from "../../components/Buttonicon";
import { LinearGradient } from "expo-linear-gradient";

export function SignIn() {
  const eaducURL = "https://moodle.youeduc.com.br/moodle/login/index.php";
  const handlePress = useCallback(async () => {

    const supported = await Linking.canOpenURL(eaducURL);

    if (supported) {
      await Linking.openURL(eaducURL);
    } else {
      Alert.alert(`Não foi possivel acessar: ${eaducURL}`);
    }
  }, [eaducURL]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors= {['#87CFE0', '#FFFFFF']}
      >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
        <Image
          style={styles.image}
          source={IllustrationImg}
          resizeMode="stretch"
        />
      <View style={styles.content}>
        <ButtonIcon title="Acessar Plataforma"
          activeOpacity={0.3}
          onPress={handlePress}
          />
      </View>
    </LinearGradient>
    </View>
  )
}