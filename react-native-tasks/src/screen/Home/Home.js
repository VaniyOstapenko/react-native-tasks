import { Text } from 'react-native'


function Home({ navigation }) {
    return (
        <>
            <Text onPress={() => navigation.navigate('Task1')}>Перейти к 1 задаче</Text>
            <Text onPress={() => navigation.navigate('Task2')}>Перейти к 2 задаче</Text>
            <Text onPress={() => navigation.navigate('Task3')}>Перейти к 3 задаче</Text>
            <Text onPress={() => navigation.navigate('Task4')}>Перейти к 4 задаче</Text>
        </>
    );
}

export default Home;