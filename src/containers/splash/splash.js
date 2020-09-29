import React, {Fragment} from 'react';
import styled from 'styled-components';
import logo from '@assets/image/logo1.jpg';

const App = ({navigation}) => {

	return (
		<Fragment>
			<BackgroundColor>
				<Touchable onPress={() => navigation.navigate('Landing')} >
					<Logo source={logo}/>
				</Touchable>
			</BackgroundColor>
		</Fragment>
	);
};

const BackgroundColor = styled.View`
	background-color: #121C2F;
	flex: 1;
`;

const Touchable = styled.TouchableOpacity`
	background-color: white;
	margin: auto;
`;

const Logo = styled.Image`
	margin: auto;
	height: 200px;
	width: 200px;
`;


export default App;
