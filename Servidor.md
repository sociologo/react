**Caché algo importante. Con Digital Ocean se pueden subir proyectos a la web con una url asignada. El proceso de direccionarla a un dominio específico es otro problema.**

https://www.digitalocean.com/community/tutorials/deploy-react-application-with-nginx-on-ubuntu

Cómo implementar una aplicación React con Nginx en Ubuntu

Introducción

Puedes implementar rápidamente aplicaciones React en un servidor usando la herramienta de compilación predeterminada "Crear Aplicación React". El script de compilación compila la aplicación en un único directorio que contiene todo el código JavaScript, imágenes, estilos y archivos HTML. Con los recursos en una sola ubicación, puedes implementar en un servidor web con una configuración mínima.

En este tutorial, implementarás una aplicación React en tu equipo local en un servidor Ubuntu con Nginx. Construirás una aplicación usando "Crear Aplicación React", usarás un archivo de configuración de Nginx para determinar dónde implementar los archivos y copiarás de forma segura el directorio de compilación y su contenido al servidor. Al finalizar este tutorial, podrás compilar e implementar una aplicación React.

Requisitos

Si usas Ubuntu 16.04 o anterior, te recomendamos actualizar a una versión más reciente, ya que Ubuntu ya no ofrece soporte para estas versiones. Esta colección de guías te ayudará a actualizar tu versión de Ubuntu.

Para seguir este tutorial, necesitará:

Un servidor con Ubuntu, un usuario no root con privilegios de sudo y un firewall activo. Para obtener instrucciones sobre cómo configurarlos, seleccione su distribución de esta lista y siga nuestra Guía de configuración inicial del servidor. Para obtener acceso SSH a un droplet de DigitalOcean, consulte "Cómo conectarse a droplets con SSH".

En su equipo local, necesitará un entorno de desarrollo con Node.js. Para instalarlo en macOS o Ubuntu, siga el tutorial "Cómo instalar Node.js en Ubuntu 22.04/20.04/18.04".

Nginx se instala siguiendo esta guía para Ubuntu 22.04/20.04/18.04. Asegúrese de tener un bloque de servidor para su dominio. Este tutorial usará /etc/nginx/sites-available/your_domain como ejemplo.

Se recomienda proteger su servidor con un certificado HTTPS. Puedes hacerlo con el tutorial "Cómo proteger Nginx con Let's Encrypt en Ubuntu 22.04/20.04/18.04".

Un nombre de dominio registrado o la IP de un servidor.

Si usas un nombre de dominio, debes configurar ambos registros DNS para tu servidor. Si usas DigitalOcean, consulta nuestra documentación de DNS para obtener más información sobre cómo añadirlos.

Un registro A con "your_domain" apuntando a la dirección IP pública de tu servidor.
Un registro A con "www.your_domain" apuntando a la dirección IP pública de tu servidor.
También necesitarás conocimientos básicos de JavaScript, HTML y CSS, que puedes encontrar en nuestras series "Cómo crear un sitio web con HTML", "Cómo crear un sitio web con CSS" y "Cómo programar en JavaScript".










https://abdulbaquee.medium.com/nginx-domain-in-digitalocean-and-react-app-as-a-subdirectory-a99dca2378b1


