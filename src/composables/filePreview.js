export function filePreviewFromInput(event) {
  const file = event.target.files[0]

  return new Promise((resolve, reject) => {
    if (!file) {
      reject("No se seleccionó ningún archivo")
    }

    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result)
    };

    reader.onerror = () => {
      reject("Error al leer el archivo")
    };

    reader.readAsDataURL(file)
  });
}