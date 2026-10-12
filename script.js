/* =========================================================
   NusaTech Belajar: dashboard belajar digital SMA/SMK/MAN
   Fitur: materi singkat, kuis berwaktu, XP & level, lencana,
   filter kategori, simpan progres, konfeti, pintasan keyboard
   ========================================================= */

/* ---------- Data modul ---------- */
// a = indeks jawaban benar pada opts (urutan opsi diacak saat ditampilkan)
const MODULES = [
    {
        id: "coding", cat: "Pemrograman", icon: "</>",
        title: "Dasar Pemrograman",
        desc: "Algoritma, variabel, percabangan, dan perulangan: fondasi semua bahasa pemrograman.",
        points: [
            "<b>Algoritma</b> adalah urutan langkah logis untuk menyelesaikan masalah.",
            "<b>Variabel</b> menyimpan data, sedangkan <b>percabangan</b> (if/else) memilih tindakan sesuai kondisi.",
            "<b>Perulangan</b> (loop) mengulang perintah tanpa menulis kode yang sama berkali-kali."
        ],
        quiz: [
            { q: "Urutan langkah logis untuk menyelesaikan suatu masalah disebut…", opts: ["Algoritma", "Variabel", "Kompiler"], a: 0, why: "Algoritma adalah rancangan langkah sebelum kode ditulis." },
            { q: "Struktur yang dipakai untuk mengulang perintah berkali-kali adalah…", opts: ["Perulangan (loop)", "Percabangan", "Komentar"], a: 0, why: "Loop, misalnya for dan while, mengulang blok kode." },
            { q: "Hasil dari 2 + 3 * 2 pada kebanyakan bahasa pemrograman adalah…", opts: ["8", "10", "12"], a: 0, why: "Perkalian dihitung lebih dulu: 3 * 2 = 6, lalu 2 + 6 = 8." }
        ]
    },
    {
        id: "ai", cat: "Data & AI", icon: "AI",
        title: "Kecerdasan Buatan",
        desc: "Bagaimana mesin belajar dari data, dan mengapa etika penting dalam AI.",
        points: [
            "<b>Machine learning</b> membuat komputer belajar pola dari data, bukan hanya dari aturan manual.",
            "Contoh sehari-hari: rekomendasi video, filter spam, dan pengenalan wajah.",
            "Data pelatihan yang <b>bias</b> dapat menghasilkan keputusan AI yang tidak adil."
        ],
        quiz: [
            { q: "Machine learning belajar terutama dari…", opts: ["Data", "Aturan yang ditulis satu per satu", "Daya listrik"], a: 0, why: "Model menemukan pola dari banyak contoh data." },
            { q: "Mana contoh penerapan AI dalam kehidupan sehari-hari?", opts: ["Rekomendasi video di aplikasi", "Penggaris plastik", "Saklar lampu manual"], a: 0, why: "Rekomendasi dibuat model yang belajar dari kebiasaan menonton." },
            { q: "Mengapa data pelatihan yang bias berbahaya?", opts: ["Hasil AI bisa tidak adil", "Baterai jadi boros", "Layar menjadi gelap"], a: 0, why: "AI meniru pola data. Bila datanya timpang, hasilnya ikut timpang." }
        ]
    },
    {
        id: "jaringan", cat: "Jaringan", icon: "NET",
        title: "Jaringan Komputer",
        desc: "Alamat IP, router, dan DNS: cara perangkat saling terhubung ke internet.",
        points: [
            "<b>Alamat IP</b> adalah identitas perangkat di dalam jaringan.",
            "<b>Router</b> menghubungkan jaringan lokal ke jaringan lain, termasuk internet.",
            "<b>DNS</b> menerjemahkan nama domain (misalnya contoh.id) menjadi alamat IP."
        ],
        quiz: [
            { q: "DNS berfungsi untuk…", opts: ["Menerjemahkan nama domain menjadi alamat IP", "Menyimpan foto di internet", "Mempercepat prosesor"], a: 0, why: "Tanpa DNS kita harus mengetik angka IP untuk membuka situs." },
            { q: "Perangkat yang menghubungkan jaringan lokal ke internet adalah…", opts: ["Router", "Keyboard", "Speaker"], a: 0, why: "Router mengarahkan lalu lintas data antar jaringan." },
            { q: "Alamat IP berfungsi sebagai…", opts: ["Identitas perangkat di jaringan", "Kata sandi Wi-Fi", "Ukuran kecepatan internet"], a: 0, why: "IP membuat data tahu ke perangkat mana harus dikirim." }
        ]
    },
    {
        id: "siber", cat: "Keamanan", icon: "🔒",
        title: "Keamanan Siber",
        desc: "Kenali phishing, buat kata sandi kuat, dan amankan akun dengan verifikasi dua langkah.",
        points: [
            "<b>Phishing</b> adalah penipuan yang memancing korban memberikan data lewat tautan atau pesan palsu.",
            "Kata sandi kuat itu <b>panjang, unik</b>, dan tidak memakai data pribadi.",
            "<b>Verifikasi dua langkah (2FA)</b> menambah lapisan keamanan selain kata sandi."
        ],
        quiz: [
            { q: "Pesan tak dikenal berbunyi \"akunmu diblokir, klik tautan ini sekarang\" kemungkinan besar adalah…", opts: ["Phishing", "Pembaruan resmi", "Hadiah gratis"], a: 0, why: "Nada mendesak dan tautan mencurigakan adalah ciri khas phishing." },
            { q: "Kata sandi mana yang paling kuat?", opts: ["Kucing-Biru-Hujan-47!", "12345678", "namaku2008"], a: 0, why: "Panjang, acak, dan tidak berisi data pribadi sehingga sulit ditebak." },
            { q: "2FA adalah singkatan dari…", opts: ["Verifikasi dua langkah", "Dua file aplikasi", "Dua frekuensi Wi-Fi"], a: 0, why: "Selain kata sandi, kamu perlu kode atau konfirmasi tambahan." }
        ]
    },
    {
        id: "data", cat: "Data & AI", icon: "DB",
        title: "Basis Data",
        desc: "Tabel, kunci utama, dan perintah SQL dasar untuk mengelola data.",
        points: [
            "Data disimpan dalam <b>tabel</b> yang terdiri dari baris (record) dan kolom (field).",
            "<b>Primary key</b> adalah pengenal unik untuk setiap baris.",
            "<b>SQL</b> adalah bahasa untuk mengelola data, misalnya SELECT untuk membaca data."
        ],
        quiz: [
            { q: "Primary key berfungsi sebagai…", opts: ["Pengenal unik tiap baris", "Judul tabel", "Warna kolom"], a: 0, why: "Tidak boleh ada dua baris dengan primary key yang sama." },
            { q: "Perintah SQL untuk membaca data dari tabel adalah…", opts: ["SELECT", "DROP", "INSERT"], a: 0, why: "SELECT mengambil data. INSERT menambah dan DROP menghapus tabel." },
            { q: "Satu baris data pada sebuah tabel disebut…", opts: ["Record", "Kolom", "Skema"], a: 0, why: "Satu record mewakili satu entitas, misalnya satu siswa." }
        ]
    },
    {
        id: "desain", cat: "Desain", icon: "UI",
        title: "Desain UI/UX",
        desc: "Membuat tampilan aplikasi yang indah, mudah dipakai, dan ramah semua orang.",
        points: [
            "<b>UI</b> adalah tampilan antarmuka, sedangkan <b>UX</b> adalah pengalaman saat produk dipakai.",
            "<b>Kontras</b> warna yang cukup membuat teks mudah dibaca.",
            "Tombol dan menu yang <b>konsisten</b> membantu pengguna cepat terbiasa."
        ],
        quiz: [
            { q: "Teks abu-abu muda di atas latar putih bermasalah karena…", opts: ["Kontras rendah sehingga sulit dibaca", "Terlalu cerah", "Memakai terlalu banyak data"], a: 0, why: "Kontras rendah menyulitkan semua orang, terutama pengguna dengan gangguan penglihatan." },
            { q: "UX (User Experience) berfokus pada…", opts: ["Pengalaman pengguna saat memakai produk", "Kecepatan prosesor", "Harga domain"], a: 0, why: "UX mencakup kemudahan, kenyamanan, dan kepuasan pengguna." },
            { q: "Prinsip yang baik untuk tombol aksi adalah…", opts: ["Konsisten dan labelnya jelas", "Berubah bentuk tiap halaman", "Disembunyikan agar rapi"], a: 0, why: "Konsistensi membuat pengguna tidak perlu belajar ulang di tiap halaman." }
        ]
    },
    {
        id: "iot", cat: "Jaringan", icon: "IoT",
        title: "Internet of Things",
        desc: "Sensor, mikrokontroler, dan aktuator yang membuat benda sehari-hari jadi pintar.",
        points: [
            "<b>Sensor</b> membaca kondisi lingkungan, seperti suhu, cahaya, atau gerakan.",
            "<b>Mikrokontroler</b> (misalnya Arduino atau ESP32) memproses data dan mengambil keputusan.",
            "<b>Aktuator</b> melakukan aksi, misalnya menyalakan lampu atau memutar motor."
        ],
        quiz: [
            { q: "Komponen yang bertugas membaca kondisi lingkungan adalah…", opts: ["Sensor", "Aktuator", "Casing"], a: 0, why: "Sensor mengubah kondisi fisik menjadi data." },
            { q: "Contoh mikrokontroler yang populer untuk belajar adalah…", opts: ["Arduino atau ESP32", "Mouse optik", "Printer laser"], a: 0, why: "Keduanya mudah diprogram dan banyak dipakai pelajar." },
            { q: "Lampu otomatis menyala saat gelap, sensor yang cocok adalah…", opts: ["LDR (sensor cahaya)", "Sensor suara", "Sensor tekanan ban"], a: 0, why: "LDR berubah hambatannya mengikuti intensitas cahaya." }
        ]
    },
    {
        id: "literasi", cat: "Literasi", icon: "🌐",
        title: "Literasi & Etika Digital",
        desc: "Cek fakta, jaga jejak digital, dan hormati hak cipta di dunia maya.",
        points: [
            "Sebelum membagikan kabar mengejutkan, <b>cek sumber dan faktanya</b>.",
            "<b>Jejak digital</b> adalah data dan aktivitas yang tertinggal saat kamu daring dan sulit dihapus.",
            "Karya orang lain dilindungi <b>hak cipta</b>, jadi gunakan dengan izin atau lisensi dan cantumkan sumbernya."
        ],
        quiz: [
            { q: "Langkah pertama sebelum membagikan berita yang mengejutkan adalah…", opts: ["Cek sumber dan faktanya", "Langsung bagikan agar cepat viral", "Tunggu teman lain membagikan dulu"], a: 0, why: "Hoaks menyebar cepat karena orang membagikan sebelum memeriksa." },
            { q: "Jejak digital adalah…", opts: ["Data dan aktivitas yang tertinggal saat daring", "Bekas kotoran pada layar", "Nama lain untuk kabel data"], a: 0, why: "Unggahan, komentar, dan riwayat penelusuran semuanya membentuk jejak digital." },
            { q: "Cara yang benar memakai gambar karya orang lain adalah…", opts: ["Minta izin atau pakai lisensi terbuka, lalu cantumkan sumber", "Bebas dipakai asal ada di internet", "Hapus nama pembuatnya"], a: 0, why: "Keberadaan gambar di internet tidak berarti bebas dipakai." }
        ]
    }
];

