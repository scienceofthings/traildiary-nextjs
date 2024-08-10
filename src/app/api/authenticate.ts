'use client'
import {config} from "@/app/api/config";

type AuthenticationParameters = {
    username: string,
    password: string
}

export const getAuthenticationEndpoint = (): string => `${config.apiUrlPrefix}/token/`

export const authenticate = async (url: string, {arg}: {arg: AuthenticationParameters}) => {
    const credentials = {
        username: arg.username,
        password: arg.password
    }

    const response = await fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(credentials)
    })

    if (response.ok) {
        //cookies().set('user', 'authenticated')
        return await response.json()
    }


}