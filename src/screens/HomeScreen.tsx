import React from 'react';
import { useDispatch } from 'react-redux';

//Components
import { CenterContentContainer, CustomButton } from '../components';

//Screens
import { BaseScreen } from './';

//Resources
import { ButtonPaddingHorizontal  } from '../resources/style/Buttons'
import { LOG_OUT } from '../resources/translations/translationKeyConstants';

//Services
import { logOut } from '../services/redux/auth';

export const HomeScreen = () => {

    const dispatch = useDispatch()

    return (
        <BaseScreen>
            <CenterContentContainer>
                <CustomButton
                    size='medium'
                    appearance='filled'
                    status='primary'
                    activeOpacity={0.8}
                    buttonText={LOG_OUT}
                    paddingHorizontal={ButtonPaddingHorizontal.PADDING_LARGE}
                    // style={ styles.loginButton }
                    onPress={() => dispatch (logOut()) }
                />
            </CenterContentContainer>
        </BaseScreen>
    )
};