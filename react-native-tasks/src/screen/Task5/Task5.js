import { useRef } from 'react';
import { Button, Text, TextInput } from 'react-native'

function Task5() {
    const result = useRef({
        email: '',
        password: ''
    })

    function changeInp(name, value) {
        result.current = ({ ...result.current, [name]: value })
    }

    function clickButton() {
        try {
            if (!/^[A-z0-9\.\+\_\-]+@[a-z\.]+\.{1}[a-z]{2,4}$/gm.test(result.current.email)) throw new Error('Email is invalid')
            if (result.current.password.length < 8) throw new Error('The password is too short')

            console.log('Success');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (<>
        <Text>Реализуйте форму для ввода почты и пароля. По клику на кнопку получите данные из полей ввода с использованием useRef.
            Напишите для них валидацию. В случае успешного ввода отобразите в console.log сообщение "success".</Text>

        <TextInput placeholder='email' onChangeText={(value) => changeInp('email', value)}></TextInput>
        <TextInput placeholder='password' onChangeText={(value) => changeInp('password', value)}></TextInput>
        <Button onPress={clickButton} title='Click me'></Button>
    </>);
}

export default Task5;