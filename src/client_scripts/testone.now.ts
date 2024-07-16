import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { ClientScript } from '@servicenow/sdk/core'
import { showStateUpdate } from '../server/script.js'

//creates a client script that pops up 'Table loaded successfully!!' message everytime todo record is loaded
ClientScript({
    $id: Now.ID['cs12'],
    name: 'my_client_script2',
    table: 'incident',
    active: true,
    applies_extended: false,
    global: true,
    ui_type: 'all',
    description: 'Custom client script generated by Now SDK',
    messages: '',
    isolate_script: false,
    type: 'onLoad',
    script: script`function onLoad() {
        g_form.addInfoMessage("Table loaded successfully!!")
    }`,
})

