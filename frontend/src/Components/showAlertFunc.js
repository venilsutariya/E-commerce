import Swal from "sweetalert2"

export const showAlertFunc = (title) => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        text: title,
        showConfirmButton: false,
        timer: 1000
      })
}