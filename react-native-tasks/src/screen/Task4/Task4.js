import { useState } from 'react';
import { Button, Text, View } from 'react-native'

function Task4() {
    const [count, setCount] = useState('')
    const [res, setRes] = useState(0)

    function showResult() {
        setRes(eval(count))
    }
    return (<>
        <Text>Создайтекомпонент простого калькулятора,который выполняеткоманды:+,-, *, /.</Text>
        <View style={{ flexDirection: 'row', gap: 5 }}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, i) => <Text onPress={() => setCount(count + el)} style={{ backgroundColor: 'pink', padding: 10 }} key={i}>{el}</Text>)}
        </View>
        <View style={{ flexDirection: 'row', gap: 5 }}>
            {['+', '-', '/', '*'].map((el, i) => <Text onPress={() => setCount(count + el)} style={{ backgroundColor: 'pink', padding: 10 }} key={i}>{el}</Text>)}
        </View>
        <Button onPress={showResult} title='='></Button>
        <Text>{count} = {res}</Text>
        <Button title='Reset' onPress={() => { setCount(''); setRes(0) }}></Button >
    </>);
}

export default Task4;