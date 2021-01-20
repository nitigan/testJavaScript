const status = 400

switch (status) {
    case 200:
        console.log('OK!')
        break;
    case 400:
        console.log('Error 400!')
        break
    case 500:
        console.log('Error 500!')
        break
    default:
        console.log('Unknown status')
}