const BADGES = [
    { id: "first",   icon: "🚀", name: "Langkah Pertama", desc: "Selesaikan 1 modul",           test: s => Object.keys(s.done).length >= 1 },
    { id: "half",    icon: "📚", name: "Pelajar Rajin",   desc: "Selesaikan 4 modul",           test: s => Object.keys(s.done).length >= 4 },
    { id: "perfect", icon: "⭐", name: "Nilai Sempurna",  desc: "Jawab 3 dari 3 soal benar",    test: s => Object.values(s.done).some(v => v >= 3) },
    { id: "lv3",     icon: "⚡", name: "Penjelajah Lv 3", desc: "Capai level 3 (200 XP)",       test: s => s.xp >= 200 },
    { id: "all",     icon: "🏆", name: "Jagoan Digital",  desc: "Selesaikan semua modul",       test: s => Object.keys(s.done).length >= MODULES.length }
];

/* ---------- Konstanta & state ---------- */
const STORE_KEY = "nusatech-belajar-v1";
const DEFAULT_TIME = 20;    // detik per soal (bisa diubah di Pengaturan)
const PASS_SCORE = 2;       // minimal benar agar modul dianggap selesai
const XP_PER_LEVEL = 100;

const $ = id => document.getElementById(id);
const grid = $("subjectGrid"), chipsBox = $("chips"), quizBox = $("quizBox");
const searchInput = $("searchInput"), emptyMessage = $("emptyMessage");

