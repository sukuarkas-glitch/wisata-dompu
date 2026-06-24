console.log("Wisata Dompu siap digunakan!");

document.getElementById("kontakForm")?.addEventListener("submit", function(e){

    e.preventDefault();

    let nama = document.getElementById("nama").value;

    let email = document.getElementById("email").value;

    let pesan = document.getElementById("pesan").value;

    let text =
    "Nama: " + nama +
    "%0AEmail: " + email +
    "%0APesan: " + pesan;

    window.open(
        "https://wa.me/6281332856101?text=" + text,
        "_blank"
    );

});