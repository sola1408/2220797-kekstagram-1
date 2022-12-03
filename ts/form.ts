const input = document.querySelector('#upload-file') as HTMLInputElement;
const closeModalButtun = document.querySelector('.img-upload__cancel.cancel');

closeModalButtun?.addEventListener('click', () => {
    const imgUpload = document.querySelector('.img-upload__overlay');
    imgUpload?.classList.add('hidden');

    const body = document.body;
    body.classList.remove('modal-open');
})

input?.addEventListener('change', (e) => {
    const file = input.files?.item(0) as File;

    const img = document.createElement('img');
    if (input.files) {
        const fs = new FileReader();
        fs.readAsDataURL(file);
        fs.addEventListener('load', (e) => {
            const imgUploadPreview = document.querySelector('.img-upload__preview img') as HTMLImageElement;
            imgUploadPreview.src = e.target?.result as string;
        });
    }

    const imgUpload = document.querySelector('.img-upload__overlay');
    imgUpload?.classList.remove('hidden');

    const body = document.body;
    body.classList.add('modal-open');
})

document.querySelector('.page-footer.container')?.addEventListener('click', (e) => {
    console.log(e);
})

