import type { MsgInfoState } from '../../types/OutTypes'
import { createDiscreteApi } from "naive-ui";
const { message } = createDiscreteApi(["message"]);

const msg = new Map<number, MsgInfoState>([
    [2001, { whetherSuccess: true, msg: "注册成功" }],
    [2002, { whetherSuccess: true, msg: "登录成功" }],
    [1002, { whetherSuccess: false, msg: "登录失败" }],
    [1010, { whetherSuccess: false, msg: "找不到用户" }],
    [1011, { whetherSuccess: false, msg: "用户已存在" }],
    [1013, { whetherSuccess: false, msg: "服务器错误" }],
    [1015, { whetherSuccess: false, msg: "请求太过频繁,请等一等" }],
])

const colorMsg = new Map<string, any>([
    ["PENDING", { color: '#94a3b8', text: '正在评测' }],
    ["ACCEPTED", { color: '#84cc16', text: '答案正确' }],
    ["WRONG_ANSWER", { color: '#ef4444', text: '答案错误' }],
    ["TIME_LIMIT_EXCEEDED", { color: '#fde047', text: '时间超限' }],
    ["MEMORY_LIMIT_EXCEEDED", { color: '#fde047', text: '内存超限' }],
    ["COMPILE_ERROR", { color: '#c4b5fd', text: '编译错误' }],
    ["RUNTIME_ERROR", { color: '#c4b5fd', text: '运行错误' }],
    ["SYSTEM_ERROR", { color: '#431407', text: '系统错误' }],
])

export const paginationSize = 5

export const outMessage = (code: number): void => {
    const ans: MsgInfoState | undefined = msg.get(code)
    if (ans?.whetherSuccess)
        message.success(ans.msg)
    else if (ans)
        message.error(ans.msg)
}

export const outMsgColor = (result: string) => {
    return colorMsg.get(result) || {}
}

