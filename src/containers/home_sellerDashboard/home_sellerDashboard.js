import React, { Fragment } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components';
import { TitleComponent } from '../../components/components';

const Home = () => {

    return (
        <Fragment>
            <TitleBarWrapper>
                <TitleComponent 
                text='Home'
                />
            </TitleBarWrapper>
        </Fragment>
    )
}

const TitleBarWrapper = styled.View`
    flex: 1;
    padding-left: 10px;
    background-color: green;
`
const ListWrapper = styled.View`
    flex: 2;
    background-color: yellow;

`

export default Home;