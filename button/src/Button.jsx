import { splitProps } from 'solid-js';
import * as styles from './Button.module.scss';

/**
 * The button component will render a clickable button
 */
export const Button = (props) => {
  const [, rest] = splitProps(props, ['href', 'children']);

  return (
    <>
      {props.href ? (
        <a class={styles.button} href={props.href} {...rest}>
          {props.children}
        </a>
      ) : (
        <button class={styles.button} {...rest}>
          {props.children}
        </button>
      )}
    </>
  );
};

Button.defaultProps = {
  href: undefined,
};
