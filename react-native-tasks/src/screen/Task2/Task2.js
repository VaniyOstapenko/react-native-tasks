import { useState } from 'react';
import { Button, Text, View } from 'react-native'

function Task2() {
    const [data, setData] = useState(['Hi', 'Ivan', 'How', 'Are', 'You'])
    const [flag, setFlag] = useState(false)
    const [textBtn, setTextBtn] = useState('Choose')

    return (<>
        <Text>Создайте компонент выпадающего списка, который позволяет выбрать одно из несколькихзаранее определённых значенийпараметра.</Text>

        <Button title={textBtn} onPress={() => setFlag(!flag)}></Button>
        <View style={{ display: flag ? 'block' : 'none' }}>
            {data.map((el) => <View><Text onPress={() => {
                setTextBtn(el)
                setFlag(!flag)
            }}>{el}</Text></View>)}
        </View >
    </>);
}

export default Task2;