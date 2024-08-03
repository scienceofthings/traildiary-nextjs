'use client'

import React, { useState } from 'react'
import {Button, Col, Form, Row} from "react-bootstrap";
import styles from './login.module.scss'

import {authenticate, getAuthenticationEndpoint} from "@/app/api/authenticate";
import useSWRMutation from "swr/mutation";
import Link from "next/link";
import {redirect, useRouter} from "next/navigation";
import {cookies} from "next/headers";

export default function Login() {
    const router = useRouter()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [authenticationErrorIsShown, setAuthenticationErrorIsShown] = useState(false)
    const [authenticationWasSuccessful, setAuthenticationWasSuccessful] = useState(false)

    const onError = () => {
        setAuthenticationErrorIsShown(true)
        setAuthenticationWasSuccessful(false)
    }
    const onSuccess = () => {
        setAuthenticationErrorIsShown(false)
        setAuthenticationWasSuccessful(true)
        router.push('/regions')
    }

    const { trigger, isMutating } = useSWRMutation(getAuthenticationEndpoint(), authenticate, {onError, onSuccess})

    return (
        <Row>
            <Col sm={{span: 4, offset: 4}}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email-Adresse</Form.Label>
                        <Form.Control
                            placeholder="Benutzername eingeben"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Passwort</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Passwort"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    {authenticationErrorIsShown && (
                        <Form.Group className="mb-3">
                            <Form.Text className={styles.loginerror}>
                                Der Login war nicht erfolgreich.
                            </Form.Text>
                        </Form.Group>
                    )}
                    {authenticationWasSuccessful && (
                        <Form.Group className="mb-3">
                            <Form.Text>
                                Der Login war erfolgreich.
                            </Form.Text>
                        </Form.Group>
                    )}
                    <Button variant="primary" onClick={async () => { await trigger({username , password}) }} disabled={isMutating}>
                        {isMutating ? "Bitte Warten" : "Login"}
                    </Button>
                </Form>
            </Col>
        </Row>
    )
}
