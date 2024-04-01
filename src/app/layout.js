import { Sidebar } from '@/componentes/sidebar/Sidebar/Sidebar';

//Globals CSS.
import './globals.css';

//Fonts de google.
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'tanStackQuery',
  description: 'Aplicativo Oficial para aprender tanStackQuery.',
};

export default function RootLayout({ children }) {
  const contenidoTarea = 'Ahora sí. Empezar a estudiar tanStackQuery.';
  return (
    <html lang='en'>
      <head></head>
      <body className={`${inter.className}`}>
        <h4 className='layoutTareas'>Tarea: {contenidoTarea}</h4>
        {/* El contenedor que sigue contiene la vista de las páginas. */}
        <div className='contenedorSideBarYChildren'>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
