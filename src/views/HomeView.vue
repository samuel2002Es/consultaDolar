<template>
  <div>
    <v-card class="mb-6" color="success rounded-xl"  >
          <v-card-text class="display-1 text-center">
            Busca el valor del dolar atraves del tiempo
          </v-card-text>
        </v-card>
    <!-- grap nos dice que si nos pasamos de 12 columnas establecidas mandara abajo lo que sobre -->
    <v-layout :wrap="true">
      <v-flex>
        <v-card>
          <v-date-picker 
          v-model="fecha"
          full-width
          locale="es-mx"
          :min="minimo"
          :max="maximo"
          @change="getDolar(fecha)"
          >

          </v-date-picker>
        </v-card>
        <v-card color="error" dark>
          <v-card-text class="display-1 text-center">
            valor: {{ valor }}
          </v-card-text>
        </v-card>
      </v-flex>
      <!-- <v-flex xs3 lg2>
        <h1>hola mundo</h1>
      </v-flex>
      <v-flex xs5 lg4>
        <h1>hola mundo</h1>
      </v-flex>
      <v-flex xs4 lg6>
        <h1>hola mundo</h1>
      </v-flex> -->
    </v-layout>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
/* mapMutatios accedemos a esto cuando queremos las mutaciones que hacen a su ves referencia al state de la store  y lo metemos en los metodos*/
import axios from 'axios'
  export default {
    data() {
      return {
        fecha: new Date().toISOString().substring(0,10),
        minimo: '1984',
        /* para traer el dia de hoy es lo siguiente */
        maximo: new Date().toISOString().substring(0,10),
        valor: null
      }
    },
    methods:{
      /* decimos que vamos a hacer uso de las mutaciones mostrar y ocultar */
      ...mapMutations(['mostrarLoading','ocultarLoading']),
      async getDolar(dia){
        /* como la fecha de nuestro calendario es año mes dia, y lo necesitamos como dia mes año lo invertimos */
        let arrayFecha = dia.split('-')
        let ddmmyy = arrayFecha[2] + '-' + arrayFecha[1] + '-' + arrayFecha[0];
        try {
          /* cuando este intentando obtener la informacion de nuestra api le decimos que aparezca  */
          this.mostrarLoading({titulo:'accediendo a informacion'})
          let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`)
          if (datos.data.serie.length > 0) {
            this.valor = await datos.data.serie[0].valor;
          }else{
            this.valor = "sin resultados"
          }
          console.log(datos.data.serie[0].valor);
        } catch (error) {
          console.log(error);
        } finally{
          /* al final de la solicitud a la api le decimos que oculte el loading */
          this.ocultarLoading()
        }
      }
    },
    created(){
      /* le indico que hacer al crearse */
      this.getDolar(this.fecha)
    }
  }
</script>
