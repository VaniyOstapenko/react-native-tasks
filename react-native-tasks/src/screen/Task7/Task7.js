import { useEffect, useRef } from 'react';
import { Button, Text, TextInput } from 'react-native'
import axios from 'axios'

function Task7() {
    const textRef = useRef()

    async function request() {
        const response = await axios.get('https://api.ipify.org/?format=json')
        textRef.current.textContent = response.data.ip
    }

    useEffect(() => {
        request()
    }, [])
    return (<>
        <Text>Используйте useRef для хранения ссылки на тег h1 в HTML. Ваша задача: при первичном рендеринге отправить запрос
            на https://api.ipify.org/?format=json. Отобразите результат в textContent элемента h1.</Text>

        <Text ref={textRef}></Text>
    </>);
}

export default Task7;