let save = loadSave();
let activeCat = "Semua";
let session = null;   // { mod, idx, score, combo, order, answered, timer, timeLeft, results }

/* ---------- Penyimpanan (aman jika localStorage diblokir) ---------- */
function loadSave() {
    const base = { done: {}, xp: 0, badges: [], theme: null,
        settings: { name: "Siswa", avatar: null, logo: null, time: DEFAULT_TIME, confetti: true } };
    try {
        const raw = JSON.parse(localStorage.getItem(STORE_KEY));
        return raw ? { ...base, ...raw, settings: { ...base.settings, ...(raw.settings || {}) } } : base;
    } catch { return base; }
}
function persist() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(save)); } catch { /* abaikan */ }
}

/* ---------- Utilitas ---------- */
function el(tag, props = {}, ...children) {
    const node = document.createElement(tag);
    Object.entries(props).forEach(([k, v]) => {
        if (k === "class") node.className = v;
        else if (k === "html") node.innerHTML = v;   // hanya untuk data statis di atas
        else if (k.startsWith("on")) node.addEventListener(k.slice(2), v);
        else node.setAttribute(k, v);
    });
    children.flat(Infinity).forEach(c => c != null && node.append(c));
    return node;
}
const shuffle = arr => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const level = () => Math.floor(save.xp / XP_PER_LEVEL) + 1;
const stars = n => { const w = el("div", { class: "stars" }); for (let i = 0; i < 3; i++) w.append(el("span", { class: i < n ? "" : "off" }, "★")); return w; };

