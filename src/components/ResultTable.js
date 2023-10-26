import { Table } from "@mantine/core"
const ResultTable = ({header, body}) => {
    if(header === undefined){
        return
    }
  
    return(
        <Table  horizontalSpacing='xs' verticalSpacing='xs'>
        <thead>
            <tr>{header && header.map((ele, index) => {
                return <th style={{color:'black'}} key={index}>{ele.toUpperCase()}</th>
            })}</tr>
        </thead>
        <tbody   style={{backgroundColor:'#111111', color:'white'}}>
            {body && body.map((obj, index) => {
            return <tr key={index}>
                {Object.values(obj).map((val, index) => {
                    return(
                        <td key={index} style={{border:'1px solid white', borderRadius:'8px'}}>{val}</td>
                    )
                })}
              </tr>
            })}
        </tbody>
      </Table>
    )
}
export {ResultTable}