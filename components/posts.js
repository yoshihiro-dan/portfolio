import styles from 'src/app/page.module.css'
import { createClient } from 'microcms-js-sdk'
import Image from 'next/image'
// import { getPlaiceholder } from 'plaiceholder'
// import { getImageBuffer } from 'lib/getImageBuffer'
import { eyecatchLocal } from 'lib/constants'
import ConvertBody from '@/components/convert-body'

export const client = createClient({
  // serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
  // apiKey: process.env.NEXT_PUBLIC_API_KEY,
  serviceDomain: "satsuki-blog",
  apiKey: "dc83ca7826cb4837a2a6259338081f31aa78",
})

export default async function Posts({ catID, limit = 10 }) {
  const posts = await client.get({
    endpoint: 'blogs',
    queries: {
      filters: `categories[contains]${catID}`,
      fields: 'title,slug,eyecatch,content,url',
      orders: '-publishDate',
      limit: limit,
    },
  });

  for (const post of posts.contents) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    // const imageBuffer = await getImageBuffer(post.eyecatch.url)
    // const { base64 } = await getPlaiceholder(imageBuffer)
    // const { base64 } = await getPlaiceholder(post.eyecatch.url);
    // post.eyecatch.blurDataURL = base64
  }

  return (
    <>
      {posts.contents.map(({ title, slug, eyecatch, content, url }) => (
        <article key={slug}>
          <figure>
            <img
              src={eyecatch.url}
              alt=""
              width={eyecatch.width}
              height={eyecatch.height}
              sizes="(min-width: 1152px) 576px, 50vw"
              // placeholder="blur"
              // blurDataURL={eyecatch.blurDataURL}
              // style={{transition: '0.2s'}}
            />
          </figure>
          <div>
            <h4>{title}</h4>
            <ConvertBody contentHTML={content} />
            <p className={styles.url}>{url}</p>
          </div>
        </article>
      ))}
    </>
  )
}
