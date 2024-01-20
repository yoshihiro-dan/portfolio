"use client"
import { redirect } from 'next/dist/server/api-utils';
import styles from 'src/app/page.module.css'
const SUB_DIRECTORY = "/works/portfolio";
/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV == "production"
const basePath = isProd ? SUB_DIRECTORY : "";

export default function Footer() {
    return (
        <>
        <style jsx>{`
            footer {
                background-image: url("${basePath}/images/footer-bg-pc.jpg");
            }
            @media(max-width: 700px) {
                footer {
                    background-image: url("${basePath}/images/footer-bg-sp.jpg");
                }
            }
        `}</style>
        <footer className={styles.footer}>
            <p>ご多忙の中、見てくれてありがとうございました。<br/>一緒にお仕事ができる機会があると幸いです！</p>
            <small>Copyright</small>
        </footer>
        </>
    )
}