function animateNumber(node, to, pad = 0) {
    const from = parseInt(node.textContent, 10) || 0;
    if (from === to || matchMedia("(prefers-reduced-motion: reduce)").matches) { node.textContent = String(to).padStart(pad, "0"); return; }
    const start = performance.now(), dur = 600;
    (function tick(now) {
        const t = Math.min((now - start) / dur, 1);
        node.textContent = String(Math.round(from + (to - from) * t)).padStart(pad, "0");
        if (t < 1) requestAnimationFrame(tick);
    })(start);
}

function toast(html, type = "", ms = 3600) {
    const t = el("div", { class: "toast " + type, role: "status", html });
    $("toastWrap").append(t);
    setTimeout(() => { t.classList.add("out"); setTimeout(() => t.remove(), 450); }, ms);
}

/* ---------- Tema ---------- */
function applyTheme(light) {
    document.body.classList.toggle("light", light);
    $("themeBtn").textContent = light ? "☾" : "☼";
    save.theme = light ? "light" : "dark";
    persist();
}
$("themeBtn").addEventListener("click", () => applyTheme(!document.body.classList.contains("light")));

/* ---------- Kartu modul, filter, pencarian ---------- */
function renderChips() {
    const cats = ["Semua", ...new Set(MODULES.map(m => m.cat))];
    chipsBox.replaceChildren(...cats.map(c =>
        el("button", { class: "chip" + (c === activeCat ? " active" : ""), "aria-pressed": c === activeCat, onclick: () => { activeCat = c; renderChips(); applyFilter(); } }, c)
    ));
}

function renderCards() {
    grid.replaceChildren(...MODULES.map((m, i) => {
        const done = m.id in save.done;
        const card = el("article", { class: "subject-card" + (done ? " completed" : ""), "data-id": m.id, "data-title": m.title },
            el("div", { class: "subject-icon" }, m.icon),
            el("p", { class: "card-number" }, `MODUL ${String(i + 1).padStart(2, "0")} · ${m.cat.toUpperCase()}`),
            el("h3", {}, m.title),
            el("p", {}, m.desc),
            el("div", { class: "card-stars", "aria-label": done ? `Skor terbaik ${save.done[m.id]} dari 3` : "Belum dikerjakan" }, done ? Array.from(stars(save.done[m.id]).childNodes) : ""),
            el("button", { class: "learn-btn", onclick: () => openModule(m.id) }, done ? "Pelajari lagi" : "Mulai Belajar")
        );
        card.dataset.cat = m.cat;
        return card;
    }));
    applyFilter();
}

function applyFilter() {
    const key = searchInput.value.toLowerCase().trim();
    let visible = 0;
    grid.querySelectorAll(".subject-card").forEach(card => {
        const okCat = activeCat === "Semua" || card.dataset.cat === activeCat;
        const okKey = !key || card.textContent.toLowerCase().includes(key);
        card.hidden = !(okCat && okKey);
        if (!card.hidden) visible++;
    });
    emptyMessage.hidden = visible !== 0;
}
searchInput.addEventListener("input", applyFilter);

/* ---------- Progres, XP, level ---------- */
function updateProgress(animated = true) {
    const total = MODULES.length, completed = Object.keys(save.done).length;
    const pct = Math.round((completed / total) * 100);
    const lv = level(), inLevel = save.xp % XP_PER_LEVEL;

    $("progressBar").style.width = pct + "%";
    $("progressText").textContent = pct + "%";
    $("levelText").textContent = lv;
    $("levelNav").textContent = lv;
    $("menuLevel").textContent = `Level ${lv} · ${save.xp} XP`;
    $("coreLevel").textContent = lv;
    $("xpText").textContent = `${inLevel} / ${XP_PER_LEVEL} XP`;
    $("levelBar").style.width = inLevel + "%";
    $("xpMini").style.width = inLevel + "%";

    const set = (id, v, pad) => animated ? animateNumber($(id), v, pad) : ($(id).textContent = String(v).padStart(pad, "0"));
    set("totalMateri", total, 2);
    set("totalSelesai", completed, 2);
    set("totalXp", save.xp, 0);

    $("floatTop").textContent = completed === 0 ? "Selesaikan 1 modul untuk lencana pertama"
        : completed === total ? "Semua modul tuntas, kamu hebat!"
        : `${total - completed} modul lagi untuk tuntas`;
    $("floatBottom").textContent = `${XP_PER_LEVEL - inLevel} XP lagi menuju Level ${lv + 1}`;
}

function addXp(n) {
    const before = level();
    save.xp += n;
    persist();
    if (level() > before) {
        toast(`<b>Naik level!</b> Sekarang kamu Level ${level()} 🎉`);
        const core = document.querySelector(".core");
        core.classList.remove("pulse"); void core.offsetWidth; core.classList.add("pulse");
        confetti(70);
    }
    updateProgress();
}

