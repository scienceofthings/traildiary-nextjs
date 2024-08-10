import React from 'react'
import styles from './Headline.module.scss'


type HeadingProps = {
    as?: 'h1' | 'h2'
    id?: string
    children: React.ReactNode
}

const Headline: React.FunctionComponent<HeadingProps> = ({
                                                      as = 'h1',
    id,
                                                      children
                                                  }) => {
    const Headline = as
    return <Headline className={styles.headline} id={id}>{children}</Headline>
}

export default Headline