"use strict";
var _a;
const input = document.querySelector('#upload-file');
const closeModalButtun = document.querySelector('.img-upload__cancel.cancel');
closeModalButtun === null || closeModalButtun === void 0 ? void 0 : closeModalButtun.addEventListener('click', () => {
    const imgUpload = document.querySelector('.img-upload__overlay');
    imgUpload === null || imgUpload === void 0 ? void 0 : imgUpload.classList.add('hidden');
    const body = document.body;
    body.classList.remove('modal-open');
});
input === null || input === void 0 ? void 0 : input.addEventListener('change', (e) => {
    var _a;
    const file = (_a = input.files) === null || _a === void 0 ? void 0 : _a.item(0);
    const img = document.createElement('img');
    if (input.files) {
        const fs = new FileReader();
        fs.readAsDataURL(file);
        fs.addEventListener('load', (e) => {
            var _a;
            const imgUploadPreview = document.querySelector('.img-upload__preview img');
            imgUploadPreview.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        });
    }
    const imgUpload = document.querySelector('.img-upload__overlay');
    imgUpload === null || imgUpload === void 0 ? void 0 : imgUpload.classList.remove('hidden');
    const body = document.body;
    body.classList.add('modal-open');
});
(_a = document.querySelector('.page-footer.container')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
    console.log(e);
});