/* ---------- Lencana ---------- */
function renderBadges() {
    $("badgeGrid").replaceChildren(...BADGES.map(b => {
        const on = save.badges.includes(b.id);
        return el("div", { class: "badge" + (on ? " unlocked" : ""), title: on ? "Terbuka" : "Terkunci" },
            el("span", { class: "b-icon" }, on ? b.icon : "🔒"),
            el("strong", {}, b.name),
            el("small", {}, b.desc));
    }));
}
function checkBadges() {
    let gained = false;
    BADGES.forEach(b => {
        if (!save.badges.includes(b.id) && b.test(save)) {
            save.badges.push(b.id);
            gained = true;
            toast(`${b.icon} Lencana baru: <b>${b.name}</b>`);
        }
    });
    if (gained) { persist(); renderBadges(); }
}

/* ---------- Ruang kuis ---------- */
function setHeader(title, desc) {
    $("quizTitle").textContent = title;
    $("quizDescription").textContent = desc;
}
function show(...nodes) {
    stopTimer();
    quizBox.replaceChildren(el("div", { class: "enter" }, nodes));
}
function goTo(id) { $(id).scrollIntoView({ behavior: "smooth", block: "start" }); }

function showPlaceholder() {
    session = null;
    setHeader("Siap Menjelajah?", "Pilih satu modul di atas. Kamu akan membaca ringkasan materi dulu, lalu menjawab 3 soal berwaktu.");
    show(el("div", { class: "quiz-placeholder" }, el("p", {}, "Belum ada modul yang dipilih.")));
}

// Tahap 1: ringkasan materi
function openModule(id) {
    const mod = MODULES.find(m => m.id === id);
    session = { mod, idx: 0, score: 0, combo: 0, answered: false, results: [] };
    grid.querySelectorAll(".subject-card").forEach(c => c.classList.toggle("selected", c.dataset.id === id));
    setHeader(mod.title, mod.desc);
    show(
        el("span", { class: "lesson-tag" }, `Ringkasan materi · ${mod.cat}`),
        el("h3", {}, "Yang perlu kamu tahu"),
        el("ul", { class: "lesson-points" }, mod.points.map((p, i) => el("li", {}, el("span", { class: "n" }, i + 1), el("span", { html: p })))),
        el("p", {}, `Kuis: ${mod.quiz.length} soal, ${save.settings.time} detik per soal. Benar minimal ${PASS_SCORE} untuk menuntaskan modul. Jawab cepat untuk bonus XP!`),
        el("div", { class: "q-actions" },
            el("button", { class: "btn-primary", onclick: startQuiz }, "Mulai Kuis"),
            el("button", { class: "btn-ghost", onclick: backToModules }, "Pilih modul lain"))
    );
    goTo("kuis");
}

// Tahap 2: soal berwaktu
function startQuiz() {
    session.idx = 0; session.score = 0; session.combo = 0; session.results = [];
    session.questions = session.mod.quiz.map(q => ({ ...q, order: shuffle(q.opts.map((t, i) => ({ t, ok: i === q.a }))) }));
    showQuestion();
}

function showQuestion() {
    const s = session, q = s.questions[s.idx];
    s.answered = false;
    s.maxTime = save.settings.time;
    s.timeLeft = s.maxTime;

    const dots = el("div", { class: "q-dots", "aria-hidden": "true" },
        s.questions.map((_, i) => el("i", { class: i < s.results.length ? (s.results[i] ? "ok" : "no") : i === s.idx ? "now" : "" })));
    const timerBar = el("i");
    const comboNode = el("span", { class: "combo" }, s.combo >= 2 ? `🔥 Beruntun ×${s.combo}` : "");
    const feedback = el("p", { id: "quizFeedback", role: "status" });
    const explain = el("p", { class: "explain" });
    const actions = el("div", { class: "q-actions" });

    const optionBtns = q.order.map((o, i) => {
        const b = el("button", { class: "option-btn", onclick: () => answer(i) },
            el("span", { class: "option-key" }, i + 1), el("span", {}, o.t));
        return b;
    });

    s.ui = { timerBar, comboNode, feedback, explain, actions, optionBtns, dots };

    show(
        el("div", { class: "q-head" }, el("span", {}, `Soal ${s.idx + 1} dari ${s.questions.length}`), dots, comboNode),
        el("div", { class: "timer-track" }, timerBar),
        el("p", { class: "question-text" }, q.q),
        optionBtns,
        feedback, explain, actions
    );
    startTimer();
}

function startTimer() {
    const s = session;
    stopTimer();
    s.timer = setInterval(() => {
        s.timeLeft = Math.max(0, s.timeLeft - 0.1);
        const pct = (s.timeLeft / s.maxTime) * 100;
        s.ui.timerBar.style.width = pct + "%";
        s.ui.timerBar.className = pct < 25 ? "danger" : pct < 50 ? "warn" : "";
        if (s.timeLeft <= 0) answer(-1);
    }, 100);
}
function stopTimer() { if (session && session.timer) { clearInterval(session.timer); session.timer = null; } }

