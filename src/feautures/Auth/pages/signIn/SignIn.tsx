import {Form} from "antd";
import React from "react";


interface SignUp {
    meta: string
}

export const SignUp: React.FC<SignUp> = () => {
    const [form] = Form.useForm();
    return (
        <div>
            hello
        </div>
    )
}
