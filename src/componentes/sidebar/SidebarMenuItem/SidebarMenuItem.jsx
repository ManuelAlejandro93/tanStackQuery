import Link from 'next/link';
import styles from './SidebarMenuItem.module.css';

export const SidebarMenuItem = ({ path, icon, title, subTitle }) => {
  return (
    <Link href={path} className={styles.SidebarMenuItemLink1}>
      <div>
        <div className={styles.iconSideBar}>{icon}</div>
      </div>
      <div className={styles.SidebarMenuItemDiv1}>
        <span className={styles.SidebarMenuItemSpan1}>{title}</span>
        <span className={styles.SidebarMenuItemSpan2}>{subTitle}</span>
      </div>
    </Link>
  );
};
