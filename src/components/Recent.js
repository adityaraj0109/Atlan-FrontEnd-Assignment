import { Paper, Button, Text } from "@mantine/core"
const Recent = ({ recentHistory, handleHistory }) => {
    return (
        <>
            <Text color='black' weight='500' size='lg'>Recent Queries</Text>
            <br />
            <Paper className="sp" shadow="xl" p="md">

                <div className="recent-box">
                    {recentHistory.length === 0 && <Button color='blue' fullWidth>Recent Queries!</Button>}
                    {recentHistory && recentHistory.map((btn, index) => (
                        <Button color='blue' onClick={() => handleHistory(btn)} key={index} fullWidth>{btn}</Button>
                    ))}
                </div>
            </Paper>
        </>
    )
}
export { Recent }