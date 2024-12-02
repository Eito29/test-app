import React from 'react'
import { posts } from '../data/posts'
import classes from '../styles/Top.module.css'

export default function Top() {
  return (
    <div>
      <ul className={classes.list}>
        {
          posts.map(post => (
            <li key={post.id} className={classes.listbox}>
              <a href='#' className={classes.link}>
                <div className={classes.posts}>
                  <div>
                    <div className={classes.post}>
                      <small className={classes.postsDate}>
                        {/* new Date()で日時をJavaScriptのDateオブジェクトに変換して、toLocaleDateString()というメソッドで表示形式を変えるy/m/d/}*/}
                        {new Date(post.createdAt).toLocaleDateString()}
                      </small>
                      <div>
                        {/* カテゴリ用に繰り返し処理 */}
                        {post.categories.map((Category) => {
                          return (
                            <span key={Category} className={classes.postsCategory}>{Category}</span>
                          );
                        })}
                      </div>
                    </div>
                    <h1 className={classes.postsTitle}>{post.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: post.content }} className={classes.postsContent}></p>{/* 直接HTMLを埋め込むためのプロパティ */}
                  </div>
                </div>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
