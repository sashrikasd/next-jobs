import styles from '../styles/Home.module.css'

function Error({ statusCode }) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h2>
                    {statusCode
                        ? `Job Site - An error ${statusCode} occurred on server`
                        : 'Job Site -  An error occurred on client'}
                </h2>
            </main>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error