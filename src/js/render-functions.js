import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function renderGalleryItem({
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads,

}) {
    return `
    <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img 
                class="gallery-image"
                src="${webformatURL}"
                data-source="${largeImageURL}"
                alt="${tags}"
                width=360
                height=200
            />
        </a>
        <ul class="metadata">
            <li>
                <p class="metadata-heading">Likes</p>
                <p>${likes}</p>
            </li>
            <li>
                <p class="metadata-heading">Views</p>
                <p>${views}</p>
            </li>
            <li>
                <p class="metadata-heading">Comments</p>
                <p>${comments}</p>
            </li>
            <li>
                <p class="metadata-heading">Downloads</p>
                <p>${downloads}</p>
            </li>
        </ul>
    </li>`;
}

export function renderGallery(gallery, images) {
    if (gallery) {
        const galleryHTML = images
            .map(pictureInfo => renderGalleryItem(pictureInfo))
            .join('');
        
        refs.gallery.innerHTML = galleryHTML;

        const lightBoxInstance = new SimpleLightbox('.gallery a');

        lightBoxInstance.refresh();
    }
}

export function clearGallery(gallery) {
    galleryHTML = '';
}
