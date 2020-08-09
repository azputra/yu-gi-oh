import Swal from 'sweetalert2'

export default ({ dispatch, getState }) => {
    return next => action => {
        if (action.type === "FAVORITE_CARD") {
            const myFavCard = getState().favoriteReducer.favoriteCard
            if (myFavCard.find((card) => {
                return card.id === action.payload.id
            })) {
                Swal.fire({
                    title: `<span style="color: #FFFFFF; font-size:16px">kamu sudah punya ${action.payload.name}</span>`,
                    imageUrl: action.payload.card_images[0].image_url,
                    background: 'url(https://vignette.wikia.nocookie.net/yugioh/images/9/95/SlifertheSkyDragon-GBI-AE-Back.png/revision/latest/scale-to-width-down/328?cb=2010072608370)',
                    imageHeight: 280,
                    width: 330,
                })
            } else {
                next(action)
            }
        } else {
            next(action)
        }
    }
}