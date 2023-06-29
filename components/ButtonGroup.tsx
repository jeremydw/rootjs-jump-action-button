import { ComponentChildren } from 'preact';
import styles from './ButtonGroup.module.scss';

export default function (props: {
  orientation?: 'horizontal' | 'vertical';
  children: ComponentChildren;
}) {
  return <div className={styles.container}>{props.children}</div>;
}