function answer(choice) {
    const s = session;
    if (!s || s.answered) return;
    s.answered = true;
    stopTimer();

    const q = s.questions[s.idx], { optionBtns, feedback, explain, actions, comboNode } = s.ui;
    const correct = choice >= 0 && q.order[choice].ok;

    optionBtns.forEach((b, i) => {
        b.disabled = true;
        if (q.order[i].ok) b.classList.add("correct");
    });
    s.results.push(correct);

    if (correct) {
        const bonus = Math.ceil(s.timeLeft / 4);          // 0–5 XP bonus kecepatan
        const gain = 10 + bonus;
        s.score++; s.combo++;
        feedback.textContent = `✅ Benar! +${gain} XP${bonus >= 4 ? " (bonus cepat ⚡)" : ""}`;
        feedback.className = "feedback ok";
        toast(`✅ <b>Jawaban benar!</b> +${gain} XP`, "ok", 2200);
        comboNode.textContent = s.combo >= 2 ? `🔥 Beruntun ×${s.combo}` : "";
        addXp(gain);
    } else {
        s.combo = 0;
        if (choice >= 0) optionBtns[choice].classList.add("wrong");
        const msg = choice < 0 ? "Waktu habis!" : "Jawaban salah.";
        feedback.textContent = `❌ ${msg} Jawaban yang benar ditandai hijau.`;
        feedback.className = "feedback bad";
        toast(`❌ <b>${msg}</b> Pelajari penjelasannya ya.`, "bad", 2600);
        comboNode.textContent = "";
    }
    explain.textContent = "💡 " + q.why;

    const last = s.idx === s.questions.length - 1;
    actions.append(el("button", { class: "btn-primary", id: "nextBtn", onclick: last ? finishQuiz : nextQuestion }, last ? "Lihat hasil" : "Soal berikutnya"));
    $("nextBtn").focus({ preventScroll: true });
}

function nextQuestion() { session.idx++; showQuestion(); }

// Tahap 3: hasil
function finishQuiz() {
    const s = session, { mod, score } = s, total = s.questions.length;
    const passed = score >= PASS_SCORE;
    const firstTime = !(mod.id in save.done);
    let bonusXp = 0;

    if (passed) {
        if (firstTime) bonusXp = 20;
        save.done[mod.id] = Math.max(save.done[mod.id] || 0, score);
        persist();
    }

    const msg = score === total ? "Sempurna! Kamu menguasai modul ini."
        : passed ? "Bagus! Modul ini berhasil kamu tuntaskan."
        : "Sedikit lagi! Baca ringkasannya, lalu coba lagi.";

    show(el("div", { class: "result" },
        el("h3", {}, passed ? "Modul Selesai! 🎉" : "Belum Lulus"),
        stars(score),
        el("p", { class: "big" }, `${score} dari ${total} jawaban benar`),
        el("p", {}, msg),
        bonusXp ? el("div", { class: "xp-gain" }, `+${bonusXp} XP bonus modul pertama kali selesai`) : null,
        el("div", { class: "q-actions" },
            el("button", { class: "btn-primary", onclick: startQuiz }, "Ulangi Kuis"),
            el("button", { class: "btn-ghost", onclick: () => openModule(mod.id) }, "Baca materi lagi"),
            el("button", { class: "btn-ghost", onclick: backToModules }, "Pilih modul lain"))
    ));

    renderCards();
    if (bonusXp) addXp(bonusXp); else updateProgress();
    if (passed) confetti(score === total ? 140 : 80);
    checkBadges();
}

function backToModules() {
    showPlaceholder();
    grid.querySelectorAll(".subject-card").forEach(c => c.classList.remove("selected"));
    goTo("materi");
}

/* ---------- Konfeti (kanvas ringan) ---------- */
const canvas = $("confetti"), ctx = canvas.getContext("2d");
let pieces = [], raf = null;
function sizeCanvas() { canvas.width = innerWidth; canvas.height = innerHeight; }
addEventListener("resize", sizeCanvas); sizeCanvas();

function confetti(count = 80) {
    if (!save.settings.confetti) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const colors = ["#58d5ff", "#a78bfa", "#fbbf24", "#4ade80", "#fb7185"];
    for (let i = 0; i < count; i++) {
        pieces.push({
            x: innerWidth / 2 + (Math.random() - .5) * 200, y: innerHeight * .55,
            vx: (Math.random() - .5) * 14, vy: -Math.random() * 14 - 4,
            size: 5 + Math.random() * 6, rot: Math.random() * 6, vr: (Math.random() - .5) * .4,
            color: colors[i % colors.length], life: 0
        });
    }
    if (!raf) raf = requestAnimationFrame(drawConfetti);
}
function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces = pieces.filter(p => p.life < 150 && p.y < canvas.height + 20);
    pieces.forEach(p => {
        p.vy += .35; p.x += p.vx; p.y += p.vy; p.vx *= .99; p.rot += p.vr; p.life++;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.globalAlpha = Math.max(0, 1 - p.life / 150);
        ctx.fillStyle = p.color; ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * .6);
        ctx.restore();
    });
    raf = pieces.length ? requestAnimationFrame(drawConfetti) : (ctx.clearRect(0, 0, canvas.width, canvas.height), null);
}

