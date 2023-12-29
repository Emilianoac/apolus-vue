<template>
  <div style="max-width: 700px; margin: auto;">
    <h1><strong>Editar Artista</strong></h1>
    <form>
    <!-- NOMBRE -->
    <div class="mb-3">
      <label class="form-label" for="nombreArtista">Nombre</label>
      <input 
        class="form-control" 
        type="text" 
        id="nombreArtista" 
        v-model="artista.nombre"
      />
    </div>
    <!-- BIOGRAFIA -->
    <div class="mb-3">
      <label class="form-label" for="bioArtista">Biografia</label>
      <textarea 
        class="form-control" 
        type="text" 
        id="bioArtista" 
        v-model="artista.biografia"
      >
      </textarea>
    </div>
    <!-- BANNER -->
    <div class="mb-3">
      <label class="form-label">Banner</label>
      <input 
        class="form-control" 
        type="file" 
        @change="handleBanner($event)"
      />
      <img 
        class="img-fluid my-3" 
        v-if="artista.banner.tempData"
        :src="artista.banner.tempData.url" 
      />
    </div>
    <!--ALBUM-->
    <div class="mb-4" v-for="(album, i) in artista.albumes">
      <h4><strong>Álbum</strong></h4>
      <!-- NOMBRE ALBUM -->
      <div class="mb-3">
        <label class="form-label">Nombre</label>
        <input class="form-control" type="text" v-model="album.nombre" >
      </div>
      <!-- FECHA DE LANZAMIENTO ALBUM -->
      <div class="mb-3">
        <label class="form-label">Fecha de lanzamiento</label>
        <input 
          class="form-control" 
          type="text" 
          v-model="album.fecha_lanzamiento"
        />
      </div>
      <!-- COVER ALBUM -->
      <div class="mb-3">
        <label class="form-label"> Caratula </label>
        <input 
          class="form-control" 
          type="file" 
          @change="handleAlbumCover($event, i)"
        />
      </div>
      <img 
        class="img-fluid my-3" 
        v-if="album.cover.data"
        :src="album.cover.data.url" 
        />
      <!-- CANCIONES -->
      <div class="canciones">
        <h5>Canciones</h5>
        <div class="form-cancion mb-2" v-for="(cancion, indexCancion) in album.canciones">
          <div class="row">
            <div class="col-lg-1 pe-0 align-self-center">
              <span>{{ indexCancion + 1 }}</span>
            </div>
            <div class="col-lg-5 ps-0">
              <input 
                class="form-control" 
                v-model="cancion.nombre"
                type="text" 
                placeholder="Nombre" 
              />
            </div>
            <div class="col-lg-4 ps-0">
              <input 
                class="form-control" 
                v-model="cancion.interprete"
                type="text" 
                placeholder="Interpretes"
              />
            </div>
            <div class="col-lg-2">
              <input 
                class="form-control" 
                v-model="cancion.duracion"
                type="text" 
                placeholder="Duración" 
              />
            </div>
          </div>
        </div>
        <button class="btn btn-secondary btn-sm ms-auto d-block" @click.prevent="addNewSong(i)"> Añadir nueva canción</button>
      </div>
      <hr>
    </div>
    <button class="btn btn-secondary btn-md ms-auto d-block" @click.prevent="addNewAlbum"> Añadir nuevo álbum</button>
    <button class="btn btn-primary ms-auto d-block mt-5" @click.prevent="handleSubmit" type="submit">Guardar Artista</button>
  </form>
  </div>
</template>

<script setup>
  import { useRoute} from "vue-router"
  import {reactive, ref, watch} from "vue"
  import { db } from "../../firebase/config"
  import {addDoc, collection, updateDoc, doc } from "firebase/firestore"
  import { getStorage, ref as firebaseRef, uploadBytes, getMetadata, getDownloadURL } from "firebase/storage";
  import {filePreviewFromInput} from "../../composables/filePreview"

  const route = useRoute()

  const tempArtista = ref(null)
  const artista = reactive({
    nombre: null,
    banner: {
      data: null,
      tempData: null,
    },
    biografia: "",
    albumes: [
      {
        nombre: null,
        fecha_lanzamiento: null,
        cover: {
          data: null,
          tempData: null,
        },
        canciones: [
          {
            nombre: null,
            duracion: null,
            interprete: null,
          }
        ]
      }
    ]
  })

  async function handleSubmit() {

    const storage = getStorage()
    const storageRef = firebaseRef(storage, 'artistas')
    const projectRef = firebaseRef(storageRef, artista.nombre.replaceAll(' ', '-').toLowerCase())


  
    const coversAlbumes = artista.albumes.map(async (album, index) => {

      if(album.cover.data.file) {

      } else {
    
      }

    }) 

    await Promise.all(coversAlbumes).then( async () => {

      const docRef = doc(apolusFirebase,"artistas",tempArtista.value.id)
    
      await updateDoc(docRef, { albumes: artista.albumes })

      console.log('Artista actualizado con exito.')
    })
  }

  ( async function obtenerArtista() {
    try {
      let res = await apolusFirebase.collection('artistas').doc(route.params.id).get()

      if (!res.empty) {
        console.log(res.id)
        const data = res.data()

        tempArtista.value = {
          ...data, id: res.id
        }

        console.log(tempArtista.value)
      } else throw Error('That post does not exist')
    }
    catch(err) {
      console.log(err)
    }
  })()

  function addNewAlbum() {
    artista.albumes.push({
      nombre: null,
      fecha_lanzamiento: null,
      cover: {
        data: null,
        tempData: null,
      },
      canciones: [
        {
          nombre: null,
          duracion: null
        }
      ]
    })
  }

  function addNewSong(i) {
    artista.albumes[i].canciones.push({
      nombre: null,
      duracion: null
    })
  }

  async function handleAlbumCover(event, i) {
    artista.albumes[i].cover.data = {
      url: await filePreviewFromInput(event),
      file: event.target.files[0]
    }
    
  }

  async function handleBanner(event) {
    artista.banner.tempData = {
      url: await filePreviewFromInput(event),
      file: event.target.files[0]
    }
  }

  watch(tempArtista,(newValue, oldValue) => {
    if(newValue) {
      artista.nombre = newValue.nombre
      artista.banner.tempData = newValue.banner.data
      artista.biografia = newValue.biografia
      artista.albumes = newValue.albumes
    }
  })
</script>

<style lang="scss">

</style>