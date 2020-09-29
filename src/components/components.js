import React from 'react';
import { Title, TextInputLabel, TextInputBox, InputText, Link, ButtonClick, ButtonText, ButtonClick2, TextInputBoxLarge, Subtitle } from '../styling/styling';

export const TextInputBoxComponent = props => {
    const { boxFocus, checkError, text, onBlur, onFocus, onChangeText, value, keyboardType, textContentType, secureTextEntry } = props;
    return (
        <TextInputBox boxFocus={boxFocus}>
            <TextInputLabel checkError={checkError}>{text}</TextInputLabel>
            <InputText 
                onBlur={onBlur}
                onFocus={onFocus}
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
                textContentType={textContentType}
                secureTextEntry={secureTextEntry}
            />
        </TextInputBox>
    )
}

export const ButtonComponent = props => {
    return (
        <ButtonClick inputColor={props.inputColor}>
            <ButtonText onPress={props.onPress}>{props.text}</ButtonText>
        </ButtonClick>
    )
}

export const LinkComponent = props => {
    return (
        <Link inputColor={props.inputColor} onPress={props.onPress}>
            {props.text}
        </Link>
    )
}

export const TitleComponent = props => {
    return (
        <Title inputColor={props.inputColor}>{props.text}</Title>
    )
}

export const ButtonSmallComponent = props => {
    return (
        <ButtonClick2 onPress={props.onPress}>
            <ButtonText>{props.text}</ButtonText>
        </ButtonClick2>
    )
}

export const TextInputBoxAreaComponent = props => {
    return (
        <TextInputBoxLarge>
            <TextInputLabel>{props.text}</TextInputLabel>
                <InputText 
                    multiline={props.multiline} 
                    numberOfLines={props.numberOfLines}
                />
        </TextInputBoxLarge>
    )
}

export const SubtitleComponent = props => {
    return (
        <Subtitle>{props.text}</Subtitle>
    )
}