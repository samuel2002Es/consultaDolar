<template>
  <!-- todo lo que va a ser trabajado con vuetify tiene que estar dentro de la etiqueta v-app -->
  <v-app>
    <v-main>
      <v-container>
        <div></div>
        <!-- el v-model nos ayuda a controlar si aparece o no lo hace recibe un booleano -->
        <v-dialog
          v-model="loading.estado"
          :scrim="false"
          persistent
          width="auto"
        >
        <v-card
          color="primary"
        >
          <v-card-text>
            {{ loading.titulo }}
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            >
            </v-progress-linear>
          </v-card-text>
      </v-card>
    </v-dialog>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {mapState} from "vuex";
/* mapState Cuando un componente necesita hacer uso de varias propiedades de estado de almacenamiento o captadores, la declaración de todas estas propiedades calculadas puede volverse repetitiva y detallada. Para lidiar con esto, podemos hacer uso del mapStateayudante que genera funciones getter computadas para nosotros, ahorrándonos algunas pulsaciones de teclas */
/* como es una funcion computada: recordar con son funciones simples pero guardadas en cache de tal forma que no se renderizan de nuevo hasta que algo cambie dentro de ellos. ...lo metemos dentro de computed */
export default {
  name: 'App',

  data: () => ({
    
  }),
  computed:{
    /* como se copia el objeto necesitamos que no genere un reconocimiento ligado, es decir, generamos o agramos un nuevo objeto */
    ...mapState(['loading'])
    /* dentro recibe un arreglo, de todos las datos que tendra a recorrer de nuestra tienda*/
  }
};
</script>
