import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '53584fa40f3d4f5d8f81ab6c991db34e'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '540f8275c05649d9afaf7b5054db4de7'
                    }
                    br11: {
                        table: 'sys_script'
                        id: '80f5dc245ef94a94b353a6a881a957e2'
                    }
                }
            }
        }
    }
}
