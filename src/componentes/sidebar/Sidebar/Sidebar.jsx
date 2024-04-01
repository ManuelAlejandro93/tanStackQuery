import Image from 'next/image';
import { IoLogoReact } from 'react-icons/io5';

import styles from './Sidebar.module.css';
import { sideBarMenuItemsResource as items } from '@/data-resources/sidebar/sidebar-menu-items';
import { SidebarMenuItem } from '../SidebarMenuItem/SidebarMenuItem';

export const Sidebar = () => {
  return (
    <div id='menu' style={{ width: '400px' }} className={styles.SidebarDiv1}>
      <div id='logo' className={styles.SidebarDiv2}>
        <h1 className={styles.SidebarH11}>
          <IoLogoReact size={30} className={styles.IoLogoReact1} />
          <span>Dash</span>
          <span className={styles.SidebarSpan1}>8</span>.
        </h1>
        <p className={styles.SidebarP1}>Practicando TanStack Query</p>
      </div>

      <div id='profile' className={styles.SidebarDiv3}>
        <p>Welcome back,</p>
        <a href='#' className={styles.SidebarP2}>
          <span className={styles.spanContenedorDePerfil}>
            <Image
              className={styles.SidebarImage1}
              src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c'
              alt='User avatar'
              width={50}
              height={50}
              priority
            />
          </span>
          <span className={styles.SidebarSpan2}>Manuel Aguirre</span>
        </a>
      </div>

      <div id='nav' className={styles.SidebarDiv4}>
        {items.map((itemProperties) => {
          return (
            <SidebarMenuItem
              key={itemProperties.path}
              {...itemProperties}
            ></SidebarMenuItem>
          );
        })}
      </div>
    </div>
  );
};
