import { useRef } from 'react';
import { Button, Text, View } from 'react-native'

function Task6() {
    const result = useRef();

    function clickPlus() {
        result.current.style = `font-size: ${+result.current.style.fontSize.slice(0, -2) + 1}px`;
    }

    function clickMinus() {
        result.current.style = `font-size: ${+result.current.style.fontSize.slice(0, -2) - 1}px`;
    }

    return (<>
        <Text>Cоздайте компонент, который предоставляет две кнопки: "Увеличить" и "Уменьшить". При нажатии на эти кнопки значение font-size изменяется соответствующим образом на+/–1px (useState).</Text>
        <View>
            <Button onPress={clickPlus} title='+1'></Button>
            <Button onPress={clickMinus} title='-1'></Button>
            <Text ref={result} style={{ fontSize: 50 }}>Hi</Text>
        </View>
    </>);
}

export default Task6;