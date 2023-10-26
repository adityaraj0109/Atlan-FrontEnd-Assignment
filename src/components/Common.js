import { Paper, Group, Button, Text } from '@mantine/core';
import { CommonWords } from '../utils/CommonWords'
const Common = ({ handleQueries }) => {

    return (
        <>
            <Text size='lg' weight='500' color='black'> Common Query Words </Text>
            <br />
            <Paper className='sp' shadow="xl" p='md'>
                <Group position='center' spacing='xs'>
                    {CommonWords && CommonWords.map((word, i) => {
                        return <Button onClick={() => handleQueries(word)} color='blue' radius="sm" size="sm" uppercase key={i}>{word}</Button>
                    })}
                </Group>
            </Paper>
        </>

    )
}

export {Common}