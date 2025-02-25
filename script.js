function filterGallery() {
    const input = document.getElementById('search').value.toLowerCase();
    const items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        const description = item.querySelector('p').textContent.toLowerCase();
        if (description.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function showImage(image) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <span class="close" onclick="closeModal(this.parentElement);">&times;</span>
        <img class="modal-content" src="${image}" alt="Gambar Besar">
    `;
    document.body.appendChild(modal);
    
    // Menambahkan kelas show untuk memicu animasi
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal(modal) {
    modal.classList.remove('show');
    modal.classList.add('hide');
    
    // Menghapus modal setelah transisi selesai
    setTimeout(() => {
        modal.remove();
    }, 500); // Waktu yang sama dengan durasi transisi
}
document.addEventListener("scroll", function() {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        let sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});