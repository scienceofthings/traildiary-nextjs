import {config} from "./config";

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

    await fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(credentials)
    }).then(result => result.json())
}