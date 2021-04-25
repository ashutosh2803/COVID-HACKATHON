import Head from "next/head";
import styles from "../styles/chatBox.module.css";

const ChatBox = () => (
    <>
        <Head>
            <script defer src="http://localhost:3000/socket.io/socket.io.js"></script>
            <script defer src="script.js"></script>
        </Head>
        <div className={styles.chatBoxWrapper} id="chatBox-wrapper">
            <div className={styles.chatTitle}>Chat here!</div>
            <div className={styles.messageContainer} id="message-container"></div>
            <form className={styles.sendContainer} id="send-container">
                <input className={styles.messageInput} type="text" id="message-input"/>
                <button className={styles.sendButton} type="submit" id="send-button">Send</button>
            </form>
        </div>
    </>
);

export { ChatBox };
