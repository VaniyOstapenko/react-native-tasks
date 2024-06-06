import { useEffect, useRef } from 'react';
import { Button, Text, TextInput } from 'react-native'
import axios from 'axios'

function Task8() {
    const inputRef = useRef()
    const textRef = useRef()

    async function request() {
        const response = await axios.get(`http://numbersapi.com/${inputRef.current.value}`)
        textRef.current.textContent = response.data;
    }

    return (<>
        <Text>По клику на кнопку получите числовое value инпута с использованием useRef. Отправьте запрос к http://numbersapi.com/:id
            (где id – значение input). Отобразите результат в консоли.</Text>

        <TextInput placeholder='add number' style={{ border: '1px solid black' }} ref={inputRef} />
        <Button onPress={() => request()} title='Click me'></Button>
        <Text ref={textRef}></Text>
    </>);
}

export default Task8;