/* ---------- Pintasan keyboard ---------- */
document.addEventListener("keydown", e => {
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) || document.querySelector("dialog[open]");
    if (e.key === "/" && !typing) { e.preventDefault(); searchInput.focus(); return; }
    if (typing || !session || !session.ui || e.ctrlKey || e.metaKey || e.altKey) return;

    if (!session.answered) {
        const idx = "123".indexOf(e.key) >= 0 ? "123".indexOf(e.key) : "abc".indexOf(e.key.toLowerCase());
        if (idx >= 0 && session.ui.optionBtns[idx]) answer(idx);
    }
});

/* ---------- Atur ulang ---------- */
$("resetBtn").addEventListener("click", () => {
    if (!confirm("Hapus semua progres, XP, dan lencana di perangkat ini?")) return;
    const theme = save.theme;
    save = { done: {}, xp: 0, badges: [], theme, settings: save.settings };
    persist();
    renderCards(); renderBadges(); updateProgress(false); showPlaceholder();
    toast("Progres telah diatur ulang. Selamat memulai lagi!");
});

/* =========================================================
   HEADER: logo, foto profil, menu akun, dialog akun/pengaturan
   ========================================================= */
const LOGO_DEFAULT = "assets/logo_upi.png";   // ganti nama file sesuai logo kamu
const menuBtn = $("menuBtn"), userMenu = $("userMenu");
const dialog = $("panelDialog"), imageInput = $("imageInput");

/* Tampilkan nama, inisial/foto profil, dan logo */
function renderAvatars() {
    const { name, avatar } = save.settings;
    document.querySelectorAll("[data-username]").forEach(n => { n.textContent = name || "Siswa"; });
    document.querySelectorAll("[data-avatar]").forEach(n => {
        if (avatar) { n.style.backgroundImage = `url("${avatar}")`; n.textContent = ""; }
        else { n.style.backgroundImage = ""; n.textContent = ((name || "S").trim().charAt(0) || "S").toUpperCase(); }
    });
}
function renderLogo() {
    const img = $("brandLogo"), target = save.settings.logo || LOGO_DEFAULT;
    const probe = new Image();
    probe.onload = () => { img.src = target; img.hidden = false; };
    probe.onerror = () => { img.hidden = true; };   // file belum ada: tampilkan teks saja
    probe.src = target;
}
function renderIdentity() { renderAvatars(); renderLogo(); }

/* ---------- Dropdown menu ---------- */
function toggleMenu(open = userMenu.hidden) {
    userMenu.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
    if (open) userMenu.querySelector("[role=menuitem]").focus();
}
menuBtn.addEventListener("click", e => { e.stopPropagation(); toggleMenu(); });
document.addEventListener("click", e => { if (!userMenu.hidden && !userMenu.contains(e.target)) toggleMenu(false); });
document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !userMenu.hidden) { toggleMenu(false); menuBtn.focus(); }
});
userMenu.addEventListener("keydown", e => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const items = [...userMenu.querySelectorAll("[role=menuitem]")];
    const i = items.indexOf(document.activeElement);
    items[(i + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length].focus();
});
userMenu.querySelectorAll("[data-open]").forEach(b =>
    b.addEventListener("click", () => { toggleMenu(false); openPanel(b.dataset.open); }));
userMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => toggleMenu(false)));

/* ---------- Unggah gambar (diperkecil agar hemat penyimpanan) ---------- */
function readImage(file, { size = 160, square = true } = {}) {
    return new Promise((resolve, reject) => {
        if (!file || !file.type.startsWith("image/")) return reject(new Error("File harus berupa gambar."));
        if (file.size > 5 * 1024 * 1024) return reject(new Error("Ukuran gambar maksimal 5 MB."));
        const url = URL.createObjectURL(file), img = new Image();
        img.onload = () => {
            URL.revokeObjectURL(url);
            let sx = 0, sy = 0, sw = img.width, sh = img.height, w, h;
            if (square) {                       // potong tengah menjadi persegi
                const m = Math.min(img.width, img.height);
                sx = (img.width - m) / 2; sy = (img.height - m) / 2; sw = sh = m; w = h = size;
            } else {                            // pertahankan rasio, tinggi maksimum = size
                const r = Math.min(1, size / img.height);
                w = Math.round(img.width * r); h = Math.round(img.height * r);
            }
            const c = document.createElement("canvas");
            c.width = w; c.height = h;
            c.getContext("2d").drawImage(img, sx, sy, sw, sh, 0, 0, w, h);
            resolve(c.toDataURL("image/png"));
        };
        img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("Gambar tidak dapat dibaca.")); };
        img.src = url;
    });
}
function pickImage(opts, onDone) {
    imageInput.value = "";
    imageInput.onchange = async () => {
        try { onDone(await readImage(imageInput.files[0], opts)); }
        catch (err) { toast(`⚠️ ${err.message}`, "bad", 3000); }
    };
    imageInput.click();
}

