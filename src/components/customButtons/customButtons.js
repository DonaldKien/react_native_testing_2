import React from 'react';
import { Title, TextInputLabel, TextInputBox, InputText, Link, ButtonClick, ButtonText, ButtonClick2, TextInputBoxLarge, Subtitle } from '../../styling/styling';


export const ButtonComponent = props => {
    return (
        <ButtonClick inputColor={props.inputColor}>
            <ButtonText onPress={props.onPress}>{props.text}</ButtonText>
        </ButtonClick>
    )
}

export const ButtonSmallComponent = props => {
    return (
        <ButtonClick2 onPress={props.onPress}>
            <ButtonText>{props.text}</ButtonText>
        </ButtonClick2>
    )
}