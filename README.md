# rastreo


Live preview (Google Cloud)


https://sintrafico.uc.r.appspot.com/

user: admin
pass: test12345



Requisitos

Python => 3.6

pip => 20

curl = > 7.5



Instalación


"abrir terminal"

git clone https://github.com/JoseCarlosNH/rastreo.git

cd rastreo

pip install -r requirements.txt

nota: revisar que la carperta migrations SOLO tenta un archivo __init__.py

python manage.py makemigrations

python manege.py migrate

python manage.py createsuperuser

  "Colocar usuario y contraseña"
  
python manage.py runserver 


Abrir navegador

http://127.0.0.1:8000/





Ejemplos con CURL


Crear un nuevo vehiculo

Cambiar los datos "identificador=500&placas=vXEU123&lat=18.45465465&lng=-93.5498494" por los deseados y el user:password por los creados previamente(Createsuperuser).

ejemplo:
curl -u user:password --data "identificador=500&placas=vXEU123&lat=18.45465465&lng=-93.5498494"  http://localhost:8000/api/vehiculo/

Respuesta esperada:
{"pk":11,"identificador":"5001","placas":"XEUlala","lat":"18.454654650000000","lng":"-93.549849400000000","created_by":1,"created_date":"2020-04-09T19:26:55.771}




Actualizar un nuevo vehiculo

Cambiar los datos y agregar el id o pk al final de la ruta "http://localhost:8000/api/vehiculo/11/" en este ejemplo es la 11.

ejemplo:
curl -X PUT -u user:password --data "identificador=504&placas=XEUlala&lat=18.45465465&lng=-93.5498494"  http://localhost:8000/api/vehiculo/11/


Respuesta esperada:
{"pk":11,"identificador":"504","placas":"XEUlala","lat":"18.454654650000000","lng":"-93.549849400000000","created_by":1,"created_date":"2020-04-09T19:26:55.7714}




Eliminar un nuevo vehiculo

Cambiar los datos y agregar el id o pk al final de la ruta "http://localhost:8000/api/vehiculo/11/" 

curl -X DELETE -u admin:lopback09 http://localhost:8000/api/vehiculo/11/

Respuesta esperada:
"una linea vacia"