/* ---------- Dialog Akun & Pengaturan ---------- */
function field(label, control, id) {
    control.id = id;
    return el("div", { class: "field" }, el("label", { for: id }, label), control);
}

function panelAkun() {
    const name = el("input", { type: "text", maxlength: "24", placeholder: "Nama kamu", value: save.settings.name });
    name.addEventListener("input", () => {
        save.settings.name = name.value.trim() || "Siswa";
        persist(); renderAvatars();
    });
    const stat = (v, l) => el("div", {}, el("b", {}, v), el("span", {}, l));
    return el("div", { class: "panel-stack" },
        el("div", { class: "profile-row" },
            el("span", { class: "avatar xl", "data-avatar": "" }),
            field("Nama tampilan", name, "nameInput")),
        el("div", { class: "btn-row" },
            el("button", { class: "btn-ghost", onclick: () => pickImage({ size: 160, square: true }, d => { save.settings.avatar = d; persist(); renderAvatars(); toast("📷 Foto profil diperbarui", "ok", 2200); }) }, "Ubah foto profil"),
            el("button", { class: "btn-ghost", onclick: () => { save.settings.avatar = null; persist(); renderAvatars(); } }, "Hapus foto")),
        el("div", { class: "stat-grid" },
            stat(level(), "Level"), stat(save.xp, "Total XP"),
            stat(`${Object.keys(save.done).length}/${MODULES.length}`, "Modul selesai"),
            stat(`${save.badges.length}/${BADGES.length}`, "Lencana")));
}

function panelPengaturan() {
    const theme = el("select", { onchange: e => applyTheme(e.target.value === "light") },
        el("option", { value: "dark" }, "Gelap"), el("option", { value: "light" }, "Terang"));
    theme.value = document.body.classList.contains("light") ? "light" : "dark";

    const time = el("select", { onchange: e => { save.settings.time = +e.target.value; persist(); } },
        [10, 20, 30, 45].map(t => el("option", { value: t }, `${t} detik`)));
    time.value = save.settings.time;

    const conf = el("input", { type: "checkbox", checked: save.settings.confetti ? "" : null, onchange: e => { save.settings.confetti = e.target.checked; persist(); } });
    conf.checked = save.settings.confetti;

    const logoSrc = save.settings.logo || LOGO_DEFAULT;
    const preview = el("img", { class: "logo-preview", alt: "Pratinjau logo", src: logoSrc });
    const holder = el("div", { class: "logo-box" }, preview);
    preview.onerror = () => holder.replaceChildren(el("span", { class: "hint" }, "Belum ada logo"));

    return el("div", { class: "panel-stack" },
        field("Tema tampilan", theme, "setTema"),
        field("Waktu per soal", time, "setWaktu"),
        el("label", { class: "check-row", for: "setKonfeti" }, conf, "Efek konfeti saat lulus dan naik level"),
        el("div", { class: "field" },
            el("label", {}, "Logo di header"),
            holder,
            el("p", { class: "hint" }, "Gunakan gambar PNG/SVG berlatar transparan, maks. 5 MB."),
            el("div", { class: "btn-row" },
                el("button", { class: "btn-ghost", onclick: () => pickImage({ size: 120, square: false }, d => { save.settings.logo = d; persist(); renderLogo(); openPanel("pengaturan"); toast("🖼️ Logo header diperbarui", "ok", 2200); }) }, "Unggah logo"),
                el("button", { class: "btn-ghost", onclick: () => { save.settings.logo = null; persist(); renderLogo(); openPanel("pengaturan"); } }, "Kembalikan default"))));
}

function openPanel(kind) {
    const isAkun = kind === "akun";
    dialog.replaceChildren(el("div", { class: "panel-body" },
        el("div", { class: "panel-top" },
            el("h3", { id: "panelTitle" }, isAkun ? "Akun Saya" : "Pengaturan"),
            el("button", { class: "panel-close", "aria-label": "Tutup", onclick: () => dialog.close() }, "✕")),
        isAkun ? panelAkun() : panelPengaturan()));
    renderAvatars();
    if (!dialog.open) dialog.showModal();
}
dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });   // klik area gelap = tutup

/* ---------- Inisialisasi ---------- */
applyTheme(save.theme ? save.theme === "light" : matchMedia("(prefers-color-scheme: light)").matches);
renderChips();
renderCards();
renderBadges();
renderIdentity();
updateProgress(false);
showPlaceholder();