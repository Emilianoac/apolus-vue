<template>
  <div style="max-width: 700px; margin: auto;">
    <h1><strong>Añadir nuevo artista</strong></h1>
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
      <input class="form-control" type="file" @change="handleBanner($event)">
      <img class="img-fluid my-3" :src="artista.banner.tempData.url" v-if="artista.banner.tempData">
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
        <input class="form-control" type="text" v-model="album.fecha_lanzamiento" >
      </div>
      <!-- COVER ALBUM -->
      <div class="mb-3">
        <label class="form-label"> Caratula </label>
        <input class="form-control" type="file" @change="handleAlbumCover($event, i)">
      </div>
      <img class="img-fluid my-3" :src="album.cover.tempData.url" v-if="album.cover.tempData">
      <!-- CANCIONES -->
      <div class="canciones">
        <h5>Canciones</h5>
        <div class="form-cancion mb-2" v-for="(cancion, indexCancion) in album.canciones">
          <div class="row">
            <div class="col-lg-1 pe-0 align-self-center">
              <span>{{ indexCancion + 1 }}</span>
            </div>
            <div class="col-lg-9 ps-0">
              <input class="form-control" type="text" placeholder="Nombre" v-model="cancion.nombre">
            </div>
            <div class="col-lg-2">
              <input class="form-control" type="text" placeholder="Duración" v-model="cancion.duracion">
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
  import {reactive} from "vue"
  import {apolusFirebase} from "../firebase/config"
  import {addDoc, collection } from "firebase/firestore"
  import { getStorage, ref as firebaseRef, uploadBytes, getMetadata, getDownloadURL } from "firebase/storage";
  import {filePreviewFromInput} from "../composables/filePreview"

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
            duracion: null
          }
        ]
      }
    ]
  })

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
    artista.albumes[i].cover.tempData = {
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

  async function handleSubmit() {

    const storage = getStorage()
    const storageRef = firebaseRef(storage, 'artistas')
    const projectRef = firebaseRef(storageRef, artista.nombre.replaceAll(' ', '-').toLowerCase())

    const coversAlbumes = artista.albumes.map(async (album, index) => {

      const coverRef = firebaseRef(projectRef, album.cover.tempData.file.name)
      await uploadBytes(coverRef, album.cover.tempData.file)

      const coverURL = await getDownloadURL(firebaseRef(storage, coverRef))
      const coverMetadata = await getMetadata(coverRef)
      
      album.cover.data = {
        name: coverMetadata.name,
        url: coverURL
      }
    }) 

    await Promise.all(coversAlbumes).then( async () => {

      const bannerArtista = async () => {
        const bannerRef = firebaseRef(projectRef,`banner/${artista.banner.tempData.file.name}`)
        await uploadBytes(bannerRef, artista.banner.tempData.file)

        const bannerURL = await getDownloadURL(firebaseRef(storage, bannerRef))
        const bannerMetadata = await getMetadata(bannerRef)
        
        artista.banner.data = {
          name: bannerMetadata.name,
          url:  bannerURL
        }
      }

      await bannerArtista()
      console.log('Imagenes subidas')

      delete artista.banner.tempData
      artista.albumes.forEach(album => {
        delete album.cover.tempData
      })
      artista.slug = artista.nombre.replaceAll(' ', '-').toLowerCase()

      await addDoc(collection(apolusFirebase, 'artistas'), artista)
      console.log('Artista agregado con exito.')
    })
  }

</script>

<style lang="scss">

</style>