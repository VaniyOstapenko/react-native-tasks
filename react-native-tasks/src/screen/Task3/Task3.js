import { useState } from 'react';
import { Button, Text, View } from 'react-native'

function Task3() {
    const [count, setCount] = useState(100)

    return (<>
        <Text>Cоздайте компонент, который предоставляет две кнопки: "Увеличить" и "Уменьшить". При нажатии на эти кнопки значение font-size изменяется соответствующим образом на+/–1px (useState).</Text>

        <Button onPress={() => setCount(count + 1)} title='+1'></Button>
        <Button onPress={() => setCount(count - 1)} title='-1'></Button>
        <Text style={{ fontSize: count }}>Hi</Text>
    </>);
}

export default Task3;