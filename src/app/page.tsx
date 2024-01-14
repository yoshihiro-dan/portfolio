'use client'

// import Image from 'next/image'
// import styles from './page.module.css'
import {Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import styles from './page.module.css'
import Posts from '@/components/posts'
import {useRef, useLayoutEffect} from 'react'
import {headerSmoothScroll, sectionInView, splideBar, createTypingAnimation} from '../../lib/common'

export default function Home() {
  const textRef = useRef<HTMLDivElement>(null)
  const didEffect = useRef(false);
  const updateProgressBar = function updateProgressBar(textRef:any) {
    const end = textRef.current.splide.Components.Controller.getEnd() + 1;
    const rate = Math.min((textRef.current.splide.index + 1) / end, 1);
    const bar = textRef.current.splide.root.querySelector('.slider-progress-bar');
    bar.style.width = String(100 * rate) + '%';
  }
  // useLayoutEffectは、描画が画面に反映される手前で何か処理を実行したい場合に利用されます。
  useLayoutEffect(() => {
    createTypingAnimation(".js_typing");

    // splide_bar
    splideBar(textRef,didEffect,updateProgressBar);
    // スムーススクロール
    headerSmoothScroll();
    // 交差を監視する
    sectionInView();
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div id="top" className="scroll__target">
          <div className={styles.intro}>
            <div className={styles.intro_text}>
              <h1>Yoshihiro Dan Portfolio</h1>
              <div className="cursor">
                <p className="typing js_typing">見た目だけの構築ではなく、<br/>ページを最適化するための実装ができます。</p>
              </div>
            </div>
            <div className={styles.intro_img}>
              <img src="/images/profile.png" alt="プロフィール写真" />
            </div>
          </div>
        </div>
      
        <section className={styles.skill}>
          <div id="skill" className="scroll__target">
            <h2>Skill</h2>
            <section className={styles.container}>
              <article>
                <h3>
                  <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.25L1.36328 16.7109L7.48047 18.75L13.6367 16.7109L15 1.25H0ZM12.0391 6.24609H4.85938L5.01953 8.17578H11.8789L11.3477 13.9727L7.52344 15.0273V15.0391H7.48047L3.625 13.9727L3.39062 11.0117H5.25391L5.39062 12.5L7.48047 13.0664L9.57812 12.5L9.8125 10.0703H3.29297L2.79297 4.38281H12.2109L12.0391 6.24609Z" fill="#3B7495"/>
                  </svg>
                  <span>HTML</span>
                </h3>
                <p>コンテンツの階層構造を守り、検索エンジンの最適化を図ります。<br/>正しい階層構造にすることで、CSSとJavaScriptの作業をスムーズに行うことができます。</p>
              </article>
              <article>
                <h3>
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0L1.55804 17.6696L8.57143 20L15.5848 17.6696L17.1429 0H0ZM13.9777 3.57143L13.7634 5.68304L8.61607 7.88393L8.60268 7.88839H13.5804L13.0089 14.433L8.625 15.7143L4.21429 14.4107L3.92857 11.1116H6.11161L6.25446 12.8214L8.60268 13.4152L11.0446 12.7277L11.2098 9.97768L3.78571 9.95536V9.95089L3.77679 9.95536L3.61607 7.88839L8.62054 5.80357L8.91071 5.68304H3.42411L3.16518 3.57143H13.9777Z" fill="#3B7495"/>
                  </svg>
                  <span>CSS</span>
                </h3>
                <p>モジュール化することで保守性を高め、コードの再利用を容易にすることで品質を落とさない設計にしています。</p>
              </article>
              <article>
                <h3>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0.25V17.75H17.5V0.25H0ZM9.52344 13.8984C9.52344 15.6016 8.52344 16.3789 7.06641 16.3789C5.75 16.3789 4.98828 15.6992 4.59766 14.875L5.9375 14.0664C6.19531 14.5234 6.42969 14.9102 6.99609 14.9102C7.53516 14.9102 7.87891 14.6992 7.87891 13.875V8.28516H9.52344V13.8984ZM13.4141 16.3789C11.8867 16.3789 10.8984 15.6523 10.418 14.6992L11.7578 13.9258C12.1094 14.5 12.5703 14.9258 13.3789 14.9258C14.0586 14.9258 14.4961 14.5859 14.4961 14.1133C14.4961 13.5508 14.0508 13.3516 13.2969 13.0195L12.8867 12.8438C11.6992 12.3398 10.9141 11.7031 10.9141 10.3633C10.9141 9.12891 11.8555 8.19141 13.3203 8.19141C14.3672 8.19141 15.1172 8.55469 15.6562 9.50781L14.375 10.3281C14.0938 9.82422 13.7891 9.625 13.3164 9.625C12.8359 9.625 12.5312 9.92969 12.5312 10.3281C12.5312 10.8203 12.8359 11.0195 13.543 11.3281L13.9531 11.5039C15.3516 12.1016 16.1367 12.7148 16.1367 14.0898C16.1367 15.5664 14.9727 16.3789 13.4141 16.3789Z" fill="#3B7495"/>
                  </svg>
                  <span>JavaScript</span>
                </h3>
                <p>保守性の高いコードを設計します。<br/>再利用できるように関数は小さなモジュールに分割し、特定の機能を担当するように設計しています。</p>
                <p className={styles.more_link}><a href="#javascript">詳しくみる</a></p>
              </article>
            </section>

            <section className={styles.sub_container}>
              <div>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M11.5537 1.16797C11.3604 0.759766 10.9521 0.5 10.5037 0.5C10.0552 0.5 9.65053 0.759766 9.45366 1.16797L7.10939 6.07754L1.87397 6.86426C1.43647 6.93105 1.07189 7.24277 0.936994 7.66953C0.802099 8.09629 0.911473 8.56758 1.22502 8.88301L5.02397 12.709L4.1271 18.1158C4.05418 18.5611 4.23647 19.0139 4.59741 19.2773C4.95835 19.5408 5.43595 19.5742 5.8297 19.3627L10.5073 16.8207L15.1849 19.3627C15.5787 19.5742 16.0563 19.5445 16.4172 19.2773C16.7781 19.0102 16.9604 18.5611 16.8875 18.1158L15.987 12.709L19.786 8.88301C20.0995 8.56758 20.2125 8.09629 20.074 7.66953C19.9354 7.24277 19.5745 6.93105 19.137 6.86426L13.8979 6.07754L11.5537 1.16797Z" fill="#3B7495"/>
                  </svg>
                  <span>他にこんなことに<br/>独学で挑戦しています。</span>
                </p>
                <ul>
                  <li>
                    <dl>
                      <dt>Three.js</dt>
                      <dd>アニメーションを使用した情報伝達効果について</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>Shopify</dt>
                      <dd>仕組みとカスタマイズできる範囲について</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>UI/UX</dt>
                      <dd>心理的効果と操作性について</dd>
                    </dl>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>

        <section className={styles.works}>
          <div id="works" className="scroll__target">
            <h2>Works</h2>
            <h3>株式会社ファンケル アテニア様</h3>
            <div className={styles.post}>
              {/* @ts-expect-error Async Server Component */}
              <Posts catID="design" limit="1" />
            </div>
            <h3>株式会社 創通メディカル様</h3>
            <div className={styles.posts}>
              {/* @ts-expect-error Async Server Component */}
              <Posts catID="technology" limit="3" />
            </div>
          </div>
        </section>

        <section className={styles.about}>
          <div id="about" className="scroll__target">
            <h2>About</h2>
            <div className={styles.container}>
              <div className={styles.about_text}>
                <p>コーポレートやECサイトの運用の業務を長年行ってきたことから、見た目だけではなくその後を考えた構築を心がけています。<br/>知的好奇心が強く勉強熱心。好きなものには一直線です。</p>
              </div>
              <div className={styles.about_text}>
                <dl>
                  <dt>コーディング以外のスキル</dt>
                  <dd>
                    <ul>
                      <li>Photoshop</li>
                      <li>figma</li>
                      <li>Illustrator</li>
                      <li>XD</li>
                    </ul>
                  </dd>
                </dl>
              </div>
              <div className={styles.about_img}>
                <img src="/images/profile.png" alt="プロフィール写真" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.portfolio}>
          <h2>Portfolio</h2>
          <p>このページ制作の成り立ちをご紹介します</p>

          <section className={styles.splide__container}>
            <Splide
              hasTrack={ false }
              aria-label=""
              options={ {
                rewind: true,
                gap   : '8px',
                destroy: true, // スライダーを破棄
                breakpoints: {
                  700: {
                    destroy: false,
                  },
                },
                arrows: true,
                pagination: false,
                // autoplay: true,
              } }
              ref={ textRef }
              onMove={ () => {
                updateProgressBar(textRef)
              } }
            >
              <SplideTrack>
                <SplideSlide>
                <article>
                  <h3>要件定義/デザイン</h3>
                  <div>
                    <p>短い時間で知りたい情報にアクセスしやすいように構成を考え、シンプルなデザインにまとめました。</p>
                    <ul>
                      <li>・目的：会いたいと思ってもらう</li>
                      <li>・ターゲット：採用担当者様</li>
                      <li>・ベネフィット：見た目だけの構築ではなく運用まで考えることができるコーダーの採用</li>
                    </ul>
                  </div>  
                </article>
                </SplideSlide>
                <SplideSlide>
                <article>
                  <h3>構築</h3>
                  <div>
                    <p>
                      Next.js 13を使用して構築しています。<br/>コンポーネントやスタイルなどは、役割ごとでファイルをまとめ、保守性を高めています。<br/>
                      GitHub：○○○
                    </p>
                    <ul>
                      <li>作業期間：2023/9/24〜2023/10/24</li>
                      <li>使用ツール：figma</li>
                    </ul>
                  </div>  
                </article>
                </SplideSlide>
                <SplideSlide>
                <article>
                  <h3>Skill</h3>
                  <div>
                    <p>レスポンシブデザインで、モバイルファーストの設計にしています。<br/>固定ナビゲーションやスライダーを使い、画面幅に合わせて情報の整理をしています。</p>
                  </div>  
                </article>
                </SplideSlide>
                <SplideSlide>
                <article>
                  <h3>Skill/Works部分</h3>
                  <div>
                    <p>更新頻度が高いコンテンツは、microCMSを使って運用しています。</p>
                  </div>  
                </article>
                </SplideSlide>
                <SplideSlide>
                <article>
                  <h3>アニメーション</h3>
                  <div>
                    <p>コードを書いている光景をイメージし、ファーストビューにタイピング風に文字が出現する演出をCSSとJavaScriptで実装しています。</p>
                  </div>  
                </article>
                </SplideSlide>
                <SplideSlide>
                <article>
                  <h3>作成の目的</h3>
                  <div>
                    <p>新しく学んだことの理解と技術を定着させるために、このポートフォリを作成しました。</p>
                  </div>  
                </article>
                </SplideSlide>
              </SplideTrack>

              <div className="slider-progress">
                <div className="slider-progress-bar"></div>
              </div>
            </Splide> 
          </section>
        </section>

        <section id="javascript" className={styles.javascript}>
          <h2>JavaScript</h2>
          <p>JavaScriptを使用し、実際に実装したものを一部紹介させていただきます。</p>
          <section className={styles.container}>
            <article>
              <h3>組み合わせシミュレーション</h3>
              <p>https://www.attenir.co.jp/collection/2007_order/ring/index.html</p>
              <figure>
                <img src="/images/js01-01.jpg" alt="画像" />
                <figcaption>組み合わせのシュミレーションの設計と構築をしました。</figcaption>
              </figure>
              <figure>
                <img src="/images/js01-02.jpg" alt="画像" />
                <figcaption>天然石/材質/サイズをJSONファイルの商品情報と照合。該当のデータからシミュレーションの見た目を調整しています。</figcaption>
              </figure>
            </article>

            <article>
              <h3>住宅ローンのシミュレーション</h3>
              <p>https://photorest.org/simulation/</p>
              <figure>
                <img src="/images/js02-01.jpg" alt="画像" />
                <figcaption>PMT関数を利用して、ローンの返済額の払込額を求めています。</figcaption>
              </figure>
              <figure>
                <img src="/images/js02-01.jpg" alt="画像" />
                <figcaption>さらに条件を加え、詳細なデータへ加工しています。</figcaption>
              </figure>
            </article>

            <article>
              <h3>JSONを利用した運用の仕組み</h3>
              <p>https://mytrex.jp/product/?category=all</p>
              <figure>
                <img src="/images/js03-01.jpg" alt="画像" />
                <figcaption>全商品を一元管理できる仕組みに改修しました。</figcaption>
              </figure>
              <figure>
                <img src="/images/js03-02.jpg" alt="画像" />
                <figcaption>商品ページからも同じデータを取得し、ページのデザインに合わせてデータを加工しています。</figcaption>
              </figure>
            </article>
          </section>
        </section>
      </section>
    </main>
  )
}
