import { GiTentaclesSkull } from 'react-icons/gi';
import urlPagina from '../url/url';

export const sideBarMenuItemsResource = [
  {
    path: `${urlPagina}peticiones`,
    icon: <GiTentaclesSkull size={40} />,
    title: 'Peticiones HTTP',
    subTitle: 'Rick and Morty App.',
  },
];
