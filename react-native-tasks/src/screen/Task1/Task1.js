import { useState } from 'react';
import { Button, Text, TextInput } from 'react-native'

function Task1() {
    const [inp, setInp] = useState({
        email: '',
        password: ''
    })

    function changeInput(name, value) {
        setInp({ ...inp, [name]: value })
    }

    function clickButton() {
        console.log(inp);
    }
    return (<>
        <Text>Реализуйте форму для ввода почты и пароля. По клику на кнопку получите данные из полей ввода с использованием useState.
            Напишите для них валидацию. В случае успешного ввода отобразите в console.log сообщение "success".</Text>

        <TextInput placeholder='email' onChangeText={(value) => changeInput('email', value)}></TextInput>
        <TextInput placeholder='password' onChangeText={(value) => changeInput('password', value)}></TextInput>
        <Button title='Click me' onPress={clickButton}></Button>
    </>);
}

export default Task1;