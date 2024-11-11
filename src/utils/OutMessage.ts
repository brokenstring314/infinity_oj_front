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

export const outMessage = (code: number): void => {
    const ans: MsgInfoState | undefined = msg.get(code)
    if (ans?.whetherSuccess)
        message.success(ans.msg)
    else if (ans)
        message.error(ans.msg)
}

