import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment({ content } ) {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/johneverton01.png"
        alt=""
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>John Everton</strong>
              <time
                title="27 de Outubro às 18:19h"
                dateTime="2022-10-27 18:19:00"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}