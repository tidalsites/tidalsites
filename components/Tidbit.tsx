import { FC, useRef, useState } from "react";
import styles from "../styles/Tidbits.module.scss";

interface IAnswer {
  elementType?: string;
  content: string | string[];
}

interface ITidbitProps {
  isCollapsed: boolean;
  question: string;
  answer: IAnswer[];
}

const Tidbit: FC<ITidbitProps> = ({ isCollapsed, question, answer }) => {
  const [collapsed, setCollapsed] = useState(isCollapsed);
  const content = useRef();

  function handleCollapsable() {
    const padding = "2rem";
    const gap = window.getComputedStyle(content.current).gap;
    const numberOfChildren = content.current.children.length;

    // @ts-ignore
    content.current && content.current.style.maxHeight
      ? (content.current.style.maxHeight = null)
      : (content.current.style.maxHeight = `calc(${content.current.scrollHeight}px + ${padding} + (${gap} * ${numberOfChildren})`);
    setCollapsed((c) => !c);
  }
  return (
    <div className={styles.tidbit}>
      <button onClick={handleCollapsable} className={styles.question}>
        <span>{question}</span>
        <span data-icon className="material-icons" role="img">
          arrow_drop_down
        </span>
      </button>
      <div ref={content} data-collapsed={collapsed} className={styles.answer}>
        {Array.isArray(answer)
          ? answer.map((el) => {
              const defaultElement = <p>{el.content}</p>;
              if (el.elementType) {
                switch (el.elementType) {
                  case "p":
                    return defaultElement;
                  case "ol":
                    const content = el.content as string[];
                    return (
                      <ol>
                        {content.map((li) => {
                          return <li>{li}</li>;
                        })}
                      </ol>
                    );
                  default:
                    return defaultElement;
                }
              }

              return defaultElement;
            })
          : answer}
      </div>
    </div>
  );
};

export default Tidbit;
