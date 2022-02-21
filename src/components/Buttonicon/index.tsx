import React from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

import LogIn from '../../assets/log-in.png';
import { styles } from "../../components/Buttonicon/styles";

type Props = TouchableOpacityProps &{
  title: string;
}

export function ButtonIcon({title, ...rest} : Props){
  return(
    <TouchableOpacity style = {styles.container}
    {...rest}
    >
      <View style = {styles.iconWrapper}>
        <Image source={LogIn} style  = {styles.icon}/>
      </View>
      <Text style = {styles.title}>
        { title }
      </Text>
    </TouchableOpacity>  
  );
}