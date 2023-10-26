import { Paper, Button, Text} from "@mantine/core"
const AvailableQueries = ({handleHistory }) => {
    const QueryTable=[
    'select * from employee_territories',
    'select * from employees',
    'select * from categories',
    'select * from customers',
    'select * from order_details',
    'select * from orders',
    'select * from regions',
    'select * from shippers',
    'select * from suppliers',
    'select * from territories'
    ]
    return (
        <>
        <div style={{ marginTop: '1.5rem' }}>
            <Text size='lg' weight='500' color='black' >Queries Available </Text>
            <br />
            <Paper className='sp' shadow='xl' p='md'>
            <div className="recent-box">
                    {QueryTable && QueryTable.map((btn, index) => (
                        <Button key={index} onClick={() => handleHistory(btn)} color='green' fullWidth>{btn}</Button>
                    ))}
            </div>
            </Paper>
        </div>
        </>
    )
}
export { AvailableQueries }