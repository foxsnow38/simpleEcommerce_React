import * as yup from 'yup'

const validations = yup.object().shape({
email: yup.string().email(`Gecerli bir Email girin Lutfen`).required(`Zorunlu Alan`),
password: yup.string().min(5,`parola en az 5 karakter olmali lo`).required(),
passwordConfirm : yup.string().oneOf([yup.ref(`password`)],`eslemiyor`).required()


})

export default validations