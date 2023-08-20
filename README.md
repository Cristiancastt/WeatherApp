# Weather App

¡Bienvenido a la Aplicación del Clima! Esta aplicación web te permite consultar el pronóstico del clima para diversas ciudades alrededor del mundo. Puedes buscar una ciudad específica, obtener detalles del clima e incluso configurar tu posición actual para actualizaciones rápidas del clima.

## Características

- **Búsqueda de Ciudades:** Utiliza la barra de búsqueda para consultar el pronóstico del clima de una ciudad específica. Puedes ingresar el nombre de la ciudad y presionar "Buscar" o presionar la tecla "Enter" para obtener información del clima.

- **Autocompletado:** A medida que comiences a escribir en la barra de búsqueda, la aplicación proporcionará sugerencias de autocompletado basadas en tu entrada. Haz clic en una sugerencia para seleccionar rápidamente una ciudad.

- **Configurar Posición Actual:** Haz clic en el botón "Configurar Posición Actual" para obtener información del clima de tu ubicación actual utilizando la geolocalización. Ten en cuenta que la precisión de esta función puede variar según la disponibilidad de datos de ubicación.

## Uso

1. Clona o descarga este repositorio en tu máquina local.
2. Cambiar ``const apiKey`` por tu ApiKey o dejar la default.
3. Abre el archivo index.html en tu navegador web preferido.
4. Utiliza los siguientes componentes en la aplicación:
   - **Barra de Búsqueda:** Ingresa el nombre de la ciudad para la cual deseas consultar el clima. Las sugerencias de autocompletado aparecerán mientras escribas.
   - **Sugerencias de Autocompletado:** Haz clic en una sugerencia para seleccionar rápidamente una ciudad.
   - **Botón de Búsqueda:** Haz clic en este botón o presiona "Enter" después de escribir el nombre de la ciudad para obtener información del clima de la ciudad seleccionada.
   - **Botón Configurar Posición Actual:** Haz clic en este botón para obtener información del clima de tu ubicación actual mediante la geolocalización.
   - **Tarjeta de Clima:** Una vez que busques una ciudad o utilices la función de posición actual, la información del clima para esa ciudad se mostrará en la tarjeta. Esto incluye el nombre de la ciudad, el código de país, el ícono del clima, la temperatura, la humedad y la velocidad del viento.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- API OpenWeatherMap para datos climáticos

## Notas

- Asegúrate de tener una conexión a Internet activa para obtener datos precisos sobre el clima.
- La geolocalización puede no estar disponible o ser precisa en todos los dispositivos y navegadores.
- Esta aplicación es solo para uso educativo y personal.
