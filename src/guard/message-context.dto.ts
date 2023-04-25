export type MessageContextDto  = {
    key?: string
    invokeId?: string
    command?: string
    value?: MessageContextValueDto

}

export type MessageContextValueDto = {
    invokeId?: string
    data?: any
}