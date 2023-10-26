import CodeMirror from '@uiw/react-codemirror'
import { sql } from '@codemirror/lang-sql'
import { oneDark } from '@codemirror/theme-one-dark'
import { Button, Text } from '@mantine/core'

const Editor = ({ handleEditor,suggetion, handleValues, handleCode }) => {

    return (
        <div>
            <Text weight='500' size='lg' color='black'>SQL Editor</Text>
            <br />
            <CodeMirror
                value={suggetion}
                height='330px'
                theme={oneDark}
                extensions={sql()}
                onChange={handleValues}
                className='code-editor'
            />
            <br />
            <Button onClick={handleCode} color='green'>Run</Button>
            <Button onClick={handleEditor} color='blue' style={{marginLeft:"10px"}}>Clear</Button>
        </div>
    )
}
export { Editor }