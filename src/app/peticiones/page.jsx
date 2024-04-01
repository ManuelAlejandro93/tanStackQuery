import Contenedor from '@/componentes/visualizador/Contenedor/Contenedor';
import SimpleCharacterCard from '@/componentes/visualizador/SimpleCharacter/SimpleCharacterCard';
import SimpleOrderCard from '@/componentes/visualizador/SimpleOrder/SimpleOrderCard';
import ordenesData from '@/data-resources/ordenador/ordenesData';
import { characteres } from '@/data-resources/visualizador/characteres';

export const metadata = {
  title: 'Peticiones Page',
  description: 'SEO Title',
};

export default function PeticionesPage() {
  return (
    <>
      <span className='displayBlock'>
        <Contenedor>
          {ordenesData.map((ordenesProperties) => {
            return (
              <SimpleOrderCard
                key={ordenesData.titulo}
                {...ordenesProperties}
              />
            );
          })}
        </Contenedor>
        <Contenedor>
          {characteres.map((characterData) => {
            return (
              <SimpleCharacterCard
                key={characterData.webURL}
                {...characterData}
              ></SimpleCharacterCard>
            );
          })}
        </Contenedor>
      </span>
    </>
  );
}
